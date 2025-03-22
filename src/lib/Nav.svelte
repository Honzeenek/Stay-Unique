<script lang="ts">
    import './reset.css'
    import logo from '../assets/logo.svg'
    import {page} from '$app/stores'
    import {onMount} from 'svelte';

    let scrolled = false;

    onMount(() => {
        const handleScroll = () => {
            scrolled = window.scrollY > 50;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });
</script>
<nav class:scrolled={scrolled}>
    <ul>
        <li><a href="/" data-sveltekit-preload-data="hover"><img alt="logo" src={logo} class="logo"></a></li>
        <li class="navItem"><a class="list-items-a" href="/#about">About</a></li>
        <li class="navItem"><a class="list-items-a" href="/#work">Work</a></li>
        <li class="navItem">
            <a class={$page.url.pathname === '/contact' ? 'list-items-a active' : 'list-items-a'}
               id="contact" href="/contact"
               data-sveltekit-preload-data="hover"
            > Contact
            </a>
        </li>
    </ul>
</nav>
<style>
    nav {
        color: #fff;
        width: fit-content;
        padding: 1.5rem 0;
        position: fixed;
        top: 1rem;
        font-size: 1rem;
        left: 5.5rem;
        background: transparent;
        transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        z-index: 1000;
    }

    nav.scrolled {
        position: fixed;
        top: 1rem;
        left: 50%;
        transform: translateX(-50%);
        padding: 0.7rem 2rem;
        background: rgba(0, 0, 0, 0.849);
        backdrop-filter: blur(10px);
        border-radius: 100px;
    }

    ul {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 25px;
        position: relative;
        z-index: 2;
    }

    ul p {
        margin-left: auto;
    }

    .navItem {
        display: flex;
        align-items: center;
    }

    .list-items-a {
        color: #ffffff;
        cursor: pointer;
        position: relative;
        transition: color 1.3s var(--elastic-ease-out);
    }

    .nav-left:has(.list-items-a:hover) a {
        color: rgba(255, 255, 255, 0.5);
    }

    .nav-left:has(.list-items-a:hover) .active::after {
        transform: scaleX(0) !important;
        transition: transform .6s cubic-bezier(.19, 1, .22, 1);
    }

    .list-items-a:hover {
        color: #ffffff !important;
    }

    .list-items-a::after {
        content: " ";
        bottom: -8px;
        left: -4px;
        right: -4px;
        position: absolute;
        border-top: 2px solid #B4CDED;
        transform: scaleX(0);
        transform-origin: left center;
        transition: transform .6s cubic-bezier(.19, 1, .22, 1);
    }

    .list-items-a:hover::after {
        transform: scaleX(1);
        box-sizing: border-box;
    }

    .logo {
        width: 25px;
        height: 25px;
        object-fit: contain;
        padding-right: 1rem;
    }

    .active::after {
        transform: scaleX(1) !important;
        box-sizing: border-box;
    }
</style>