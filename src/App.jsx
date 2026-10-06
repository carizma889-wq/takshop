import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import "./App.css";
function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Blog" element={<Blog/>}/>
      </Route>
    </Routes>
  );
}

export default App;
