import Link from 'next/link';
import { useRouter } from 'next/router';

function TabsTitles() {
    const Tabs = [
        { name: 'Featured', path: '/home' },
        { name: 'Podcasts', path: '/home/podcasts' },
        { name: 'Charts', path: '/home/charts' },
        { name: 'Genres & Mood', path: '/home/genres-and-mood' },
        { name: 'New Releases', path: '/home/new-releases' },
        { name: 'Discover', path: '/home/discover' },
    ];
    return (
        <div className=" max-w-7xl flex pl-32 pt-12 justify-between w-screen items-center">
            {Tabs.map((tabs, index) => (
                <CustomLink key={index} tabs={tabs}></CustomLink>
            ))}
        </div>
    );
}
export default TabsTitles;

function CustomLink({ tabs, ...props }) {
    const path = useRouter().pathname;
    return (
        <div
            className={`${
                path === tabs.path ? 'text-4xl font-bold' : 'text-sm'
            } text-white cursor-pointer`}
        >
            <Link href={tabs.path}>{tabs.name}</Link>
        </div>
    );
}
