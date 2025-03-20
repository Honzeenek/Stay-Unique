<script lang="ts">
    import {onMount, onDestroy} from 'svelte';
    import {tsParticles} from '@tsparticles/engine';
    import {loadSlim} from '@tsparticles/slim';
    import type {Container} from '@tsparticles/engine';

    let container: HTMLElement;
    let particlesInstance: Container | undefined;

    onMount(async () => {
        await loadSlim(tsParticles);
        particlesInstance = await tsParticles.load({
            id: 'tsparticles',
            options: {
                fullScreen: {
                    enable: false // This is important - disable fullScreen mode
                },
                background: {
                    color: {
                        value: "transparent"
                    },
                },
                particles: {
                    number: {
                        value: 100,
                        density: {
                            enable: true,
                        },
                    },
                    color: {
                        value: '#ffffff',
                    },
                    shape: {
                        type: 'circle',
                    },
                    opacity: {
                        value: 0.3,
                        random: false,
                    },
                    size: {
                        value: 1,
                        random: false,
                    },
                    move: {
                        enable: true,
                        speed: 0.9,
                        direction: 'none',
                        random: true,
                        straight: false,
                        outModes: {
                            default: "out"
                        },
                    },
                },
                interactivity: {
                    events: {
                        onHover: {
                            enable: false,
                        },
                        onClick: {
                            enable: false,
                        },
                        resize: true,
                    },
                },
                detectRetina: true,
            },
        });
    });

    onDestroy(() => {
        if (particlesInstance) {
            particlesInstance.destroy();
        }
    });
</script>

<div id="tsparticles" bind:this={container}></div>

<style>
    #tsparticles {
        width: 100%;
        height: 100%;
        z-index: 1;
        pointer-events: none;
    }
</style>