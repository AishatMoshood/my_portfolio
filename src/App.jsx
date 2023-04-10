import NavBar from "./sections/navbar/NavBar";
import Header from "./sections/header/Header";
import About from "./sections/about/About";
import Contact from "./sections/contact/Contact";
import Services from "./sections/services/Services";
import Portfolio from "./sections/portfolio/Portfolio";
import Testimonials from "./sections/testimonials/Testimonials";
import FAQS from "./sections/faqs/FAQs";
import Footer from "./sections/footer/Footer";
import FloatingNav from "./sections/floating-nav/FloatingNav";
import Theme from "./theme/Theme";
import { useThemeContext } from "./context/theme-context";

const App = () => {
  const {themeState} = useThemeContext();

  return (
    <main className={`${themeState.primary} ${themeState.background}`}>
      <NavBar />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <FAQS />
      <Contact />
      <Footer />
      <Theme />
      <FloatingNav />
    </main>
  )
}

export default App;