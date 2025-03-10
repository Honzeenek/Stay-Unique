<script>
    import './reset.css'
    import logo from './assets/logo.svg'
</script>

<nav>

    <ul>
        <div class="nav-left">
            <li><img alt="logo" src={logo} class="logo"></li>
            <li class="navItem"><a href="...">About</a></li>
            <li class="navItem"><a href="...">Work</a></li>
            <li class="navItem"><a href="...">Contact</a></li>
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

    a {
        color: #ffffff;
        cursor: pointer;
        position: relative;
        transition: color 1.3s var(--elastic-ease-out);
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
        width: 25px;
        height: 25px;
        object-fit: contain;
        padding-right: 1rem;
    }
</style>