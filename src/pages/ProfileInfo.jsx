import axios from 'axios'
import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'; 

const ProfileInfo = () => {
    const [loading, setLoading] = useState(false);
    const [url, setUrl] = useState("");
    const [avatar, setAvatar] = useState(null);
    const fileInputRef = useRef(null);
    const navigate = useNavigate(); 

    const handleButtonClick = () => {
        // Click the hidden file input element
        fileInputRef.current.click();
    };

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };

    function uploadSingleImage(base64) {
        setLoading(true);
        axios
            .post("https://dribble-back.onrender.com/user/uploadImage", { image: base64 })
            .then((res) => {
                setUrl(res.data);
            })
            .then(() => setLoading(false))
            .catch(console.log);
    }

    const uploadImage = async (event) => {
        const files = event.target.files;
        console.log(files.length);

        if (files.length === 1) {
            const base64 = await convertBase64(files[0]);
            uploadSingleImage(base64);
            return;
        }

    };


    const handleNextButtonClick = () => {
        // Navigate to the WelcomeForm component
        navigate('/profile/welcomeform');
    };


  return (
    <>
            <div className="flex flex-col items-center  bg-white">
                <div className="max-w-3xl w-full px-6 py-8 ">
                    <h1 className="text-4xl font-bold mb-4">Welcome! Let's create your profile</h1>
                    <p className="text-gray-600 mb-6 text-lg">
                        Let others get to know you better! You can do these later
                    </p>

                    <div className="w-full  pb-8 mt-11 sm:max-w-xl sm:rounded-lg">
                        <h2 className="text-xl font-bold sm:text-2xl">Add an avatar</h2>

                        <div className="grid max-w-2xl mx-auto mt-8">
                            <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
                                {/* Avatar Image */}
                                {!!url ? (
                                    <img
                                        className="object-cover w-40 h-40 rounded-full"
                                        src={url}
                                        alt="Bordered avatar"
                                    />
                                ) : (
                                    /* Placeholder for Avatar */
                                    <div className="relative w-40 h-40 rounded-full border-dashed border-4 flex items-center justify-center">
                                        <span className="text-gray-500 w-4 h-4 rounded-full absolute bg-black"></span>
                                    </div>
                                )}

                                <div className="flex flex-col space-y-5 sm:ml-8">
                                    <div>
                                        <button onClick={handleButtonClick} className="py-3.5 px-4 text-lg font-bold focus:outline-none rounded-lg border border-gray-200 focus:z-10 focus:ring-1 focus:ring-indigo-200">Choose Image</button>
                                        {/* Hidden file input */}
                                        <input
                                            type="file"
                                            ref={fileInputRef}
                                            style={{ display: 'none' }}
                                            onChange={uploadImage}
                                        />
                                    </div>
                                    {avatar && (
                                        <button
                                            type="button"
                                            className="py-3.5 px-7 text-base font-medium text-indigo-900 focus:outline-none bg-white rounded-lg border border-indigo-200 hover:bg-indigo-100 hover:text-[#202142] focus:z-10 focus:ring-4 focus:ring-indigo-200"
                                        >
                                            Delete picture
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-9">
                        <h2 className="text-lg font-bold mb-2">Add your location</h2>
                        <input
                            type="text"
                            placeholder="Enter a location"
                            className="w-full py-2  border-b focus:outline-none"
                        />
                    </div>

                    <button onClick={handleNextButtonClick}  className="bg-pink-500 text-white py-2 px-20 rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50">
                        Next
                    </button>
                </div>
            </div>

            {loading ? <div className="flex items-center justify-center absolute top-0 left-0 h-screen w-screen bg-[#000000ad]">

                <div className="loader"></div>
            </div> : ""}
        </>
  )
}

export default ProfileInfo
