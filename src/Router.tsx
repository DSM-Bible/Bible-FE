import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ContentInput } from "./Components/ContentInput";
import { Signup } from "./Pages/Account/Signup";
import { ProfileSignup } from "./Pages/Account/Profile";
import { Login } from "./Pages/Account/Login";
import { BoardList } from "./Pages/Board/list";
import { BoardAdd } from "./Pages/Board/add";
import { BoardEdit } from "./Pages/Board/edit";
import { BoardView } from "./Pages/Board/view";
import { ScheduleAdd } from "./Pages/Schedule/Add";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ContentInput />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Profile/Signup" element={<ProfileSignup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/boardlist" element={<BoardList />} />
        <Route path="/boardAdd" element={<BoardAdd />} />
        <Route path="/boardEdit" element={<BoardEdit />} />
        <Route path="/boardView" element={<BoardView />} />
        <Route path="/ScheduleAdd" element={<ScheduleAdd />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
