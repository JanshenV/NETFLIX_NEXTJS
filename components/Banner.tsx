//Typings
import { Movie } from '../typings';

//NextJS Components
import Image from 'next/image';

//Utils
import { baseUrl } from '../utils/baseUrl';

//React Hooks
import { useState, useEffect } from 'react';

//Props
interface Props {
    netflixOriginals: Movie[]
};

export default function Banner({
    netflixOriginals
}: Props) {
    const [movie, setMovie] = useState<Movie | null>(null);

    useEffect(() => {
        function handleRandomMovie() {
            const randomIndex = Math.floor(Math.random() * netflixOriginals.length);
            const randoMovie = netflixOriginals[randomIndex];
            setMovie(randoMovie);
        };

        handleRandomMovie();
    }, [netflixOriginals]);

    return (
        <div className="flex h-screen items-center">
            <div className='absolute top-0 left-0 -z-10 h-screen w-screen'>
                <Image
                    layout="fill"
                    src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
                    objectFit="cover"
                />
            </div>

            <div className="flex-col items-center lg:p-20 sm:p-10">
                <h1 className="text-2xl font-bold lg:text-7xl">
                    {
                        movie?.title ||
                        movie?.original_title ||
                        movie?.name
                    }
                </h1>
                <p className="max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2lx">
                    {
                        movie?.overview
                    }
                </p>

            </div>
        </div>
    );
};
