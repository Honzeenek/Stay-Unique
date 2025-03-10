<script>
    import './reset.css'
    import logo from './assets/logo.svg'
</script>

<main>
    <div class="line"></div>
    <footer>
        <section class="footerLeft">
            <div class="logoHeading">
                <img src={logo} alt="logo"/>
                <h2 id="FooterName">Jan Páleník</h2>
            </div>
            <p id="motto">Design has always fulfilled me,<br>
                making it interactive is my passion.
            </p>
            <ul>
                <li><a href="...">Twitter</a></li>
                <li><a href="...">LinkedIN</a></li>
                <li><a href="...">GitHub</a></li>
            </ul>
        </section>
        <section class="footerRight">
            <h2 id="rightHeading">Let’s craft <span>your</span> standout <span>website</span></h2>
            <button>Get in touch</button>
        </section>
    </footer>

</main>

<style>
    .line {
        border: 1px solid transparent;
        background: linear-gradient(
                to right,
                #000000 0%,
                #2A2A2A 50%,
                #000000 100%
        );
        height: 1px;
        width: 100%;
    }

    footer {
        display: flex;
        justify-content: space-between;
        height: 30vh;
        padding-top: 2rem;

        h2 {
            font-size: 1.5rem;
            font-weight: bold;
        }

        span {
            color: #A4FF4F;
        }

        .footerLeft {
            display: flex;
            flex-direction: column;
            align-items: start;

            img {
                width: 25px;
                height: 25px;
                object-fit: contain;
            }

            .logoHeading {
                gap: 1rem;
                display: flex;
                align-items: center;
            }

            #motto {
                font-size: 12px;
                padding: 0.9rem 0 1.8rem 0;
                font-weight: 400;
                line-height: 1.5;
            }

            ul {
                display: flex;
                gap: 1rem;
            }
        }

        .footerRight {
            #rightHeading {
                padding: 1rem 0;
            }
            display: flex;
            flex-direction: column;
            align-items: start;

            button {
                box-shadow: inset -1px 4px 30px 0px rgba(155, 155, 155, 0.25);
                background-color: #000000;
                border: none;
                color: white;
                padding: 0.5rem 3rem;
                border-radius: 0.7rem;
                font-size: 16px;
                font-weight: bold;
                transition: transform 0.3s ease;
                cursor: pointer;
                position: relative;
            }

            button::after {
                content: '';
                position: absolute;
                top: -2px;
                left: -2px;
                width: calc(100% + 4px);
                height: calc(100% + 4px);
                background: linear-gradient(90deg, #A4FF4F, transparent, #A4FF4F);
                border-radius: 0.9rem;
                z-index: -1;
                background-size: 300% 100%;
                animation: glowingBorder 4s linear infinite;
            }

            button:hover {
                transform: translateY(-3px);
            }
        }
    }

    @keyframes glowingBorder {
        0% {
            background-position: 0% 0%;
        }
        100% {
            background-position: 300% 0%;
        }
    }


</style>