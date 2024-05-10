import Footer from "../components/footer/Footer";
import FeatureSectionHome from "../components/home/FeatureSectionHome";
import RightSectionHome from "../components/home/RightSectionHome";
import Navbar from "../components/nav/Navbar";

const Home = () => {
  return (
    <div>
      <main>
        <Navbar />
        <RightSectionHome />
        <FeatureSectionHome />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
