import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Callback from "./components/Callback";
import Profile from "./components/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/oauth/callback" element={<Callback />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
