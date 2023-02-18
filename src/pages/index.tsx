import Head from "next/head";
import axios from "axios";
import requests from "@/config/tmdb";
import { MovieProps } from "@/types/tmdb";
import Banner from "@/components/Banner";
import { Layout } from "@/components/Layout";
import Card from "@/components/Card";

export default function IndexPage({ movies }: { movies: MovieProps[] }) {
  const random = Math.floor(Math.random() * movies.length);

  return (
    <Layout>
      <Head>
        <title>Cinematic</title>
        <meta
          name="description"
          content="Cinematic is a social platform for sharing and discover movies and tvshows. Use it to keep track of films you’ve seen in the past. Rate, review and tag films as you add them. Find and follow your friends to see what they’re enjoying. Keep a watchlist of films you’d like to see."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="w-full min-h-[200vh]">
        <Banner movie={movies[2]} />

        <div className="p-10 grid grid-cols-4 gap-8">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const { data } = await axios(requests.fetchTrending);

  return {
    props: {
      movies: data.results,
    },
  };
};
