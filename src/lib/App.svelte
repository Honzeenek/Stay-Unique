<script>
    import './reset.css'
    import Nav from './Nav.svelte'
    import Hero from './Hero.svelte'
    import Footer from "./Footer.svelte";
    import About from './About.svelte'
</script>

  <main>
    <div class="glow-effect"></div>
    <Nav />
    <Hero />
    <About />
    <Footer />

  </main>

  <style>
    main {
      padding: 0 5.5rem;
      position: relative;
    }

    .glow-effect {
      position: absolute;
      opacity: 50%;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 60vw;
      height: 70px;
      background: radial-gradient(
              ellipse at center top,
              rgba(255, 255, 255, 0.7) 0%,
              rgba(255, 255, 255, 0.4) 20%,
              rgba(255, 255, 255, 0) 60%
      );
      /*radial-gradient(*/
      /*        ellipse at center top,*/
      /*        rgb(70, 153, 255) 0%,*/
      /*        rgba(70, 153, 255, 0.75) 20%,*/
      /*        rgba(70, 153, 255, 0) 60%*/
      /*);*/
      pointer-events: none;
      z-index: 1;
    }
  </style>