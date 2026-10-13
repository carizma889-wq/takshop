import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToHash from "./ScrollToHash";

function MainLayout() {
  return (
    <div>
      <ScrollToHash />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
