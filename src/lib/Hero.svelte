<script>
    import './reset.css'
    import './fonts.css'
    import HeroButton from './HeroButton.svelte'
    import Particles from '$lib/Particles.svelte';
    import HeroDown from './HeroDown.svelte';

</script>

<section class='hero'>
    <div class="particles-container">
        <Particles/>
    </div>
    <h2 class="hero-name">[ shine clearly ]</h2>
    <h1 class='hero-text'>WEB ENGINEER</h1>
    <h2 class='motto-line'>
        The <span class="motto-span">BIG</span> step towards meeting your goals on the internet.
    </h2>
    <HeroButton link="/contact" />
    <HeroDown/>
    <div class="line"></div>
</section>

<style>
    :root {
        --elastic-ease-out: linear(
            0,
            0.5737 7.6%,
            0.8382 11.87%,
            0.9463 14.19%,
            1.0292 16.54%,
            1.0886 18.97%,
            1.1258 21.53%,
            1.137 22.97%,
            1.1424 24.48%,
            1.1423 26.1%,
            1.1366 27.86%,
            1.1165 31.01%,
            1.0507 38.62%,
            1.0219 42.57%,
            0.9995 46.99%,
            0.9872 51.63%,
            0.9842 58.77%,
            1.0011 81.26%,
            1
        );
    }

    .hero {
        height: 100vh;
        padding: 13rem 0 6rem 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        opacity: 0;
        animation: fadeIn 1s ease-in-out forwards;
        position: relative;
        overflow: hidden;
        & .hero-name {
            font-family: "Geist Mono", monospace;
            letter-spacing: 0.1em;
            user-select: none;
            font-size: 1.5rem;
            font-weight: normal;
            color: #B4CDED;
            position: relative;
            z-index: 5;
        }

        & .hero-text {
            user-select: none;
            font-weight: bold;
            font-size: 10rem;
            line-height: 1.3;
            letter-spacing: -0.02em;
            background: linear-gradient(
                to bottom,
                #ffffff 75%, 
                rgba(0, 0, 0, 0.6) 90%
            );
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            -webkit-text-fill-color: transparent;
            position: relative;
            z-index: 5;
        }

        & .motto-line {
            user-select: none;
            position: relative;
            top: -2rem;
            font-size: 1.5rem;
            font-weight: normal;
            text-align: center;
            margin-top: 1rem;
            margin-bottom: 2rem;
            line-height: 1.45;
            z-index: 5;

            & .motto-span {
                color: #4297ff;
                font-weight: normal;
                position: relative;
                z-index: 5;
            }
        }
    }

    .line {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100vw;
        height: 1px;
        background-color: #B4CDED;
        border: none;
        z-index: 5;
    }

    .particles-container {
        position: absolute;
        top: 0;
        right: 0;
        width: 40%;
        height: 100%;
        overflow: hidden;
        z-index: 0;
        clip-path: polygon(30% 0, 100% 0, 100% 100%, 0% 100%);
        mask-image: linear-gradient(
            to left,
            rgba(0, 0, 0, 1) 60%,
            rgba(0, 0, 0, 0)
        ),
        linear-gradient(
            to bottom,
            rgba(0, 0, 0, 1) 90%,
            rgba(0, 0, 0, 0)
        );
        -webkit-mask-image: linear-gradient(
            to left,
            rgba(0, 0, 0, 1) 60%,
            rgba(0, 0, 0, 0)
        ),
        linear-gradient(
            to bottom,
            rgba(0, 0, 0, 1) 90%,
            rgba(0, 0, 0, 0)
        );
        mask-composite: intersect;
        -webkit-mask-composite: source-in;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
</style>