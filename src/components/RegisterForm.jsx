import { useState } from 'react';
import { CrossIcon } from './Icons.jsx';

const benefits = ['Quick and easy sign-up', 'Quality medicines and products', 'Friendly pharmacist support'];

const initialForm = {
  fullName: '',
  email: '',
  phone: '',
  password: '',
};

const inputClass =
  'w-full rounded-lg border border-slate-300 bg-white p-3 text-slate-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100';

function validateField(name, value) {
  const trimmedValue = value.trim();

  if (name === 'fullName' && !trimmedValue) {
    return 'Please enter your full name.';
  }

  if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedValue)) {
    return 'Please enter a valid email address.';
  }

  if (name === 'phone') {
    const phone = value.trim();
    const digits = phone.replace(/\D/g, '');
    if (!/^\+?[\d\s()-]+$/.test(phone) || digits.length < 7 || digits.length > 15) {
      return 'Please enter a valid phone number.';
    }
  }

  if (name === 'password' && value.length < 8) {
    return 'Password must be at least 8 characters.';
  }

  return '';
}

function RegisterForm() {
  const [formData, setFormData] = useState(initialForm);
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setMessage('');
    if (errors[name]) {
      setErrors((current) => ({ ...current, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    setErrors((current) => ({ ...current, [name]: validateField(name, value) }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = Object.fromEntries(
      Object.entries(formData).map(([name, value]) => [name, validateField(name, value)])
    );
    setErrors(nextErrors);

    if (Object.values(nextErrors).some(Boolean)) {
      setMessage('');
      return;
    }

    setMessage(`Thanks, ${formData.fullName}! Your registration form has been submitted.`);
    setFormData(initialForm);
    setShowPassword(false);
    setErrors({});
  };

  return (
    <section id="register" className="bg-gradient-to-b from-blue-50 to-slate-50 px-6 py-16 md:py-24">
      <div className="mx-auto grid max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl shadow-blue-100 md:grid-cols-5">
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 p-8 text-white md:col-span-2 md:p-10">
          <div className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-white/10"></div>
          <span className="relative mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-blue-600">
            <CrossIcon className="h-7 w-7" />
          </span>
          <h2 className="relative mb-3 text-3xl font-bold leading-tight">Join MediCare today</h2>
          <p className="relative mb-8 text-blue-100">Your health journey starts here.</p>
          <ul className="relative space-y-4">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-blue-700">
                  ✓
                </span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div className="p-6 md:col-span-3 md:p-10">
        <h2 className="mb-2 text-2xl font-bold text-slate-900">Create Your Account</h2>
        <p className="mb-8 text-slate-500">Fill in your details to get started.</p>

        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <div>
            <label htmlFor="fullName" className="mb-1.5 block text-sm font-medium text-slate-700">
              Full Name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              aria-invalid={Boolean(errors.fullName)}
              aria-describedby={errors.fullName ? 'fullName-error' : undefined}
              className={inputClass}
            />
            {errors.fullName && (
              <p id="fullName-error" className="mt-1.5 text-sm text-red-600">
                {errors.fullName}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
              className={inputClass}
            />
            {errors.email && (
              <p id="email-error" className="mt-1.5 text-sm text-red-600">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-slate-700">
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? 'phone-error' : undefined}
              className={inputClass}
            />
            {errors.phone && (
              <p id="phone-error" className="mt-1.5 text-sm text-red-600">
                {errors.phone}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-slate-700">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                onBlur={handleBlur}
                minLength={8}
                required
                aria-invalid={Boolean(errors.password)}
                aria-describedby={errors.password ? 'password-error' : undefined}
                className={`${inputClass} pr-16`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-medium text-blue-700 hover:text-blue-800"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            <p className="mt-1.5 text-xs text-slate-500">Use at least 8 characters.</p>
            {errors.password && (
              <p id="password-error" className="mt-1.5 text-sm text-red-600">
                {errors.password}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Create Account
          </button>
        </form>

        {message && (
          <p className="mt-5 rounded-lg bg-green-50 p-3 text-sm text-green-800">{message}</p>
        )}
        </div>
      </div>
    </section>
  );
}

export default RegisterForm;
