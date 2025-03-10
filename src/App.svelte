<script>
    import './reset.css'
    import Nav from './Nav.svelte'
    import Hero from './Hero.svelte'
    import Footer from "./Footer.svelte";
</script>

  <main>
    <div class="glow-effect"></div>
    <Nav />
    <Hero />
    <Footer />
  </main>

  <style>
    main {
      padding: 0 5.5rem;
      position: relative;
    }

    .glow-effect {
      position: absolute;
      opacity: 70%;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 70vw;
      height: 100px;
      background: radial-gradient(
        ellipse at center top,
        rgba(255, 255, 255, 0.7) 0%,
        rgba(255, 255, 255, 0.4) 20%,
        rgba(255, 255, 255, 0) 60%
      );
      pointer-events: none;
      z-index: 1;
    }
  </style>