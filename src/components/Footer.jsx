import { CrossIcon } from './Icons.jsx';

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:justify-between">
        <div className="max-w-xs">
          <p className="mb-3 flex items-center gap-2 text-xl font-bold text-white">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
              <CrossIcon className="h-4 w-4" />
            </span>
            MediCare
          </p>
          <p className="text-sm leading-relaxed">Trusted pharmacy services and healthcare products for you and your family.</p>
        </div>
        <div className="flex gap-16 text-sm">
          <div className="space-y-2">
            <p className="font-semibold text-white">Explore</p>
            <a href="#home" className="block hover:text-white">Home</a>
            <a href="#services" className="block hover:text-white">Services</a>
            <a href="#register" className="block hover:text-white">Register</a>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 px-6 py-5 text-center text-sm">
        <p>© 2026 MediCare Pharmacy. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
