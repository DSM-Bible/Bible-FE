import { Route, Routes, BrowserRouter } from "react-router-dom";
import { MyRoutine } from "./Components/MyRoutine";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyRoutine />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
