import { PillIcon, BagIcon, ChatIcon, ArrowIcon } from './Icons.jsx';

const services = [
  {
    title: 'Prescription Medicines',
    text: 'Genuine medicines, prepared carefully and handed over with clear instructions.',
    Icon: PillIcon,
  },
  {
    title: 'Healthcare Products',
    text: 'Everyday health and wellness essentials for you and your family.',
    Icon: BagIcon,
  },
  {
    title: 'Pharmacist Guidance',
    text: 'Friendly advice from our pharmacists whenever you have a question.',
    Icon: ChatIcon,
  },
];

function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="mb-14 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">Our Services</p>
        <h2 className="mb-3 text-3xl font-bold text-slate-900 md:text-4xl">What We Offer</h2>
        <p className="mx-auto max-w-xl text-slate-600">
          Everything you need for your health, all in one place.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {services.map(({ title, text, Icon }) => (
          <div
            key={title}
            className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
          >
            <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-md shadow-blue-200">
              <Icon className="h-7 w-7" />
            </span>
            <h3 className="mb-2 text-xl font-semibold text-slate-900">{title}</h3>
            <p className="mb-5 leading-relaxed text-slate-600">{text}</p>
            <a href="#register" className="inline-flex items-center gap-2 font-semibold text-blue-700 group-hover:gap-3">
              Get started
              <ArrowIcon className="h-4 w-4" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
