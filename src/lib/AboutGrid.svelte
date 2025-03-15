<script lang="ts">
    import Checkmark from '../assets/Checkmark.svg';
    import Handshake from '../assets/Handshake.svg';
    import GraduateHat from '../assets/LearnCap.svg';
    import Shield from '../assets/Shield.svg';
    import './reset.css'
</script>

<main>
    <p id="background">ABOUT</p>
    <section class="aboutGrid">
        <article>
            <img src={Shield} alt="Shield Icon"/>
            <h3>Modern & Fast <span class="greenspan">websites</span></h3>
            <p>I create high-performance, user-friendly websites that help businesses stand out and convert visitors
                into customers.</p>
        </article>
        <article>
            <img src={GraduateHat} alt="Graduate Hat Icon"/>
            <h3>I’m a <span class="greenspan">life-long learner</span></h3>
            <p>I’m constantly refining my skills to stay ahead and deliver the best results.</p>
        </article>
        <article>
            <img src={Handshake} alt="Handshake Icon"/>
            <h3><span class="greenspan">Efficient</span> & transparent workflow.</h3>
            <p>You get a website that works. I will keep you updated with every major step.</p>
        </article>
        <article>
            <img src={Checkmark} alt="Checkmark Icon"/>
            <h3>I choose <span class="greenspan">quality</span> over shortcuts.</h3>
            <p>I focus on clean design, fast performance, and smooth user experience, making sure your website works
                flawlessly.</p>
        </article>
    </section>
</main>

<style>
    main {
        position: relative;
    }

    #background {
        user-select: none;
        position: relative;
        top: 12rem;
        opacity: 0.2;
        z-index: -1;
        padding: 0;
        text-align: center;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: #000;
        background: transparent;
        font-size: 20rem;
        font-style: normal;
        font-weight: 700;
        line-height: 150%;
        color: transparent;
        -webkit-text-stroke: 1px white;
    }

    .aboutGrid {
        position: relative;
        top: 7rem;
        display: flex;
        justify-content: center;

        article {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            width: 20rem;
            padding-right: 2.5rem;
            padding-left: 2.5rem;
            border-right: 1px solid #505050;

            img {
                height: auto;
                max-width: 2.5rem;
                filter: brightness(0) invert(1);
            }

            h3 {
                font-weight: bold;
                font-size: 1.3rem;
                padding-bottom: 0.8rem;
            }

            p {
                font-size: 0.9rem;
                color: #DADADA;
            }

            .greenspan {
                color: #A4FF4F;
            }
        }

        article:last-child {
            border-right: none;
        }
    }
</style>