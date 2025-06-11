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
import { MainPage } from "./Pages/MainPage";
import { BoardList } from "./Pages/Board/list";
import { BoardAdd } from "./Pages/Board/add";
import { BoardView } from "./Pages/Board/view";
import { ScheduleAdd } from "./Pages/Schedule/Add";
import { Schedule } from "./Pages/Schedule/Calendar";
import { ScheduleEdit } from "./Pages/Schedule/edit";
import { BoardEdit } from "./Pages/Board/edit";

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
          <Route path="/start/:routineId" element={<StartPage />} />
          <Route path="/finish/:routineId" element={<FinishPage />} />
          <Route path="/main" element={<MainPage />} />
        </Route>
        <Route path="/boardlist" element={<BoardList />} />
        <Route path="/boardAdd" element={<BoardAdd />} />
        <Route path="/board/:id" element={<BoardView />} />
        <Route path="/board/edit/:id" element={<BoardEdit />} />
        <Route path="/scheduleadd" element={<ScheduleAdd />} />
        <Route path="/calendar" element={<Schedule />} />
        <Route path="/scheduleedit" element={<ScheduleEdit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
