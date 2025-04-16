import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ManageFriendPage } from "./Pages/My/ManageFriendPage";
import { Layout } from "./Components/Layout";
import { MyPage } from "./Pages/MyPage";
import { AddFriendPage } from "./Pages/AddFriendPage";
import { Signup } from "./Pages/Account/Signup";
import { ProfileSignup } from "./Pages/Account/Profile";
import { Login } from "./Pages/Account/Login";
import { MyPage } from "./Pages/MyPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/manageFriend" element={<ManageFriendPage />} />
          <Route path="/my" element={<MyPage />} />
          <Route path="/AddFriend" element={<AddFriendPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Profile/Signup" element={<ProfileSignup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/my" element={<MyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
