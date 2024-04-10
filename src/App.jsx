import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./componants/Footer";
import Navbar from "./componants/Navbar";
import ProfilePage from "./pages/ProfilePage";
import ProfileInfo from "./pages/ProfileInfo";
import WelcomeForm from "./pages/WelcomeForm";
import SignupForm from "./componants/SignupForm"
const App = () => {



  const Home = () => {
    return (
      <>
        <Navbar />
        <section className="px-5 md:px-16 m-auto">

        </section>
        <Footer />
      </>
    )
  }
  return (
    <>
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

    </>
  )
}

export default App
