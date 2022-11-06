import {
    FiHeart,
    FiChevronLeft,
    FiChevronRight,
    FiVolume2,
} from 'react-icons/fi';
import { BsPlayCircleFill } from 'react-icons/bs';
import { TfiLoop } from 'react-icons/tfi';
import { TbArrowsRandom } from 'react-icons/tb';
import { MdPlaylistPlay } from 'react-icons/md';

function Player() {
    return (
        <div className="flex items-center fixed bottom-0 h-24 w-full bg-white pl-16 pr-16">
            <FiHeart size="38" className="pr-4" />
            <div className="pl-4 w-14 h-14 min-w-auto min-h-auto rounded-full bg-red-400" />
            <div className="pl-4 pr-24 w-14 flex-col truncate">
                <p>I am silva</p>
                <p>I am silva</p>
                <p>I am silva</p>
            </div>
            <div className="flex pl-2 pr-2 py-1 bg-gray w-32 h-7 items-center justify-between rounded-full">
                <FiChevronLeft className="text-primary" />
                <div className="w-12 h-12  bg-white rounded-full flex place-content-center place-items-center">
                    <BsPlayCircleFill size="40" className="text-green" />
                </div>
                <FiChevronRight className="text-primary" />
            </div>
            <div className="pl-10 flex gap-5 justify-between items-center w-full max-w-4xl">
                <p>2:31</p>

                <div className="bg-gray w-full h-1">
                    <div
                        style={{ width: '52%' }}
                        className="bg-primary w-24 h-1 flex items-center"
                    >
                        <div className="ml-auto bg-primary w-4 h-4 rounded-full"></div>
                    </div>
                </div>

                <p>4:48</p>
            </div>
            <div className="pl-10 flex gap-24 ">
                <div className="gap-4 flex">
                    <TfiLoop className="text-green" size="20" />
                    <TbArrowsRandom className="text-primary" size="20" />
                </div>
                <FiVolume2 className="text-primary" size="20" />
                <MdPlaylistPlay className="text-primary" size="20" />
            </div>
        </div>
    );
}
export default Player;
