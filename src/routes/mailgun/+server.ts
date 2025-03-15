import { json } from "@sveltejs/kit";
import FormData from "form-data";
import Mailgun from "mailgun.js";
import { MAILGUN_API_KEY } from "$env/static/private";

export async function POST({ request }) {
  const { name, email, organization, service, message } = await request.json();
  const mailgun = new Mailgun(FormData);
  const mg = mailgun.client({
    username: "api",
    key: MAILGUN_API_KEY,
    // url: "https://api.eu.mailgun.net/v3"
  });
  try {
    const data = await mg.messages.create("your-domain.com", {
      from: `Mailgun Sandbox <postmaster@>`,
      to: ["Jan Palenik <jan.palenik@icloud.com>"],
      subject: "Hello Jan Palenik",
      text: `Hello Jan Palenik, you have ${message} from ${name} (${email}) from ${organization} about ${service}.`,
    });

    console.log(data);
  } catch (error) {
    console.log(error);
  }
  return json(name);
}
