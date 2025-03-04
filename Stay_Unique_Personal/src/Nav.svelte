<script>
    import './reset.css'
    import logo from './assets/logo.png'
</script>

<nav>

    <ul>
        <div class="nav-left">
            <img alt="logo" src={logo} class="logo">
            <li class="navItem"><a>About</a></li>
            <li class="navItem"><a>Work</a></li>
            <li class="navItem"><a>Contact</a></li>
        </div>
        <p>Jan Páleník</p>
    </ul>
</nav>

<style>
    :root {
        --elastic-ease-out: linear(
                0,
                0.5737 7.6%,
                0.8382 11.87%,
                0.9463 14.19%,
                1.0292 16.54%,
                1.0886 18.97%,
                1.1258 21.53%,
                1.137 22.97%,
                1.1424 24.48%,
                1.1423 26.1%,
                1.1366 27.86%,
                1.1165 31.01%,
                1.0507 38.62%,
                1.0219 42.57%,
                0.9995 46.99%,
                0.9872 51.63%,
                0.9842 58.77%,
                1.0011 81.26%,
                1
        );
    }

    nav {
        margin-top: 0;
        color: #fff;
        background-color: black;
        padding: 1rem 2.5rem;
        position: relative;
        top: 1rem;
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
        padding: 1rem 2.5rem
    }

    .navItem {
        display: flex;
        align-items: center;
    }

    a {
        color: #ffffff;
        cursor: pointer;
        position: relative;
        transition: color 0.6s var(--elastic-ease-out);
    }

    .nav-left:has(a:hover) a {
        color: rgba(255, 255, 255, 0.5);
    }

    a:hover {
        color: #ffffff !important;
    }

    a::after {
        content: " ";
        bottom: -8px;
        left: -4px;
        right: -4px;
        position: absolute;
        border-top: 2px solid #A4FF4F;
        transform: scaleX(0);
        transform-origin: left center;
        transition: transform .6s cubic-bezier(.19,1,.22,1);
    }

    a:hover::after {
        transform: scaleX(1);
        box-sizing: border-box;
    }

    .logo {
        transform: scale(0.4);
        margin-right: 20px;
    }
</style>