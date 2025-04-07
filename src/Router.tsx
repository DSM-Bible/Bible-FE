import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ManageFriendPage } from "./Pages/ManageFriendPage";
import { Layout } from "./Components/Layout";
import { MyPage } from "./Pages/MyPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/manageFriend" element={<ManageFriendPage />} />
          <Route path="/my" element={<MyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
