<script>
    import './reset.css'
    import picture from '../assets/picture.png'
    import AboutGrid from './AboutGrid.svelte'
</script>

<section class="about">
    <header class="heading">
        <h2 id="about">Hi, My Name is <span id="me">Jan</span></h2>
    </header>

    <div class="content">
        <article>
            <h2 id="about-brackets">[ about ]</h2>
            <h3 id="articleheading">My Qualities</h3>
            <AboutGrid/>
        </article>
        <div class="picture-container">
            <img src={picture} alt="Jan on a bike">
        </div>
    </div>
</section>

<style>
    :root {
        --font-large: 3.5rem;
        --font-medium: 1.3rem;
        --font-small: 1rem;
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
                background: linear-gradient(83deg, #23ce6b 47%, #23ce6b 68.34%, #23ce6b 92.83%);
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                font-style: normal;
                font-weight: 700;
                line-height: 150%;
            }
        }
    }

    #about-brackets {
        font-family: "Geist Mono", monospace;
        font-size: 1rem;
        color: #B4CDED;
        font-weight: normal;
        line-height: 150%;
        padding-bottom: 1.5rem;
    }
    
    .content {
        display: flex;
        flex-direction: column;
        padding: 0 0 0;
    }

    article {
        padding: 4rem 0 0;
        width: 40rem;
        display: flex;
        flex-direction: column;
        font-size: var(--font-small);
        line-height: 150%;
    }

    #articleheading {
        padding-bottom: 2rem;
        font-size: 2.5rem;
    }

    .picture-container {
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

        .picture-container {
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