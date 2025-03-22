<script>
    import './reset.css'
    import Nav from './Nav.svelte'
    import Hero from './Hero.svelte'
    import Footer from "./Footer.svelte";
    import About from './About.svelte'
    import AboutGrid from './AboutGrid.svelte'
</script>

<main>
    <!--    <div class="glow-effect"></div>-->
    <div class="corner-glow-effect"></div>
    <div class="second-glow"></div>
    <div class="third-glow"></div>
    <Nav/>
    <Hero/>
    <About/>
    <Footer/>
</main>

<style>
    main {
        padding: 0 5.5rem;
        position: relative;
        overflow-x: hidden;
    }

    /*.glow-effect {*/
    /*    position: absolute;*/
    /*    opacity: 50%;*/
    /*    top: 0;*/
    /*    left: 50%;*/
    /*    transform: translateX(-50%);*/
    /*    width: 60vw;*/
    /*    height: 70px;*/
    /*    background: radial-gradient(*/
    /*            ellipse at center top,*/
    /*            rgba(255, 255, 255, 0.7) 0%,*/
    /*            rgba(255, 255, 255, 0.4) 20%,*/
    /*            rgba(255, 255, 255, 0) 60%*/
    /*    );*/
    /*    pointer-events: none;*/
    /*    z-index: 1;*/
    /*}*/

    .corner-glow-effect {
        position: absolute;
        top: -530px;
        left: 1600px;
        width: 46.05288rem;
        height: 65.88181rem;
        transform: rotate(36.203deg);
        flex-shrink: 0;
        border-radius: 67.88181rem;
        opacity: 0.61;
        background: #FF8C42;
        filter: blur(151px);
    }

    .second-glow {
        position: absolute;
        top: -830px;
        left: 1400px;
        width: 46.05288rem;
        height: 65.88181rem;
        transform: rotate(36.203deg);
        flex-shrink: 0;
        border-radius: 67.88181rem;
        opacity: 1;
        background: #ffeebf;
        filter: blur(151px);

    }
</style>