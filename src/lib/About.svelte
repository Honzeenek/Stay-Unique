<script>
    import './reset.css'
    import picture from '../assets/picture.png'
    import AboutGrid from './AboutGrid.svelte'
</script>

<main>
    <section>
        <p id="background">ABOUT</p>
        <section class="heading">
            <h2>Hi, My Name is <span id="me">Jan</span></h2>
        </section>

        <section class="content">
            <article>
                <h3 id="articleheading">Jan Páleník</h3>
                <AboutGrid/>
            </article>
            <section class="picturesection">
                <img src={picture} alt="picture of me on bike">
            </section>
        </section>
    </section>
</main>

<style>
    :root {
        --font-large: 3.5rem;
        --font-medium: 1.3rem;
        --font-small: 1rem;
    }

    main {
        height: 140vh;

        #background {
            user-select: none;
            position: relative;
            top: 12rem;
            opacity: 0.2;
            z-index: -1;
            padding: 0;
            text-align: center;
            -webkit-text-stroke-width: 1px;
            -webkit-text-stroke-color: #000;
            background: transparent;
            font-size: 20rem;
            font-style: normal;
            font-weight: 700;
            line-height: 150%;
            color: transparent;
            -webkit-text-stroke: 1px white;
        }
    }

    .heading {
        display: flex;
        flex-direction: column;
        align-items: center;

        h2 {
            font-size: var(--font-large);
            font-weight: 700;
            line-height: 150%;
            padding: 0;

            #me {
                background: linear-gradient(83deg, #A4FF4F 47%, #61C900 68.34%, #9DF748 92.83%);
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                font-style: normal;
                font-weight: 700;
                line-height: 150%;
            }
        }
    }

    .section-undertitle {
        padding: 0;
        color: #DADADA;
        font-size: var(--font-small);
        font-weight: bold;
    }

    .content {
        display: flex;
        flex-direction: column;
        padding: 0 0 0;
    }

    article {
        padding: 6rem 0 0;
        width: 40rem;
        display: flex;
        flex-direction: column;
        gap: 1.3rem;
        font-size: var(--font-small);
        line-height: 150%;


        p {
            color: #a8a8a8;
        }
    }

    #articleheading {
        padding-bottom: 1rem;
        font-size: 2rem;
        border-bottom: 1px solid #A4FF4F;
    }

    .picturesection {
        height: 600px;
        display: flex;
        flex-direction: row;
        align-items: center;

        img {
            max-width: 50%;
            height: auto;
        }
    }

    @media (min-width: 768px) {
        .content {
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
        }

        article {
            width: 40rem;
        }

        .picturesection {
            padding-top: 6rem;
            width: 40%;
            display: flex;
            justify-content: flex-end;

            img {
                border-radius: 1rem;
                max-width: 100%;
            }
        }
    }
</style>