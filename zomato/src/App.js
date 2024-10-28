import "./App.css";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Veg from "./pages/Veg";
import Nonveg from "./pages/Nonveg";
import Kart from "./pages/Kart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Get from "./pages/Get";
import Admin from "./pages/Admin";
import Vupdate from "./pages/update/Vupdate";
import Nupdate from "./pages/update/Nupdate";
import Vaddon from "./pages/update/Vaddon";
import Naddon from "./pages/update/Naddon";
import Vedit from "./pages/update/Vedit";
import Nedit from "./pages/update/Nedit";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/veg" element={<Veg />} />
          <Route path="/nonveg" element={<Nonveg />} />
          <Route path="/cart" element={<Kart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} /> {/* Fixed route */}
          <Route path="/get" element={<Get />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/vdate" element={<Vupdate />} />
          <Route path="/ndate" element={<Nupdate />} />
          <Route path="/vaddon" element={<Vaddon />} />
          <Route path="/naddon" element={<Naddon />} />
          <Route
            path="/nedit/:id"
            element={<Nedit />}
            loader={({ params }) =>
              fetch(`http://localhost:5500/nproduct/${params.id}`)
            }
          />
          <Route
            path="/edit/:id"
            element={<Vedit />}
            loader={({ params }) =>
              fetch(`http://localhost:5500/product/${params.id}`)
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
