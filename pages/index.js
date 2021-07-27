import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home({ movie }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <button type="button">Sign in to IMDb</button>
        <a href="#">Sign in to IMDb</a>
        <h1>Titulo H1</h1>
        <h2>Titulo H2</h2>
        <h3>Titulo h3</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          maximus mattis odio in pharetra. Duis tempor purus ut bibendum rutrum.
          Donec id luctus mi, in congue orci. Mauris vel ipsum leo. Proin
          ultrices eros lectus, et pretium enim placerat in. Integer eleifend
          velit a ligula ornare tristique. Nullam fermentum dui non efficitur
          malesuada. Vestibulum mauris leo, fermentum ut est et, bibendum
          porttitor enim. Quisque ut dolor felis. Nulla facilisi. Proin
          tincidunt orci et erat faucibus, non convallis libero ultricies.
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

/*
export async function getStaticProps() {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/550?api_key=181aae67f9fe056c170095ba1588cb87"
  );

  const movie = await response.json();

  console.log(JSON.stringify(movie));

  return {
    props: {
      movie,
    },
  };
}
*/
