import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, UserRegister, RestaurantMenu, Restaurants,  } from "./pages";
import { Navbar, Footer } from "./components";


function App() {
  const pathname = window.location.pathname;
  console.log(pathname);
  const noSignUp =
    "/login" ||
    "/signup" ||
    "/forgot-password" ||
    "/vendorregister" ||
    "/vendorlogin" ||
    "/userregister" ||
    "/userlogin";

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userregister" element={<UserRegister />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/restaurantmenu" element={<RestaurantMenu />} />
      </Routes>
      {noSignUp.includes(pathname) ? <Footer /> : <div></div>}
    </BrowserRouter>
  );
}

export default App;
