import { Route, Navigate } from "react-router"
import { Routes } from "react-router"
import { HomePage } from "./HomePage"
import { AboutPage } from "./AboutPage"
import { LoginPage } from "./LoginPage"
import { NavBar } from "../components/NavBar"
import { UserProvider } from "./context/UserProvider"

export const MainApp = () => {
  return (
    <UserProvider>
        <h1>Main App</h1>

        <NavBar />


        <hr />

        <Routes >
            <Route path="/" element={ <HomePage />}/>
            <Route path="about" element={ <AboutPage />}/>
            <Route path="login" element={ <LoginPage />}/>

            {/* <Route path="/*" element={ <LoginPage /> }/> */}
            <Route path="/*" element={ <Navigate to="/about" />}/>


        </Routes>
    </UserProvider>
  )
}

