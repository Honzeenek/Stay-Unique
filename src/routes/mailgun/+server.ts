import { json } from "@sveltejs/kit";
import FormData from "form-data"; // form-data v4.0.1
import Mailgun from "mailgun.js"; // mailgun.js v11.1.0

export async function POST({ request }) {
  const { name, email, organization, service, message } = await request.json();
  console.log(process.env.MAILGUN_API_KEY);
  const mailgun = new Mailgun(FormData);
  const mg = mailgun.client({
    username: "api",
    key: "e978d3ca7aa870af0d92d31a538853bd-623424ea-4b9b15a6", // When you have an EU-domain, you must specify the endpoint:
    // url: "https://api.eu.mailgun.net/v3"
  });
  try {
    const data = await mg.messages.create(
      "sandboxfc7fa8bb89cc40d8a4854b5d57fa165c.mailgun.org",
      {
        from: "Mailgun Sandbox <postmaster@sandboxfc7fa8bb89cc40d8a4854b5d57fa165c.mailgun.org>",
        to: ["Jan Palenik <jan.palenik@icloud.com>"],
        subject: "Hello Jan Palenik",
        text: `Hello Jan Palenik, you have ${message} from ${name} (${email}) from ${organization} about ${service}.`,
      },
    );

    console.log(data); // logs response data
  } catch (error) {
    console.log(error); //logs any error
  }
  return json(name);
}
