<script lang="ts">
    import "./reset.css";
    import ArrowDown from "../assets/ArrowDown.svg";
</script>

<article class="bottom-line">
    <img src={ArrowDown} alt="Arrow Down" class="arrow-down" />
    <p>Get started with a custom website tailored for your needs.</p>
</article>

<style>
    .bottom-line {
        display: flex;
        padding: 0 10rem;
        justify-content: space-between;
        width: 100%;
        margin-top: 24rem;
        gap: 1rem;
        z-index: 1;

        p {
            font-size: 2rem;
        }

        img {
            width: 30px;
            height: 30px;
        }
    }
</style>
