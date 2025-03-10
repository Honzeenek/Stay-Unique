import { mount } from 'svelte'
import App from './App.svelte'
import Lenis from 'lenis'

const app = mount(App, {
  target: document.getElementById('app'),
})

// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});

export default app
