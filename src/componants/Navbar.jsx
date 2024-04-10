import React from 'react'

const Navbar = () => {
  return (
    <header className="bg-white ">
            <div className="mx-auto flex h-16 max-w-screen-2xl items-center gap-8 px-4 sm:px-6 lg:px-8">
                <a className="block text-pink-500" href="#">
                    {/* <span className="sr-only">Home</span> */}
                    <img className='flex-shrink-0 h-14' src="https://logos-world.net/wp-content/uploads/2023/09/Dribbble-Logo-2014.png" alt="" />
                </a>

                <div className="flex flex-1 items-center justify-end md:justify-between">
                    <nav aria-label="Global" className="hidden md:block">
                        <ul className="flex items-center gap-6 text-sm">
                            <li>
                                <a className="font-bold text-gray-500 transition hover:text-gray-500/75" href="#"> Inspiration </a>
                            </li>

                            <li>
                                <a className="font-bold text-gray-500 transition hover:text-gray-500/75" href="#"> Find Work </a>
                            </li>

                            <li>
                                <a className="font-bold text-gray-500 transition hover:text-gray-500/75" href="#"> Lern Design </a>
                            </li>

                            <li>
                                <a className="font-bold text-gray-500 transition hover:text-gray-500/75" href="#"> Go Pro </a>
                            </li>

                            <li>
                                <a className="font-bold text-gray-500 transition hover:text-gray-500/75" href="#"> Hire Designers </a>
                            </li>

                        </ul>
                    </nav>

                    <div className="flex items-center gap-4">
                        <div className="sm:flex sm:gap-6    ">

                            <div className="relative">
                                <input type="text" placeholder="Search" className=" bg-[#feecec] text-gray-400 font-medium rounded-lg w-32 py-2.5 px-4 pl-10 transition-all  focus:outline-none focus:w-64" />
                                <span className="absolute inset-y-0 start-0 grid w-10 place-content-center">
                                    <button type="button" className="">
                                        <span className="sr-only">Search</span>

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="h-4 w-4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                            />
                                        </svg>
                                    </button>
                                </span>
                            </div>
                            <div className='flex items-center'>
                                <div className=" w-9 h-9 ">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxNpXDhReGbWgHFTwkrGEdrDi4OZikaZGViWtkLHcudA&s" alt="User Profile" className="w-full h-full  rounded-full" />
                                </div>
                            </div>
                            <a
                                className="block rounded-lg bg-pink-500 px-4 py-2.5  font-medium text-white transition hover:bg-pink-600"
                                href="#"
                            >
                                Upload
                            </a>
                        </div>

                        <button
                            className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
                        >
                            <span className="sr-only">Toggle menu</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
  )
}

export default Navbar
