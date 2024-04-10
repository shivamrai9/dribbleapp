import React from 'react'

const WelcomeForm = () => {
  return (
    <section>
                <div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 ">
                    <div className="mx-auto max-w-2xl text-center mb-20">
                        <h2 className="text-4xl font-extrabold sm:text-4xl">What brings you to Dribble?</h2>

                        <p className="mt-3 text-base text-slate-500 font-medium">
                            Select the options that best describe you.Don't worry, you can explore other options later
                        </p>
                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <a
                            className="block rounded-xl border hover:border p-8  transition hover:border-pink-500/10 "
                            href="#"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-10 text-pink-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path
                                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                />
                            </svg>

                            <h2 className="mt-4 text-xl font-bold text-center ">I'm a designer looking to share my work</h2>

                            <p className="mt-1 text-sm text-gray-300 text-center">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </a>
                        <a
                            className="block rounded-xl border hover:border p-8  transition hover:border-pink-500/10 "
                            href="#"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-10 text-pink-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path
                                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                />
                            </svg>

                            <h2 className="mt-4 text-xl font-bold text-center ">I'm a designer looking to share my work</h2>

                            <p className="mt-1 text-sm text-gray-300 text-center">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </a>
                        <a
                            className="block rounded-xl border hover:border p-8  transition hover:border-pink-500/10 "
                            href="#"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-10 text-pink-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path
                                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                />
                            </svg>

                            <h2 className="mt-4 text-xl font-bold text-center ">I'm a designer looking to share my work</h2>

                            <p className="mt-1 text-sm text-gray-300 text-center">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </a>


                    </div>

                    <div className="mt-12 text-center">
                        <a
                            href="#"
                            className="inline-block rounded-lg bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
                        >
                            Finish
                        </a>
                    </div>
                </div>

            </section>
  )
}

export default WelcomeForm
