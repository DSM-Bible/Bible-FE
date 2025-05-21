import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ManageFriendPage } from "./Pages/My/ManageFriendPage";
import { Layout } from "./Components/Layout";
import { AddFriendPage } from "./Pages/My/AddFriendPage";
import { Signup } from "./Pages/Account/Signup";
import { ProfileSignup } from "./Pages/Account/Profile";
import { Login } from "./Pages/Account/Login";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<></>} />
        <Route element={<Layout />}>
          <Route path="/manageFriend" element={<ManageFriendPage />} />
          <Route path="/AddFriend" element={<AddFriendPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Profile/Signup" element={<ProfileSignup />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
