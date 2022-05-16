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
        <div>
            <div>
                <Image
                    layout="fill"
                    src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
                    objectFit="cover"
                />
            </div>
        </div>
    );
};
