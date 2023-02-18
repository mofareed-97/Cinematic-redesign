import { POSTER_URL } from "@/config/tmdb";
import { MovieProps } from "@/types/tmdb";
import Image from "next/image";
import React from "react";

const Banner = ({ movie }: { movie: MovieProps }) => {
  return (
    <section className="bg-gradient-to-t from-white dark:from-slate-900">
      <div className="relative w-full h-[60vh] -z-10">
        <Image
          src={`${POSTER_URL}${movie.backdrop_path}`}
          fill
          alt="tmdb"
          className="object-cover object-left lg:object-top"
          sizes="100vw"
        />
      </div>
    </section>
  );
};

export default Banner;
