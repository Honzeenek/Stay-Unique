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

<slot/>