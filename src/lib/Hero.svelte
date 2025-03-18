<script>
    import './reset.css'
    import HeroButton from './HeroButton.svelte'
    import Particles from '$lib/Particles.svelte';
    // Remove the unnecessary import of tsParticles
</script>

<main>
    <section class='hero'>
        <div class="particles-container">
            <Particles/>
        </div>
        <h2 class="hero-name">Stay Unique</h2>
        <h1 class='hero-text'>WEB ENGINEER</h1>
        <h2 class='motto-line'>
            The <span class="motto-span">BIG</span> step towards meeting your goals on the internet.
        </h2>
        <HeroButton/>
    </section>
</main>

<style>
    main {
        height: 50vh;
    }

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

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    .particles-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        z-index: 0;
    }

    .hero {
        padding: 13rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        opacity: 0;
        animation: fadeIn 1s ease-in-out forwards;

        .motto-span {
            color: #12c966;
            font-weight: bold;
            font-size: 1.9rem;
        }
    }

    .hero-name, .hero-text, .motto-line {
        position: relative;
        z-index: 5;
    }

    .hero-name {
        user-select: none;
        font-size: 1.5rem;
        font-weight: normal;
        color: #ffffff;
    }

    .hero-text {
        user-select: none;
        font-weight: bold;
        font-size: 10rem;
        line-height: 1.3;
        letter-spacing: -0.02em;
        background: linear-gradient(
                to bottom,
                #ffffff 75%, rgba(0, 0, 0, 0.6) 90%);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        -webkit-text-fill-color: transparent;
    }

    .motto-line {
        user-select: none;
        position: relative;
        top: -2rem;
        font-size: 1.5rem;
        font-weight: normal;
        text-align: center;
        margin-top: 1rem;
        width: 35%;
        line-height: 1.45;
    }

    .motto-span {
        color: #4297ff;
        font-weight: normal;
        position: relative;
        z-index: 5;
    }
</style>