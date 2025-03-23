<script lang="ts">
    import {onMount} from 'svelte';
    import {page} from '$app/stores';
    import {targetSection} from '$lib/stores/navigation';

    onMount(() => {
        if ($page.url.hash) {
            const id = $page.url.hash.substring(1);
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({behavior: 'smooth'});
                }
            }, 100);
        }

        return targetSection.subscribe(id => {
            if (id) {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({behavior: 'smooth'});
                    targetSection.set(null);
                }
            }
        });
    });
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400;500;600&display=swap" rel="stylesheet">
</svelte:head>

<slot/>

<style global>
    :global(body) {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
</style>