import { CrossIcon } from './Icons.jsx';

function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-2 text-2xl font-bold text-blue-700">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white">
            <CrossIcon className="h-5 w-5" />
          </span>
          MediCare
        </a>

        <nav className="flex items-center gap-8">
          <a href="#services" className="hidden font-medium text-slate-600 hover:text-blue-700 md:block">
            Services
          </a>
          <a href="#register" className="hidden font-medium text-slate-600 hover:text-blue-700 md:block">
            Sign Up
          </a>
          <a
            href="#register"
            className="rounded-lg bg-blue-600 px-5 py-2.5 font-semibold text-white transition hover:bg-blue-700"
          >
            Register
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
