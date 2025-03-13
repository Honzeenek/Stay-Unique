<script>
    export let contactPath = "/contact";
    export let email = "jan.palenik@icloud.com";
</script>

<section class="button-section">
    <button class="button-default is-swoopadoop">
        <span class="button-default__text">Get in touch</span>
        <a href={contactPath} class="button-link"></a>
    </button>
    <button class="email-button">
        <a href="mailto:{email}">{email}</a>
    </button>
</section>

<style>
    .button-section {
        display: flex;
        gap: 1rem;
    }

    button {
        box-shadow: inset -1px 4px 30px 0 rgba(155, 155, 155, 0.25);
        background-color: #000000;
        border: none;
        color: white;
        padding: 1rem 2rem;
        border-radius: 1rem;
        font-size: 1rem;
        font-weight: bold;
        cursor: pointer;
        position: relative;
    }

    /* Email button hover */
    .email-button {
        transition: transform 0.3s ease;
    }

    .email-button:hover {
        transform: translateY(-3px);
    }

    /* Swoopadoop button styles */
    .button-default.is-swoopadoop {
        --ease: cubic-bezier(.21, 1, .34, 1);
        --color-ease: cubic-bezier(0.215, 0.61, 0.355, 1);
        --speed: 0.45s;
        --speed-fast: 0.3s;
        --speed-faster: 0.15s;
        --color: #A4FF4F;
        --color-accent: #000000;
    }

    .button-link {
        position: absolute;
        inset: 0;
        z-index: 1;
    }

    .button-default__text {
        position: relative;
        z-index: 2;
    }

    @media (hover: hover) and (pointer: fine) {
        .button-default.is-swoopadoop::before {
            content: "";
            display: block;
            position: absolute;
            background-color: var(--color);
            top: -0.125rem;
            left: -0.125rem;
            width: calc(100% + 0.25rem);
            height: calc(100% + 0.25rem);
            clip-path: inset(0.5rem 0.5rem calc(100% - 0.5rem) 0.5rem round 0.75rem);
            transition: clip-path var(--speed) var(--ease);
            transform: translateZ(0); /* smoother animation in safari */
        }

        .button-default.is-swoopadoop:hover::before,
        .button-default.is-swoopadoop:focus-visible::before {
            clip-path: inset(0 0 0 0 round 0.25rem);
        }

        .button-default.is-swoopadoop .button-default__text {
            color: var(--color-accent);
            text-shadow: 0 2em 0 var(--color); /* two lines of text will not work */
            transform: translateY(-2em);
            transition: transform var(--speed) var(--ease), text-shadow var(--speed-faster) var(--color-ease);
        }

        .button-default.is-swoopadoop:hover .button-default__text,
        .button-default.is-swoopadoop:focus-visible .button-default__text {
            transform: translateY(0);
            text-shadow: 0 2em 0 var(--color-accent); /* two lines of text will not work */
        }
    }

    @supports (font: -apple-system-body) and (-webkit-appearance: none) {
        .button-default.is-swoopadoop::before {
            clip-path: inset(0.5rem 0.5rem 100% 0.5rem round 0.75rem); /* fix for safari */
        }
    }
</style>