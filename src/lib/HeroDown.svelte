<script lang="ts">
    import "./reset.css";
    import ArrowDown from "../assets/ArrowDown.svg";
    import logo from "../assets/logo circle.svg";
</script>

<article class="bottom-line">
    <img src={ArrowDown} alt="Arrow Down" class="arrow-down" />
    <p>Get started with a custom website for your needs.</p>
    <button class="hero-down-button">
        To the moon?
    </button>
</article>

<style>
    .bottom-line {
        display: flex;
        justify-content: center;
        text-align: left;
        padding-top: 22rem;
        z-index: 1;
        font-size: 1.5rem;

        img.arrow-down {
            width: 30px;
            height: 30px;
        }
    }

    .hero-down-button {
        color: white;
        font-weight: normal;
        background-color: rgba(0, 123, 255, 0.096);
        border: 1px solid #007bff6c;
        border-radius: 3rem;
        width: fit-content;
        padding: 0.5rem 1.5rem;
        cursor: pointer;
        filter: drop-shadow(0 4px 17px rgb(52, 73, 102));
    }

    .hero-down-button:hover {
        background-color: rgba(0, 122, 255, 0.3);
    }

</style>
