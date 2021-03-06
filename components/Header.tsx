//Icons
import { BellIcon, SearchIcon } from '@heroicons/react/solid';

//NextJs Components
import Link from 'next/link';

//React hooks
import { useState, useEffect } from 'react';


export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            };
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`${isScrolled && "bg-[#141414]"}`}>
            <div className="flex items-center space-x-2 md:space-x-10">
                <img
                    src="https://rb.gy/ulxxee"
                    width={100}
                    height={100}
                    alt="netflixLogo"
                    className="cursor-pointer object-contain"
                />

                <ul className="hidden space-x-4 md:flex">
                    <li className="headerLink">Home</li>
                    <li className="headerLink">TV Shows</li>
                    <li className="headerLink">Movies</li>
                    <li className="headerLink">New & Popular</li>
                    <li className="headerLink">My List</li>
                </ul>
            </div>


            <div className="flex items-center space-x-4 text-sm font-light">
                <SearchIcon className="hidden h-6 w-6 cursor-pointer sm:inline"
                />
                <p className="hidden cursor-pointer lg:inline">
                    Kids
                </p>
                <BellIcon className="h-6 w-6 cursor-pointer" />
                <Link href="/account">
                    <img
                        src="https://rb.gy/g1pwyx"
                        alt="go to your account"
                        className="cursor-pointer rounded"
                    />
                </Link>
            </div>
        </header>
    );
};