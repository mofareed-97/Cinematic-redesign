import { POSTER_URL } from "@/config/tmdb";
import { MovieProps } from "@/types/tmdb";
import Image from "next/image";
import { Button } from "./ui/button";

const Card = ({ movie }: { movie: MovieProps }) => {
  console.log(movie);
  return (
    <div className="bg-black rounded-2xl overflow-hidden shadow-2xl mb-4 relative">
      <div className="relative w-full h-[500px] z-10 ">
        <div className="bg-gradient-to-b from-black top-0 bottom-0 absolute z-10 h-[350px] w-full">
          <div className="px-5 py-8 z-20">
            <h3 className="text-2xl font-medium">
              {movie?.title || movie?.name}
            </h3>
          </div>
        </div>
        <div className="bg-gradient-to-t from-black left-0 bottom-0 absolute z-10 h-[200px] w-full" />
        <Image
          src={`${POSTER_URL}${movie.poster_path}`}
          fill
          alt="tmdb"
          className="object-cover object-left lg:object-top"
          sizes="25vw"
        />
      </div>

      <div className="px-5 py-8">
        <p className="text-sm text-gray-200 leading-6 mb-4">{movie.overview}</p>

        <Button>Play</Button>
      </div>
    </div>
  );
};

export default Card;
