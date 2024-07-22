import "./App.css";
import AboutSection from "./LandingPage/AboutSection";
import AnjemSection from "./LandingPage/AnjemSection";
import FooterSection from "./LandingPage/FooterSection";
import HeroSection from "./LandingPage/HeroSection";
import Jastip from "./LandingPage/Jastip";
import NavbarSection from "./LandingPage/NavbarSection";
import UdangKejuSection from "./LandingPage/UdangKejuSection";

function App() {
  return (
    <>
      <NavbarSection />
      <HeroSection />
      <AboutSection />
      {/* <AnjemSection /> */}
      <Jastip />
      <UdangKejuSection />
      <FooterSection />
    </>
  );
}

export default App;
