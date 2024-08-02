import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="flex justify-between items-end mb-20">
        <NavLink to="/">
          <h1 className="text-lg font-bold text-[100px] p-4">Link Keeper</h1>
        </NavLink>
        <NavLink
          className="inline-flex items-center justify-center whitespace-nowrap text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 h-9 rounded-md px-3"
          to="/create"
        >
          Add Link
        </NavLink>
      </nav>
    </div >
  );
}

export default Navbar;
