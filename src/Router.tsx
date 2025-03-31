import { Route, Routes, BrowserRouter } from "react-router-dom";
import { CheckModal } from "./Components/CheckModal";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CheckModal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
