import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ContentInput } from "./Components/ContentInput";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ContentInput />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
