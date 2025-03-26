<script>
    import "../reset.css";
    import Heading from "./Heading.svelte";
    import Story from "./Story.svelte";
    import Problem from "./Problem.svelte";
    import Solution from './Solution-section.svelte';
    import CTA from './CTA.svelte';
</script>

<section class="why-need">
    <section class="main-block">
        <Heading />
        <section class="need-me-block">
            <Story />
            <Problem />
            <Solution />
            <CTA link="/contact" />
        </section>
    </section>
</section>

<style>
    .main-block {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: fit-content;
        gap: 2rem;
    }
    .why-need {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .need-me-block {
            padding: 2.5rem;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 1.5rem;
            width: 80%;
            border-radius: 1.0625rem;
            border: 1px solid rgba(117, 117, 117, 0.521);
            background: linear-gradient(0deg, #0d1821 80.69%, #356287 100.18%);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            position: relative;

            &::before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: inherit;
                filter: blur(10px);
                z-index: -1;
                border-radius: inherit;
            }
        }

    }
</style>
