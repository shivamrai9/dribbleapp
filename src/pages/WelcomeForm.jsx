import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios'
import {  useNavigate } from "react-router-dom"
const WelcomeForm = () => {


    const form = useForm();
    let navigate = useNavigate();
    const { register, control, handleSubmit,  formState: { errors }  } = form;
    const [selectedOption, setSelectedOption] = useState("");


    // const onSubmit = (data) => {
    //     // Handle form submission data here
    //     console.log(data);

    //     // Navigate to the home page
    //     navigate("/home");
    // };

    const onSubmit = async (data) => {
        console.log(data)
        try {
            const response = await axios.post('https://dribble-back.onrender.com/submit-form', data);

            console.log('Form submitted successfully in the database:', response.data);

            // Reset the form after successful submission
            setSelectedOption(""); // Reset selected option
            navigate("/home");
        } catch (error) {
            console.error('Error submitting form:', error.message);
            // alert("please select atlest on option")
            navigate("/home");
        }
    };

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };
    return (
        <section>
            <form className="mx-auto max-w-screen-lg px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 " onSubmit={handleSubmit(onSubmit)}>
                <div className="mx-auto max-w-2xl text-center mb-20">
                    <h2 className="text-4xl font-extrabold sm:text-4xl">What brings you to Dribble?</h2>

                    <p className="mt-3 text-base text-slate-500 font-medium">
                        Select the options that best describe you.Don't worry, you can explore other options later
                    </p>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <label className={`block rounded-xl border hover:border-4 p-8 transition hover:border-pink-500 ${selectedOption === 'looking to share my work' ? 'border-pink-500 border-4' : ''}`} onClick={() => handleOptionChange('looking to share my work')}>
                        <input
                            type="radio"
                            {...register("option", { required: true })}
                            value="looking to share my work"
                            className="hidden"
                        />
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-10 text-pink-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                />
                            </svg>

                            <h2 className="mt-4 text-xl font-bold text-center">
                                I'm a designer looking to share my work
                            </h2>

                            <p className="mt-1 text-sm text-gray-300 text-center">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                    </label>


                    <label className={`block rounded-xl border hover:border-4 p-8 transition hover:border-pink-500 ${selectedOption === 'looking to hire a designer' ? 'border-pink-500 border-4' : ''}`} onClick={() => handleOptionChange('looking to hire a designer')}>
                        <input
                            type="radio"
                            {...register("option", { required: true })}
                            value="looking to hire a designer"
                            className="hidden"
                        />
                        <div>
                        <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-10 text-pink-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                />
                            </svg>

                            <h2 className="mt-4 text-xl font-bold text-center">
                                I'm looking to hire a designer
                            </h2>

                            <p className="mt-1 text-sm text-gray-300 text-center">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                    </label>


                    <label className={`block rounded-xl border hover:border-4 p-8 transition hover:border-pink-500  ${selectedOption === 'looking for desing Inspiration' ? 'border-pink-500 border-4' : ''}`} onClick={() => handleOptionChange('looking for desing Inspiration')}>
                        <input
                            type="radio"
                            {...register("option", { required: true })}
                            value="looking for desing Inspiration"
                            className="hidden"
                        />
                        <div>
                        <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-10 text-pink-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                />
                            </svg>

                            <h2 className="mt-4 text-xl font-bold text-center">
                                I'm looking for desing Inspiration
                            </h2>

                            <p className="mt-1 text-sm text-gray-300 text-center">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                    </label>
                    

                </div>

                <div className="mt-12 text-center">
                    <button
                        type='submit'
                        className="inline-block rounded-lg bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
                    >
                        Finish
                    </button>
                </div>
            </form>

        </section>
    )
}

export default WelcomeForm
