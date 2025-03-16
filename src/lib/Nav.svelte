<script lang="ts">
    import './reset.css'
    import logo from '../assets/logo.svg'
    import Contact from './Contact.svelte'
    import {page} from '$app/stores'
</script>

<nav>
    <ul>
        <div class="nav-left">
            <li><a href="/" data-sveltekit-preload-data="hover"><img alt="logo" src={logo} class="logo"></a></li>
            <li class="navItem"><a class="list-items-a" href="/#about">About</a></li>
            <li class="navItem"><a class="list-items-a" href="...">Work</a></li>
            <li class="navItem">
                <a
                        class={$page.url.pathname === '/contact' ? 'list-items-a active' : 'list-items-a'}
                        id="contact" href="/contact"
                        data-sveltekit-preload-data="hover"
                >
                    Contact
                </a>
            </li>
        </div>
        <p>Jan Páleník</p>
    </ul>
</nav>

<style>
    nav {
        margin-top: 0;
        color: #fff;
        background-color: black;
        padding: 1rem 0;
        position: relative;
        top: 3rem;
    }

    ul {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        position: relative;
        z-index: 2;
    }

    .nav-left {
        display: flex;
        align-items: center;
        gap: 25px;
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
        border-top: 2px solid #A4FF4F;
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