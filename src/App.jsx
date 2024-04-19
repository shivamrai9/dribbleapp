import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./componants/Footer";
import Navbar from "./componants/Navbar";
import ProfilePage from "./pages/ProfilePage";
import ProfileInfo from "./pages/ProfileInfo";
import WelcomeForm from "./pages/WelcomeForm";
import SignupForm from "./componants/SignupForm"
import { GlobalProvider } from "./GlobalContext";



const App = () => {



  const Home = () => {
    return (
      <>
        <Navbar />
        <section className="container px-5 md:px-16 m-auto">
        <div className="flex flex-col items-center justify-center ">
      <div className="w-full max-w-xl px-8 py-12 space-y-6 ">
        <h1 className="text-2xl font-bold text-center text-gray-800">Please verify your email...</h1>
        <p className="text-gray-600 text-center">
        Please verify your email address. We've sent a confirmation email to: <span className="font-medium text-indigo-600">account@refero.design</span>
        </p>
        <p className="text-gray-600 text-center">Click the confirmation link in that email to begin using Dribbble.</p>
        <div className="flex space-x-4 justify-center">
          <button className="py-2 px-4 text-sm font-medium text-center text-white rounded-lg bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Click the confirmation link
          </button>
          <button className="py-2 px-4 text-sm font-medium text-center text-gray-600 rounded-lg border border-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Didn't receive the email?
          </button>
        </div>
        <p className="text-gray-500 text-center text-xs">Wrong email address? Change it.</p>
      </div>
    </div>
        </section>
        <Footer />
      </>
    )
  }
  return (
    <>
    <GlobalProvider>
      <Router>

        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/" element={<SignupForm />} />
          <Route exact path='/profile' element={<ProfilePage />}>
            <Route path="setupprofile" element={<ProfileInfo />} />
            <Route path="welcomeform" element={<WelcomeForm />} />
          </Route>
        </Routes>
      </Router>
      </GlobalProvider>
    </>
  )
}

export default App
