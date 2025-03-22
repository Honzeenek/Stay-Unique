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

    /* .corner-glow-effect {
        position: absolute;
        top: -530px;
        left: 1600px;
        width: 46.05288rem;
        height: 65.88181rem;
        transform: rotate(36.203deg);
        flex-shrink: 0;
        border-radius: 67.88181rem;
        opacity: 0.2; */
        /* background: #7ab5fd; */
        /* filter: blur(151px);
    } */

    .second-glow {
        position: absolute;
        overflow: visible;
        top: -100px;
        right: -100px;
        width: 30rem;
        height: 30rem;
        transform: rotate(-75deg);
        /* background: #7ab5fd; */
        /* background: linear-gradient(135deg,#3c93fd 0%, #ffffff 100%); */
        background: radial-gradient(circle, rgba(255,255,255,1) 4%, rgba(119,213,255,0.5172443977591037) 29%, rgba(0,212,255,0) 100%);
        pointer-events: none;
    }
</style>