import { CrossIcon, ShieldIcon, HeartIcon, PillIcon } from './Icons.jsx';

const points = ['Quality medicines', 'Trusted pharmacy services', 'Customer-focused healthcare'];

const badges = [
  { label: 'Genuine medicines', Icon: ShieldIcon },
  { label: 'Caring service', Icon: HeartIcon },
];

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white">
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blue-100 opacity-60"></div>
      <div className="absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-sky-100 opacity-70"></div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700">
            <PillIcon className="h-4 w-4" />
            Healthcare made simple
          </p>
          <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 md:text-6xl">
            Your Health, <br />
            <span className="text-blue-600">Our Priority</span>
          </h1>
          <p className="mb-8 max-w-lg text-lg leading-relaxed text-slate-600">
            Get the medicines and healthcare products you need with trusted service and care.
          </p>
          <div className="mb-10 flex flex-wrap gap-4">
            <a
              href="#register"
              className="rounded-lg bg-blue-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Create an Account
            </a>
            <a
              href="#services"
              className="rounded-lg border border-slate-300 bg-white px-7 py-3.5 font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-700"
            >
              Our Services
            </a>
          </div>
          <div className="flex flex-wrap gap-6 border-t border-slate-200 pt-6">
            {badges.map(({ label, Icon }) => (
              <div key={label} className="flex items-center gap-2 font-medium text-slate-700">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <Icon className="h-5 w-5" />
                </span>
                {label}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500 to-blue-800 p-8 text-white shadow-2xl shadow-blue-200 md:p-10">
            <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-white/10"></div>
            <div className="absolute -bottom-16 -left-10 h-48 w-48 rounded-full bg-white/10"></div>
            <div className="relative">
              <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-blue-600">
                <CrossIcon className="h-8 w-8" />
              </span>
              <h2 className="mb-6 text-2xl font-semibold">Care you can count on</h2>
              <ul className="space-y-4">
                {points.map((point) => (
                  <li key={point} className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 text-lg">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-sm font-bold text-blue-700">
                      ✓
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-2xl bg-white px-5 py-3 shadow-xl md:-left-8">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
              <ShieldIcon className="h-5 w-5" />
            </span>
            <span className="text-sm font-semibold text-slate-800">Easy online sign-up</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
