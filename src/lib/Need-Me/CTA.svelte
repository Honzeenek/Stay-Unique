<script>
    let { link } = $props();
</script>

<section class="cta">
    <a href={link}>READY TO SHINE?</a>
</section>

<style>
    .cta {
        width: 100%;
        display: flex;
        justify-content: center;
        padding-top: 2.5rem;

        a {
            color: white;
            font-size: 1rem;
            background-color: rgba(0, 123, 255, 0.096);
            border: 1px solid #007bff6c;
            border-radius: 1.6rem;
            width: fit-content;
            font-weight: bold;
            padding: 1rem 14rem;
            cursor: pointer;
            filter: drop-shadow(0 4px 17px rgb(52, 73, 102));

            &:hover {
                background-color: rgba(0, 122, 255, 0.3);
            }
        }
    }
</style>
