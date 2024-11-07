import { Outlet } from "react-router-dom";
import Header from "../static/Header";
import Footer from "../static/Footer";

const layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default layout;
