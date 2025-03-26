import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Navbar } from "./Components/Navbar";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
