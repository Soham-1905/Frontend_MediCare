import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import RegisterForm from './components/RegisterForm.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Header />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <RegisterForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
