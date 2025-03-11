<script lang="ts">
    import Nav from './Nav.svelte';
    import Footer from './Footer.svelte';

    const handleSubmit = (event: Event) => {
        event.preventDefault();
    }
</script>

<main>
    <div class="glow-effect"></div>
    <Nav />
    <section class="contact-content">
        <h1>Ready to enhance <br> your <span>WEB</span> game?</h1>
        <h2>Let's break the ice</h2>
        <form on:submit={handleSubmit}>
            <div id="greenLine"></div>
            <label>
                What's your name?
                <input type="text" placeholder="John Doe" />
            </label>
<!--            <div class="line"></div>-->
            <label>
                What's your email?
                <input type="email" placeholder="john.doe@email.com" />
            </label>
<!--            <div class="line"></div>-->
            <label>
                What's the name of your organization?
                <input type="text" placeholder="Pfizer" />
            </label>
<!--            <div class="line"></div>-->
            <label>
                What service are you looking for?
                <input type="text" placeholder="Web Development / Web Design"/>
            </label>
<!--            <div class="line"></div>-->
            <label>
                Your message
                <textarea placeholder="Hello Jan, I need help with..."></textarea>
            </label>
            <button>SUBMIT</button>
        </form>
    </section>
    <Footer />
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
        padding: 5rem 0 ;
        color: #ffffff;
        max-width: 600px;
        width: 100%;
        h1 {
            line-height: 120%;
            font-size: 3rem;
            font-weight: bold;
            padding: 0 0 1rem 0;

            span {
                color: #A4FF4F;
            }
        }

        h2 {
            font-size: 1.5rem;
            padding: 2rem 0;
            border-bottom: #A4FF4F 1px solid;
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
                padding: 2rem 0 ;
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
                }
                textarea {
                    resize: none;
                }

                &:has(input:focus),
                &:has(textarea:focus) {
                    border-bottom-color: #A4FF4F;
                }
            }
            button {
                font-family: inherit;
                font-size: 1.5rem;
                background: #A4FF4F;
                border-radius: 1rem;
                padding: 1rem 0;
                border: none;
                font-weight: bold;
                cursor: pointer;
                transition: 0.5s ease;
            }
            button:hover {
                transform: translateY(-5px);
            }
        }
    }
</style>