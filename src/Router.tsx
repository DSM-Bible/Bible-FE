import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ManageFriendPage } from "./Pages/ManageFriendPage";
import { Layout } from "./Components/Layout";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<></>} />
        <Route element={<Layout />}>
          <Route path="/manageFriend" element={<ManageFriendPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
