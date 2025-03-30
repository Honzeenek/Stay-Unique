<script lang="ts">
    import Checkmark from '../assets/Checkmark.svg';
    import Handshake from '../assets/Handshake.svg';
    import GraduateHat from '../assets/LearnCap.svg';
    import Shield from '../assets/Shield.svg';
    import './reset.css'
</script>
        
<section class="aboutGrid">
    <div class="grid-row">
        <article>
            <img src={Shield} alt="Shield Icon"/>
            <h3>Modern & Fast <span class="greenspan">websites</span></h3>
            <p>I create high-performance, user-friendly websites that help businesses stand out and convert visitors
                    into customers.</p>
            </article>
            <article class="left-column">
                <img src={GraduateHat} alt="Graduate Hat Icon"/>
                <h3>I'm a <span class="greenspan">life-long learner</span></h3>
                <p>I'm constantly refining my skills to stay ahead and deliver the best results.</p>
            </article>
        </div>
        <div class="grid-row">
            <article class="bot-row">
                <img src={Handshake} alt="Handshake Icon"/>
                <h3><span class="greenspan">Efficient</span> & transparent workflow.</h3>
                <p>You get a website that works. I will keep you updated with every major step.</p>
            </article>
            <article class="bot-row left-column">
                <img src={Checkmark} alt="Checkmark Icon"/>
                <h3>I choose <span class="greenspan">quality</span> over shortcuts.</h3>
                <p>I focus on clean design, good performance, and smooth user experience, making sure your website works
                    flawlessly.</p>
            </article>
        </div>
</section>

<style>

    .aboutGrid {
        display: flex;
        flex-direction: column;
    }

    .grid-row {
        display: flex;

        width: 100%;
    }

    article {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 20rem;
        padding-right: 2.5rem;
        padding-bottom: 2.5rem;
        text-wrap: balance;

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
    }

    .bot-row {
        /*border-top: 1px solid #505050;*/
        padding-bottom: 0;
    }

    .grid-row article:last-child {
        border-right: none;
    }

    .greenspan {
        background: linear-gradient(83deg, #44f891 47%, #23ce6b 68.34%, #12c966 92.83%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-style: normal;
        line-height: 150%;
    }


    /* Add responsive styles for smaller screens */
    @media (max-width: 768px) {
        .grid-row {
            flex-direction: column;
            align-items: center;
            gap: 2rem;
        }

        article {
            border-right: none;
            border-bottom: 1px solid #505050;
            padding-bottom: 2rem;
            width: 80%;
        }

        .grid-row article:last-child {
            border-bottom: none;
        }
    }
</style>