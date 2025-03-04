<script>
  import svelteLogo from './assets/svelte.svg';
  import './reset.css'
  import Nav from './Nav.svelte'
  import Hero from './Hero.svelte'
  import glow from "./assets/glow.png";

</script>

<main>
  <img src={glow} alt="Top Glow" class="glowTop">
  <Nav />
  <Hero />
</main>

<style>
  .glowTop {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: auto;
    z-index: 1;
  }
</style>
