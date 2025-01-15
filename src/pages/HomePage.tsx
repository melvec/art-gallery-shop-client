import Banner from "../components/Banner";
import Card from "../components/Card";
import Cards from "../components/Cards";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Header from "../components/Header";

const HomePage = () => {
  return (
    <>
      <div className="bg-white">
        <Header /> <Banner /> <Categories /> <Cards /> <Footer />
      </div>
    </>
  );
};

export default HomePage;
