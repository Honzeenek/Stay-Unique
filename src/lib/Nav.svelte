<script lang="ts">
    import "./reset.css";
    import logo from "../assets/logo.svg";
    import { page } from "$app/stores";
    import { onMount } from "svelte";

    let scrolled:boolean = false;

    onMount(() => {
        const handleScroll = () => {
            scrolled = window.scrollY > 50;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });
</script>
<nav class:scrolled>
    <ul>
        <li>
            <a href="/" data-sveltekit-preload-data="hover"
                ><img alt="logo" src={logo} class="logo" /></a
            >
        </li>
        <li class="navItem">
            <a class="list-items-a" href="/#about">About</a>
        </li>
        <li class="navItem"><a class="list-items-a" href="/#work">Work</a></li>
        <li class="navItem">
            <a
                class={$page.url.pathname === "/contact"
                    ? "list-items-a active"
                    : "list-items-a"}
                id="contact"
                href="/contact"
                data-sveltekit-preload-data="hover"
            >
                Contact
            </a>
        </li>
    </ul>
</nav>

<style>
    nav {
        letter-spacing: 0.1em;
        font-family: "Geist Mono", monospace;
        color: #fff;
        width: 100%;
        padding: 2.5rem 8rem;
        position: fixed;
        font-size: 1rem;
        background: transparent;
        transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        z-index: 1000;
    }

    nav.scrolled {
        backdrop-filter: blur(6px);
        padding: 1.5rem 0 1rem 8rem;
        mask: linear-gradient(#000000, #0d1821, transparent);
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

    .navItem {
        display: flex;
        align-items: center;
    }

    .list-items-a {
        font-family: "Geist Mono", monospace;
        color: #ffffff;
        cursor: pointer;
        position: relative;
        transition: color 1.3s var(--elastic-ease-out);
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
        border-top: 2px solid #b4cded;
        transform: scaleX(0);
        transform-origin: left center;
        transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
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
