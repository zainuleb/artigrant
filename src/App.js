import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import Subscription from "./components/subscription/Subscription";
import TendingWriters from "./components/tendingWriters/TendingWriters";
import WhyUs from "./components/whyUs/WhyUs";

function App() {
  return (
    <>
      <Banner />
      <TendingWriters />
      <WhyUs />
      <Subscription />
      <Footer />
    </>
  );
}

export default App;
