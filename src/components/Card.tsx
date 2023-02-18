import { POSTER_URL } from "@/config/tmdb";
import { MovieProps } from "@/types/tmdb";
import Image from "next/image";

const Card = ({ movie }: { movie: MovieProps }) => {
  return (
    <div className="bg-gray-700 rounded-lg overflow-hidden shadow-lg">
      <div className="relative w-full h-[200px] z-10">
        <Image
          src={`${POSTER_URL}${movie.backdrop_path}`}
          fill
          alt="tmdb"
          className="object-cover object-left lg:object-top"
          sizes="25vw"
        />
      </div>
    </div>
  );
};

export default Card;
