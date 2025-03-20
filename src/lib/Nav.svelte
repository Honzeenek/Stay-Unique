<script lang="ts">
    import './reset.css'
    import logo from '../assets/logo.svg'
    import {page} from '$app/stores'
    import {onMount} from 'svelte';

    let scrollY = 0;
    let isSticky = false;
    let navElement: HTMLElement;


    onMount(() => {
        const handleScroll = () => {
            scrollY = window.scrollY;
            isSticky = window.scrollY > 130;
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    })
</script>

<svelte:window bind:scrollY/>

<div class="nav-wrapper" class:sticky={isSticky}>
    <nav bind:this={navElement} class:docked={isSticky}>
        <ul>
            <li><a href="/" data-sveltekit-preload-data="hover"><img alt="logo" src={logo} class="logo"></a></li>
            <li class="navItem"><a class="list-items-a" href="/#about">About</a></li>
            <li class="navItem"><a class="list-items-a" href="/#work">Work</a></li>
            <li class="navItem">
                <a
                        class={$page.url.pathname === '/contact' ? 'list-items-a active' : 'list-items-a'}
                        id="contact" href="/contact"
                        data-sveltekit-preload-data="hover"
                >
                    Contact
                </a>
            </li>
        </ul>
    </nav>
</div>

<style>
    .nav-wrapper {
        position: absolute;
        width: 100%;
        height: auto;
        z-index: 1000;
        display: flex;
        justify-content: center;
        transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .sticky {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
    }

    nav {
        margin-top: 0;
        color: #fff;
        padding: 4rem 0;
        background: transparent;
        width: 100%;
        transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        border: 1px solid rgba(255, 255, 255, 0); /* Transparent border initially */
    }

    nav.docked {
        position: fixed;
        top: 0.6rem;
        z-index: 1000;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        padding: 0.75rem 3rem;
        border-radius: 5rem;
        border: 1px solid rgba(255, 255, 255, 0.1);
        background-color: rgba(0, 0, 0, 0.79);
        width: auto;
        max-width: 600px;
        backdrop-filter: blur(8px);
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
        border-top: 2px solid #6b5bff;
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