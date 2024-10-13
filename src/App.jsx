import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import WhereToBuy from "./components/WhereToBuy/WhereToBuy";
import AppBanner from "./components/appBanner/AppBanner";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <div className=" overflow-x-hidden">
      <Hero />
      <Services />
      <WhereToBuy />
      <AppBanner />
      <Footer />
    </div>
  );
}
