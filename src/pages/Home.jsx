import { Outlet } from "react-router-dom"
import { Header, Navbar } from "../components"

function Home() {
  return (
    <>
      <Header />
      <Navbar />

      <Outlet />
    </>
  )
}

export default Home