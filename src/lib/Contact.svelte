<script lang="ts">
    import Nav from './Nav.svelte';

    const handleSubmit = (event: Event) => {
        event.preventDefault();
    }
</script>

<main>
    <Nav />
    <section class="contact-content">
        <h1>Ready to enhance <br> your <span>WEB</span> game?</h1>
        <h2>Let's break the ice and begin</h2>
        <form on:submit={handleSubmit}>
            <div id="greenLine"></div>
            <label>
                What's your name?
                <input type="text" placeholder="John Doe" />
            </label>
            <div class="line"></div>
            <label>
                What's your email?
                <input type="email" placeholder="john.doe@email.com" />
            </label>
            <div class="line"></div>
            <label>
                What's the name of your organization?
                <input type="text" placeholder="Pfizer" />
            </label>
            <div class="line"></div>
            <label>
                What service are you looking for?
                <input type="text" placeholder="Web Development / Web Design"/>
            </label>
            <div class="line"></div>
            <label>
                Your message
                <textarea placeholder="Hello Jan, I need help with..."></textarea>
            </label>
            <button>SUBMIT</button>
        </form>
    </section>
</main>

<style>
    main {
        padding: 0 5.5rem;
        position: relative;
    }


    .contact-content {
        display: flex;
        flex-direction: column;
        padding: 5rem 0 ;
        color: #ffffff;

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
        }

        #greenLine {
            border-radius: 1rem;
            border: 1px solid transparent;
            background: #A4FF4F;
            height: 1px;
            width: 100%;
            transition: background 0.5s ease-in;
        }

        form:has(input:focus) #greenLine,
        form:has(textarea:focus) #greenLine {
            background: linear-gradient(
                    to right,
                    #2a2a2a 0%,
                    #2A2A2A 70%,
                    #1e1e1e 100%
            );
        }
        form {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            max-width: 600px;
            font-size: 1.5rem;

            label {
                font-size: 1.5rem;
                display: flex;
                flex-direction: column;
                gap: 1rem;
                border: none;
                padding: 1rem 0;

                input, textarea {
                    font-family: inherit;
                    font-size: 1.2rem;
                    background: transparent;
                    border: none;
                    color: #ffffff;
                    padding: 0.5rem 0;
                    width: 100%;
                    outline: none;
                }
                textarea {
                    resize: none;
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
                filter: drop-shadow(0 8px 5px rgb(109, 217, 0));
            }
        }

        label:has(input:focus) + .line {
            background: #A4FF4F;
            transition: background 0.5s ease-in;
        }

        .line {
            border-radius: 1rem;
            border: 1px solid transparent;
            background: linear-gradient(
                    to right,
                    #2a2a2a 0%,
                    #2A2A2A 70%,
                    #1e1e1e 100%
            );
            height: 1px;
            width: 100%;
        }
    }


</style>