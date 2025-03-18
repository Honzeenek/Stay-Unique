<script lang="ts">
    import Nav from './Nav.svelte';
    import Footer from './Footer.svelte';

    const handleSubmit = async (event: Event) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        await sendData(data);
    }

    interface FormData {
        name: string;
        email: string;
        organization?: string;
        service: string;
        message: string;
    }

    const sendData = async (formData: FormData) => {
        const resp = await fetch('/mailgun', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const name = await resp.json();
        response = name;
    }

    let response = '';
</script>

<main>
    <div class="glow-effect"></div>
    <Nav/>
    <section class="contact-content">
        <h1>Ready to enhance <br> your <span>WEB</span> game?</h1>
        <h2>Let's break the ice</h2>
        <form on:submit={handleSubmit}>
            <div id="greenLine"></div>
            <label>
                What's your name?
                <input name="name" placeholder="John Doe" type="text"/>
            </label>
            <label>
                What's your email?
                <input name="email" placeholder="john.doe@email.com" type="email"/>
            </label>
            <label>
                What's the name of your organization?
                <input name="organization" placeholder="Pfizer" type="text"/>
            </label>
            <label>
                What service are you looking for?
                <input name="service" placeholder="Web Development / Web Design" type="text"/>
            </label>
            <label>
                Your message
                <textarea name="message" placeholder="Hello Jan, I need help with..."></textarea>
            </label>
            <button type="submit">SUBMIT</button>
        </form>
    </section>
    <Footer/>
    <p>{response}</p>
</main>


<style>
    main {
        padding: 0 5.5rem;
        position: relative;
    }

    .glow-effect {
        position: absolute;
        opacity: 50%;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 60vw;
        height: 70px;
        background: radial-gradient(
                ellipse at center top,
                rgba(255, 255, 255, 0.7) 0%,
                rgba(255, 255, 255, 0.4) 20%,
                rgba(255, 255, 255, 0) 60%
        );
        pointer-events: none;
        z-index: 1;
    }


    .contact-content {
        display: flex;
        flex-direction: column;
        padding: 13rem 0;
        color: #ffffff;
        max-width: 600px;
        width: 100%;

        h1 {
            line-height: 120%;
            font-size: 3rem;
            font-weight: bold;
            padding: 0 0 1rem 0;

            span {
                color: #23CE6B;
            }
        }

        h2 {
            font-size: 1.5rem;
            padding: 2rem 0;
            border-bottom: #b4cded 1px solid;
            width: 100%;
            transition: background 0.5s ease-in;
        }

        form {
            display: flex;
            flex-direction: column;
            max-width: 600px;
            font-size: 1.5rem;

            label {
                font-size: 1.5rem;
                display: flex;
                padding: 2.5rem 0;
                gap: 1rem;
                flex-direction: column;
                border: none;
                border-bottom: 1px solid #2A2A2A;
                transition: border-color 0.5s ease;

                input, textarea {
                    font-family: inherit;
                    font-size: 1.2rem;
                    background: transparent;
                    border: none;
                    color: #ffffff;
                    width: 100%;
                    outline: none;
                    padding: 1rem 0;
                }

                textarea {
                    resize: none;
                }

                &:has(input:focus) {
                    border-bottom-color: #23ce6b;
                }
            }

            label:nth-child(6) {
                border-bottom: none;
            }

            button {
                font-family: inherit;
                font-size: 1.5rem;
                background: #23ce6b;
                border-radius: 1rem;
                padding: 1rem 0;
                border: none;
                font-weight: bold;
                cursor: pointer;
                transition: transform 1.05s var(--elastic-ease);
                -webkit-tap-highlight-color: transparent;
            }

            button:active {
                transform: scaleX(0.955) scaleY(0.954)
            }
        }
    }
</style>