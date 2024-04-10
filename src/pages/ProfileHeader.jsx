import { useLocation ,useNavigate } from 'react-router-dom';


const ProfileHeader = () => {
    const location = useLocation();
    const navigate = useNavigate(); 
    const isWelcomeForm = location.pathname === '/profile/welcomeform'; // Check if current route is /profile/welcomeform

    const handleBackButtonClick = () => {
        navigate('/profile/setupprofile')
    };

  return (

    <>
    <header className="bg-white ">
    <div className="mx-auto flex h-16 max-w-screen-2xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <a className="block text-pink-500" href="#">
            {/* <span className="sr-only">Home</span> */}
            <img className='flex-shrink-0 h-14' src="https://logos-world.net/wp-content/uploads/2023/09/Dribbble-Logo-2014.png" alt="" />
        </a>
        {isWelcomeForm && ( // Render button only if current route is /profile/welcomeform
                    <button
                    onClick={handleBackButtonClick}
                     className="text-gray-600 hover:text-gray-800 focus:outline-none bg-[#feecec] p-3 rounded-md">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </button>
                )}
    </div>
</header>
    </>
  )
}

export default ProfileHeader
