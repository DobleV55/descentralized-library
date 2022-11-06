import { SlSocialSpotify } from 'react-icons/sl';
import { BiHomeAlt, BiLibrary } from 'react-icons/bi';
import { FiSearch, FiPlusCircle, FiSettings } from 'react-icons/fi';
import { RiCompass3Line } from 'react-icons/ri';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { useState } from 'react';

const Menus = [
    { name: 'Home', path: 'home', icon: <BiHomeAlt size="35" /> },
    { name: 'Search', path: 'search', icon: <FiSearch size="35" /> },
    { name: 'Library', path: 'library', icon: <BiLibrary size="35" /> },
    {
        name: 'Discover',
        path: '/discover',
        icon: <RiCompass3Line size="35" />,
    },
];
const BottomMenus = [
    {
        name: 'Song Request',
        path: '/song_request',
        icon: <FiPlusCircle size="35" />,
    },
    { name: 'Settings', path: '/settings', icon: <FiSettings size="35" /> },
];

function SideBar() {
    return (
        <div>
            <div className="fixed top-0 left-0 h-screen w-20 m-0 flex flex-col bg-secondary text-white">
                <div className="relative flex items-center justify-center h-16 w-16 mt-8 mb-14 mx-auto">
                    <SlSocialSpotify size="35" />
                </div>
                {Menus.map((menu, index) => (
                    <CustomLink
                        key={'menu-element-' + index}
                        menu={menu}
                    ></CustomLink>
                ))}
            </div>
            <div className="fixed bottom-0 left-0 b-screen w-20 m-0 flex flex-col bg-secondary text-white">
                {BottomMenus.map((menu, index) => (
                    <CustomLink key={index} menu={menu}></CustomLink>
                ))}
                <div className="relative flex items-center justify-center mt-2 mb-32 mx-auto object-cover w-10 h-10">
                    <Image
                        src="https://cdn.intra.42.fr/users/vvila.jpeg"
                        layout="fill"
                        className="rounded-full"
                    ></Image>
                </div>
            </div>
        </div>
    );
}
export default SideBar;

function CustomLink({ menu, ...props }) {
    const path = useRouter().pathname;
    return (
        <div
            className={`relative flex items-center justify-center h-16 w-16 mt-2 mb-2 mx-auto cursor-pointer ${
                path.split('/')[1] === menu.path ? 'text-green' : ''
            }`}
        >
            <Link href={menu.path}>{menu.icon}</Link>
        </div>
    );
}
