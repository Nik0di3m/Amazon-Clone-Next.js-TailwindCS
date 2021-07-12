import Image from 'next/image'
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
    LocationMarkerIcon,
} from '@heroicons/react/outline'
import HeaderBottomItems from './HeaderBottomItems'
const Header = () => {
    return (
        <header>
            <div className="flex justify-center sm:justify-items-start items-center bg-amazon_blue p-2">
                {/* Top Nav */}
                <div className="mt-2 max-h-[50px] p-2 flex justify-center cursor-pointer items-center sm:flex-grow-0 mr-4 border-2 border-transparent hover:border-gray-200 rounded-sm">
                    <Image
                        src="/images/amazon-logo.png"
                        width={80}
                        height={50}
                        alt="logo"
                        objectFit='contain'
                    />
                </div>
                {/* Delivery Addres */}
                <div className='hidden md:flex min-w-[100px] h-[50px] justify-center items-center mr-2 p-2 cursor-pointer border-2 border-transparent hover:border-gray-200 rounded-sm'>
                    <div>
                        <LocationMarkerIcon className="h-6 text-white" />
                    </div>
                    <div>
                        <div>
                            <span className="text-gray-300 text-xs">
                                Delivery to
                            </span>
                        </div>
                        <div>
                            <span className="text-white text-sm font-bold">
                                Poland
                            </span>
                        </div>
                    </div>
                </div>
                {/* Search Bar  */}
                <div className="hidden sm:flex items-center h-10 bg-yellow-400 hover:bg-yellow-500 cursor-pointer rounded-md flex-1" >
                    <input type="text" className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4" />
                    <SearchIcon className="h-14 p-3 text-gray-800" />
                </div>
                {/* Right Side  */}
                <div className="border-2 border-transparent hover:border-gray-200 h-[50px] items-center justify-center flex-col ml-2 p-2 cursor-pointer whitespace-nowrap rounded-sm">
                    <p className="text-gray-300 text-xs">Hello, Sign In</p>
                    <p className="text-white text-sm font-bold">Account & Lists</p>
                </div>
                <div className="border-2 border-transparent hover:border-gray-200  h-[50px] items-center justify-center flex-col ml-2 p-2 cursor-pointer whitespace-nowrap rounded-sm">
                    <p className="text-gray-300 text-xs">Returns</p>
                    <p className="text-white text-sm font-bold">& Orders</p>
                </div>
                <div className="relative flex text-white border-2 border-transparent hover:border-gray-200 h-[50px] items-center justify-center ml-2 p-2 cursor-pointer whitespace-nowrap rounded-sm">
                    <span className="absolute top-0 right-0 bg-yellow-500 rounded-full min-w-[20px] text-center font-semibold text-sm">4</span>
                    <ShoppingCartIcon className="h-8" />
                    <span className="hidden sm:inline font-bold">Cart</span>
                </div>
            </div>
            {/* Bottom Nav  */}
            <div className="flex items-center bg-amazon_blue-light text-white text-sm p-1">
                <p className="flex items-center cursor-pointer p-[2px] border-[1px] border-transparent hover:border-gray-200 rounded-sm">
                    <MenuIcon className="h-6 mr-1" />
                    <span className="font-semibold">All</span>
                </p>
                <p className="flex cursor-pointer font-semibold items-center border-[1px] h-[32px] p-[2px] border-transparent hover:border-gray-200 whitespace-nowrap rounded-sm">
                    Today's Deals
                </p>
                <HeaderBottomItems
                    text="Customer Service"
                />
                <HeaderBottomItems
                    text="Gift Cards"
                />
                <HeaderBottomItems
                    text="Registry"
                    hiddenXs="true"
                />
                <HeaderBottomItems
                    text="Sell"
                    hiddenXs="true"
                />
            </div >
        </header >
    )
}

export default Header
