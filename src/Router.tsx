import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ManageFriendPage } from "./Pages/My/ManageFriendPage";
import { Layout } from "./Components/Layout";
import { MyPage } from "./Pages/MyPage";
import { AddFriendPage } from "./Pages/My/AddFriendPage";
import { Signup } from "./Pages/Account/Signup";
import { ProfileSignup } from "./Pages/Account/Profile";
import { Login } from "./Pages/Account/Login";
import { RoutineList } from "./Pages/routine/RoutineList";
import { CreateRoutinePage } from "./Pages/routine/CreateRoutinePage";
import { UpdateroutinePage } from "./Pages/routine/UpdateroutinePage";
import { RoutinePage } from "./Pages/routine/RoutinePage";
import { StartPage } from "./Pages/routine/StartPage";
import { FinishPage } from "./Pages/routine/FinishPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<></>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Profile/Signup" element={<ProfileSignup />} />
        <Route path="/login" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/manageFriend" element={<ManageFriendPage />} />
          <Route path="/AddFriend" element={<AddFriendPage />} />
          <Route path="/my" element={<MyPage />} />
          <Route path="/routineList" element={<RoutineList />} />
          <Route path="/createRoutine" element={<CreateRoutinePage />} />
          <Route
            path="/updateRoutine/:routineId"
            element={<UpdateroutinePage />}
          />
          <Route path="/routine" element={<RoutinePage />} />
          <Route path="/start" element={<StartPage />} />
          <Route path="/finish" element={<FinishPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
