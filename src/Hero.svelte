<script>
    import './reset.css'
    import logo from './assets/Layer 1.svg'
</script>

<main>
    <section class='hero'>
        <h1 class='hero-text'>STAY UNIQUE</h1>
        <h2 class="background-text">PÁLENÍK</h2>
        <h2 class='motto-line'>
            Your <span class="motto-span">website</span>, made to impress. Custom. Fast. Flawless. Done for <span class="motto-span">you</span>
        </h2>
        <button class='hero-button'>
            <img src={logo} alt='logo' id='button-logo' />
            <span class="divider"></span>
            <span>Get Yours</span>
        </button>
    </section>
</main>

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
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    .background-text {
        position: absolute;
        z-index: -1;
        transform: translateY(2rem);
        user-select: none;
        font-size: 20rem;
        -webkit-text-stroke: 1px #ffffff;
        color: transparent;
        font-weight: bold;
        opacity: 0.1;
        letter-spacing: 1rem;


    }
    .hero {
        position: relative;
        top: 5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        opacity: 0; /* Start with the element hidden */
        animation: fadeIn 1s ease-in-out forwards; /* 2s duration, ease-in-out timing function */
    }
    .hero-text {
        user-select: none;
        font-weight: bold;
        font-size: 8rem;
        line-height: 1.3;
        letter-spacing: -0.02em;
        background: linear-gradient(
                to bottom,
                #ffffff 60%, rgba(0, 0, 0, 0.6)
                90%);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        -webkit-text-fill-color: transparent;
    }
    .motto-line {
        user-select: none;
        position: relative;
        top: -2rem;
        font-size: 2rem;
        font-weight: normal;
        text-align: center;
        margin-top: 1rem;
        width: 35%;
        line-height: 1.45;
    }
    .motto-span {
        color: #A4FF4F;
        font-weight: bold;
    }
    .hero-button {
        position: relative;
        top: 0;
        display: flex;
        align-items: center;
        gap: 1.5rem;
        font-size: 2rem;
        font-weight: bold;
        background-color: #A4FF4F;
        border: none;
        border-radius: 1rem;
        padding: 0.5rem 1.5rem;
        transition: transform 0.3s ease, filter 0.3s ease;
        filter: drop-shadow(0 4px 15px rgba(70, 153, 255, 0.47));
        cursor: pointer;
        opacity: 0; /* Start with the element hidden */
        animation: fadeIn 1.5s ease-in-out forwards; /* 2s duration, ease-in-out timing function */
    }
    .hero-button:hover {
        transform: translateY(-5px);
        filter: drop-shadow(0 8px 20px rgba(70, 153, 255, 0.6));
    }
    .hero-button:hover #button-logo {
        filter: hue-rotate(45deg) brightness(1.2);
    }
    .hero-button span {
        color: black;
    }
    .divider {
        background-color: black;
        height: 2rem;
        border-radius: 1rem;
        width: 5px;
    }
    #button-logo {
        width: 2rem;
        height: 2rem;
    }
</style>