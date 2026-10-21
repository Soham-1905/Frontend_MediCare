const steps = [
  { title: 'Create your account', text: 'Sign up with your name, email and phone number.' },
  { title: 'Tell us what you need', text: 'Let our team know about your medicines and health products.' },
  { title: 'Get trusted care', text: 'Receive quality service from our friendly pharmacists.' },
];

function HowItWorks() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">How It Works</p>
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Three simple steps</h2>
        </div>

        <div className="relative grid gap-10 md:grid-cols-3">
          <div className="absolute left-[16.6%] right-[16.6%] top-7 hidden border-t-2 border-dashed border-blue-200 md:block"></div>
          {steps.map((step, index) => (
            <div key={step.title} className="relative text-center">
              <span className="relative mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white ring-8 ring-white">
                {index + 1}
              </span>
              <h3 className="mb-2 text-xl font-semibold text-slate-900">{step.title}</h3>
              <p className="mx-auto max-w-xs text-slate-600">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
