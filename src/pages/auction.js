import "./styles/auction.css";
import VegetableFilter from "../components/filter/VegetableFilter";
import vegetableslist from "../helpers/vegetablelist";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
// import vegetableslist from "../requests/vegetableslist";



const Auction = (props) => {
  
  const vegetablelist = vegetableslist;

  return (
    <>
    <Navbar />
    <div className="auction">
      <div className="auction__header">
        <div className="auction__header_text">AUCTION</div>
      </div>

      <div className="auction__body">
        <VegetableFilter vegetables={vegetableslist} />
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Auction;
