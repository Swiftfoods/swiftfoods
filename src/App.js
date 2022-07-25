import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  UserRegister,
  RestaurantMenu,
  Restaurants,
  UserLogin,
  Mamaputin,
  Contact,
} from "./pages";
import { Navbar, Footer } from "./components";

function App() {
  const pathname = window.location.pathname;
  console.log(pathname);
  const noSignUp =
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
        <Route path="/login" element={<UserLogin />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/restaurantmenu" element={<RestaurantMenu />} />
        <Route path="/mamaputin" element={<Mamaputin />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {pathname !== "/login" && pathname !== "/userregister" ? (
        <Footer />
      ) : (
        <div></div>
      )}
    </BrowserRouter>
  );
}

export default App;
