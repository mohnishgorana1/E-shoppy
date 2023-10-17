import { Outlet } from "react-router-dom";
import { Header, Navbar } from "../components";

function Home() {
  return (
    <>
      <Header />
      <Navbar />

      <section className="align-element flex flex-col mt-10  gap-5">
        <Outlet />
      </section>
    </>
  );
}

export default Home;
