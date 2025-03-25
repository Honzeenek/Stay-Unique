<script>
    import './reset.css'
    import Nav from './Nav.svelte'
    import Hero from './Hero.svelte'
    import Footer from "./Footer.svelte";
    import About from './About.svelte'
    import AboutGrid from './AboutGrid.svelte'
    import Need from './Need.svelte'
</script>

<main>
    <!--    <div class="glow-effect"></div>-->
    <div class="corner-glow-effect"></div>
    <div class="second-glow"></div>
    <div class="third-glow"></div>
    <Nav/>
    <div class="content">
        <Hero/>
        <Need link="/contact" />
        <About/>
        <Footer/>
    </div>
</main>

<style>
    main {
        position: relative;
        overflow-x: hidden;
    }

    .content {
        padding: 0 8rem;
    }

    /* Animation keyframes for glow elements */
    @keyframes glowIn {
        0% {
            opacity: 0;
            transform: scale(0.6) rotate(-75deg);
            filter: blur(120px);
        }
        100% {
            opacity: 1;
            transform: scale(1) rotate(-75deg);
            filter: blur(151px);
        }
    }

    @keyframes cornerGlowIn {
        0% {
            opacity: 0;
            transform: scale(0.7) rotate(36.203deg);
        }
        100% {
            opacity: 0.2;
            transform: scale(1) rotate(36.203deg);
        }
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
        opacity: 0;
        background: #7ab5fd;
        filter: blur(151px);
        animation: cornerGlowIn 1.5s ease-out forwards;
    }

    .second-glow {
        position: absolute;
        overflow: visible;
        top: -100px;
        right: -100px;
        width: 30rem;
        height: 30rem;
        background: #7ab5fd;
        border-radius: 50%;
        background: linear-gradient(135deg,#3c93fd 0%, #ffffff 100%); 
        filter: blur(151px);
        opacity: 0;
        animation: glowIn 2s ease-out forwards;
        /* background: radial-gradient(circle, rgba(255,255,255,1) 4%, rgba(119,213,255,0.5172443977591037) 29%, rgba(0,212,255,0) 100%);
        pointer-events: none; */
    }

    .third-glow {
        position: absolute;
        overflow: visible;
        bottom: 20%;
        left: -150px;
        width: 25rem;
        height: 25rem;
        background: linear-gradient(135deg, #44a3ff 0%, #b3d9fd 100%);
        border-radius: 50%;
        filter: blur(140px);
        opacity: 0;
        animation: glowIn 2.5s ease-out 0.3s forwards;
    }
</style>