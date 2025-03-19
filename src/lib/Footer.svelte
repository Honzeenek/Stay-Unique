<script lang="ts">
    import './reset.css'
    import logo from '../assets/logo.svg'
    import Twitter from '../assets/Twitter.svg'
    import LinkedIn from '../assets/linkedIn.svg'
    import GitHub from '../assets/GitHub.svg'

    export let contactPath = "/contact";
    export let email = "jan.palenik@icloud.com";

    // Use a reactive variable instead of DOM manipulation
    let isIconHovered = false;
</script>

<main>
    <section class="footerName">
        <h2 id="footerPalenik">PÁLENÍK</h2>
    </section>
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
            <ul class:icons-hovered={isIconHovered}>
                <li class="socialIcons"
                    on:mouseenter={() => isIconHovered = true}
                    on:mouseleave={() => isIconHovered = false}>
                    <a href="https://x.com/honzeenek" target="_blank"><img src={Twitter} alt="Twitter"/></a>
                </li>
                <li class="socialIcons"
                    on:mouseenter={() => isIconHovered = true}
                    on:mouseleave={() => isIconHovered = false}>
                    <a href="..."><img src={LinkedIn} alt="LinkedIn"/></a>
                </li>
                <li class="socialIcons"
                    on:mouseenter={() => isIconHovered = true}
                    on:mouseleave={() => isIconHovered = false}>
                    <a href="https://github.com/Honzeenek" target="_blank"><img src={GitHub} alt="GitHub"/></a>
                </li>
            </ul>
        </section>
        <section class="footerRight">
            <h2 id="rightHeading">Let's craft <span>your</span> standout <span>website</span></h2>
            <section class="button-section">
                <button><a href={contactPath}>Get in touch</a></button>
                <button><a href="{email}">{email}</a></button>
            </section>
        </section>
    </footer>

    <section class="copyright">
        <div class="copyrightLine"></div>
        <p> Copyright &copy; Jan Páleník. All rights reserved.</p>
    </section>
</main>

<style>
    .footerName {
        display: flex;
        justify-content: center;
        user-select: none;

        #footerPalenik {
            font-size: 24.5rem;
            letter-spacing: 1.3rem;
            color: transparent;
            -webkit-text-stroke: 1px white;
        }
    }

    .line {
        border: 1px solid transparent;
        background: rgba(180, 205, 237, 0.6);
        height: 1px;
        border-radius: 1rem;
        width: 100%;
    }

    footer {
        display: flex;
        justify-content: space-between;
        height: 20vh;
        padding-top: 2rem;

        h2 {
            font-size: 1rem;
            font-weight: bold;
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
                font-size: 1rem;
                padding: 0.9rem 0 1.8rem 0;
                font-weight: 400;
                line-height: 1.5;
            }

            ul {
                display: flex;
                gap: 2.5rem;

                /* Apply the gray filter to all icons when any icon is hovered */

                &:has(.socialIcons:hover) .socialIcons a img {
                    filter: opacity(0.5);
                }

                .socialIcons {
                    transition: 1.3s var(--elastic-ease-out);
                    position: relative;

                    a img {
                        transition: filter 0.3s ease;
                    }

                    &:hover {
                        transform: translateY(-3px);
                        cursor: pointer;
                        transition: 1.3s var(--elastic-ease-out);

                        /* Keep the hovered icon white */

                        a img {
                            filter: opacity(1) !important;
                        }
                    }

                    &::after {
                        content: " ";
                        bottom: -8px;
                        left: -4px;
                        right: -4px;
                        position: absolute;
                        border-top: 2px solid #A4FF4F;
                        transform: scaleX(0);
                        transform-origin: left center;
                        transition: transform .6s cubic-bezier(.19, 1, .22, 1);
                    }

                    &:hover::after {
                        transform: scaleX(1);
                        box-sizing: border-box;
                    }
                }
            }
        }
    }

    .footerRight {
        display: flex;
        flex-direction: column;
        align-items: start;

        span {
            color: #23ce6b;
        }

        #rightHeading {
            padding: 0 0 0.9rem 0;
        }

        button {
            box-shadow: inset -1px 4px 30px 0 rgba(155, 155, 155, 0.25);
            background-color: #000000;
            border: none;
            color: white;
            padding: 1rem 2rem;
            border-radius: 1rem;
            font-size: 1rem;
            font-weight: bold;
            transition: transform 0.3s ease;
            cursor: pointer;
            position: relative;
        }

        button:hover {
            transform: translateY(-3px);

        }
    }

    .copyright {
        padding: 1rem 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 1rem;

        .copyrightLine {
            border: 1px solid transparent;
            border-radius: 1rem;
            background: rgba(180, 205, 237, 0.6);
            height: 1px;
            width: 50%;
        }

        p {
            color: #828282;
            padding: 1rem;
        }
    }
</style>