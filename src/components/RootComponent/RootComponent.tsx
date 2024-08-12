import { Outlet } from "react-router-dom";
import Header from "../Header/Header.tsx";
import Footer from "../Footer/Footer.tsx"

const RootComponent = () => {
  return (
    <>
      <Header />
      <div className="flex justify-center items-center min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default RootComponent;
