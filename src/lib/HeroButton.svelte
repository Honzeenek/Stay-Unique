<script>
    import './reset.css'
    import circleLogo from "../assets/logo circle.svg";
    let { link } = $props(); // Default to contact page
</script>

<section>
        <a href={link} class="hero-button">
            <img id='button-logo' src={circleLogo} alt="logo">
            Get Your Website
        </a>
</section>

<style>
    :root {
        --elastic-ease: linear(
                0,
                0.2178 2.1%,
                1.1144 8.49%,
                1.2959 10.7%,
                1.3463 11.81%,
                1.3705 12.94%,
                1.3726,
                1.3643 14.48%,
                1.3151 16.2%,
                1.0317 21.81%,
                0.941 24.01%,
                0.8912 25.91%,
                0.8694 27.84%,
                0.8698 29.21%,
                0.8824 30.71%,
                1.0122 38.33%,
                1.0357,
                1.046 42.71%,
                1.0416 45.7%,
                0.9961 53.26%,
                0.9839 57.54%,
                0.9853 60.71%,
                1.0012 68.14%,
                1.0056 72.24%,
                0.9981 86.66%,
                1 100%
        );
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
        --transform-ease: cubic-bezier(.32, .72, 0, 1);
    }

    .hero-button {
        display: flex;
        color: white;
        align-items: center;
        justify-content: center;
        gap: 0.7rem;
        font-size: 1.5rem;
        font-weight: bold;
        background-color: rgba(0, 122, 255, 0.3);
        border: 1px solid #007AFF;
        border-radius: 3rem;
        padding: 0.5rem 0.9rem;
        cursor: pointer;
        transition: transform 1.5s var(--elastic-ease), background-color 0.4s ease-in;
        -webkit-tap-highlight-color: transparent;
        filter: drop-shadow(0 4px 17px rgb(52, 73, 102));
    }
    .hero-button:hover {
        background-color: #007bffd2;
    }

    .hero-button:active {
        transform: scaleX(0.955) scaleY(0.954);
    }

    #button-logo {
        width: 2rem;
        height: 2rem;
        transition: transform 1.2s var(--transform-ease);
    }

    @media (hover: hover) and (pointer: fine) {
        .hero-button:hover #button-logo,
        .hero-button:focus-visible #button-logo {
            transform: rotate(360deg) translateZ(0);
        }
    }
</style>
