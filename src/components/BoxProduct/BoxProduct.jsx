import { faCartArrowDown, faEye, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function BoxProduct() {
    return (
        <div className="flex justify-center items-center h-[280px] rounded-lg overflow-hidden">
            <div className="relative group flex flex-col justify-start h-full w-full">
                <img src="http://localhost:3000/images/sp_1.png" alt="" className='w-full h-[200px] object-cover mb-2' />
                <div className='px-2'>
                    <div className='font-bold mb-2 text-lg text-black'>Fresh Lime</div>
                    <div className='flex'>
                        <div className='mr-2 text-primary'>100 <span className='text-sm'>đ</span></div>
                        <div className='line-through text-[#828282]'>100 <span className='text-sm'>đ</span></div>
                    </div>

                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Inner boxes */}
                <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-2">
                        <div className="w-12 h-12 bg-white flex items-center justify-center rounded-lg text-primary hover:bg-primary hover:text-white cursor-pointer">
                            <FontAwesomeIcon icon={faEye} className=' text-lg' />
                        </div>
                        <div className="w-12 h-12 bg-white flex items-center justify-center rounded-lg text-primary hover:bg-primary hover:text-white cursor-pointer">
                            <FontAwesomeIcon icon={faCartArrowDown} className=' text-lgmary' />
                        </div>
                        <div className="w-12 h-12 bg-white flex items-center justify-center rounded-lg text-primary hover:bg-primary hover:text-white cursor-pointer">
                            <FontAwesomeIcon icon={faHeart} className=' text-lg' />
                        </div>
                    </div>
                </div>
                <div className='absolute bg-primary px-2 rounded-lg top-2 left-2'>50%</div>
            </div>
        </div>
    );
}

export default BoxProduct;