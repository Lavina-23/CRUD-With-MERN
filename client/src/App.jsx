import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="w-full p-6">
      <div className="grid justify-items-stretch px-[200px]">
        <Navbar />
        <Outlet />
      </div>
    </div>
  )
}

export default App;