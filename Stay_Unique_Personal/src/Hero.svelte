<script>
    import './reset.css'
</script>

<main>
    <section class='hero'>
            <h1 class='hero-text'>STAY UNIQUE</h1>
            <h2 class='motto-line'>
                Your website, made to impress. Custom. Fast. Flawless. Done for you
            </h2>
    </section>
</main>

<style>
    .hero {
        position: relative;
        top: 5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .hero-text {
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
        font-size: 2rem;
        font-weight: 300;
        text-align: center;
        margin-top: 1rem;
        width: 30%;
        line-height: 1.45;
    }
</style>