<script lang="ts">
    import Nav from './Nav.svelte';
    import Footer from './Footer.svelte';

    const handleSubmit = async (event: Event) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);
        const data: ContactFormData = {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            organization: formData.get('organization') as string | undefined,
            service: formData.get('service') as string,
            message: formData.get('message') as string
        };
        await sendData(data);
    }

    interface ContactFormData {
        name: string;
        email: string;
        organization?: string;
        service: string;
        message: string;
    }

    const sendData = async (formData: ContactFormData) => {
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

<div class="page-container">
    <div class="glow-effect"></div>
    <Nav/>
    <main class="contact-content">
        <h1>Ready to enhance <br> your <span>WEB</span> game?</h1>
        <h2>Let's break the ice</h2>
        <form on:submit={handleSubmit}>
            <div id="greenLine"></div>
            <div class="form-group">
                <label for="name">What's your name?</label>
                <input id="name" name="name" placeholder="John Doe" type="text" required/>
            </div>
            <div class="form-group">
                <label for="email">What's your email?</label>
                <input id="email" name="email" placeholder="john.doe@email.com" type="email" required/>
            </div>
            <div class="form-group">
                <label for="organization">What's the name of your organization?</label>
                <input id="organization" name="organization" placeholder="Pfizer" type="text"/>
            </div>
            <div class="form-group">
                <label for="service">What service are you looking for?</label>
                <input id="service" name="service" placeholder="Web Development / Web Design" type="text" required/>
            </div>
            <div class="form-group">
                <label for="message">Your message</label>
                <textarea id="message" name="message" placeholder="Hello Jan, I need help with..." required></textarea>
            </div>
            <button type="submit">SUBMIT</button>
        </form>
    </main>
    <Footer/>
    {#if response}
        <p aria-live="polite">{response}</p>
    {/if}
</div>

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

            .form-group {
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

            .form-group:nth-child(6) {
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