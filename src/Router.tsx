import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ContentInput } from "./Components/ContentInput";
import { MyPage } from "./Pages/MyPage";
import { Layout } from "./Components/Layout";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ContentInput />} />
        <Route element={<Layout />}>
          <Route path="/my" element={<MyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
