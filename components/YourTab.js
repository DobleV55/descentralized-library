import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiChevronRight } from 'react-icons/fi';

function YourTab() {
    const tab = useRouter().pathname.split('/').splice(-1, 1);
    return (
        <div>
            <div className="flex w-screen pl-32 h-40 gap-5 items-center">
                <h1 className="text-white">
                    Your {tab == 'home' ? 'featured' : tab}
                </h1>
                <FiChevronRight className="text-white" size={20} />
            </div>
            <div className="flex w-screen pl-32 h-44 gap-8 items-center">
                <div className="h-44 w-96 bg-white rounded-lg"></div>
                <div className="h-44 w-80 bg-white rounded-lg"></div>
                <div className="h-44 w-80 bg-white rounded-lg"></div>
            </div>
            <div className="flex w-screen pl-32 h-40 gap-5 items-center">
                <h1 className="text-white">Based on your activity</h1>
                <FiChevronRight className="text-white" size={20} />
            </div>
            <div className="flex w-screen pl-32 h-38 gap-14 items-center">
                <div className="text-center">
                    <div className="h-28 w-28 bg-white rounded-lg"></div>
                    <p className="text-white pt-4">hola</p>
                </div>
                <div className="text-center">
                    <div className="h-28 w-28 bg-white rounded-lg"></div>
                    <p className="text-white pt-4">hola</p>
                </div>
                <div className="text-center">
                    <div className="h-28 w-28 bg-white rounded-lg"></div>
                    <p className="text-white pt-4">hola</p>
                </div>
                <div className="text-center">
                    <div className="h-28 w-28 bg-white rounded-lg"></div>
                    <p className="text-white pt-4">hola</p>
                </div>
                <div className="text-center">
                    <div className="h-28 w-28 bg-white rounded-lg"></div>
                    <p className="text-white pt-4">hola</p>
                </div>
                <div className="text-center">
                    <div className="h-28 w-28 bg-white rounded-lg"></div>
                    <p className="text-white pt-4">hola</p>
                </div>
                <div className="text-center">
                    <div className="h-28 w-28 bg-white rounded-lg"></div>
                    <p className="text-white pt-4">hola</p>
                </div>
            </div>
        </div>
    );
}
export default YourTab;
