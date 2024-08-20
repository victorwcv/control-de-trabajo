import { Link } from "react-router-dom";
function Navbar() {
  return (
    <header className="sticky top-0 bg-slate-200 h-16 flex items-center shadow-lg z-50">
      <div className="container mx-auto px-8 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-neutral-700">Control de Trabajo</h1>
        <nav>
          <ul className="flex gap-6">
            <li>
              <Link to="/">Anexo 1</Link>
            </li>
            <li>
              <Link to="/map">Plot de Planta</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
