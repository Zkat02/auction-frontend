import icon from "../../img//logo.png";
import icon_location from "../../img/icons/networks/Shape.svg";
import icon_phone from "../../img/icons/networks/Path.svg";
import icon_facebook from "../../img/icons/networks/Facebook.svg";
// import icon_pinterest from "../../img/icons/networks/Pinterest.svg";
import icon_twitter from "../../img/icons/networks/Twitter.svg";
import icon_linkedin from "../../img/icons/networks/LinkedIn.svg";
import icon_instagram from "../../img/icons/networks/Instagram.svg";
// import icon_google from "../../img/icons/networks/GooglePlus.svg";
import "./footer.css";

const Footer = () => {
  return (  
    <footer className="footer">
      <div className="footer__topline" />
      <div className="footer__container">
        <div className="footer__information">
          <div className="footer__logos">
            <strong>FarmAuction</strong>
            <img src={icon} alt="logo" />
          </div>
          <div className="footer__contacts">
            <div className="footer__contacts_location">
              <img src={icon_location} alt="logo" />
              Virtual
            </div>
            <div className="footer__contacts_number">
              <img src={icon_phone} alt="phone" />
              +375 (29) 323 83 77
            </div>
            <div className="footer__contacts_other">
              <div className="footer__contacts_other_text">Social Media</div>
              <a href="http://facebook.com" target="_blank" rel="noreferrer" ><img src={icon_facebook} alt="facebook" /></a>
              <a href="http://linkedin.com" target="_blank" rel="noreferrer"><img src={icon_linkedin} alt="linkedin" /></a>
              {/* <a href="#" target="_blank" rel="noreferrer"><img src={icon_google} alt="google" /></a> */}
              <a href="http://instagram.com" target="_blank" rel="noreferrer"><img src={icon_instagram} alt="instagram" /></a>
              {/* <a href="#" target="_blank" rel="noreferrer"><img src={icon_pinterest} alt="pinterest" /></a> */}
              <a href="http://twitter.com" target="_blank" rel="noreferrer"><img src={icon_twitter} alt="twitter" /></a>
            </div>
          </div>
        </div>

        <div className="footer__text_under_bottomline">
          <ul className="footer__pages_list">
            <li className="footer__page">
              {" "}
              <a href="/" target="_blank" rel="noreferrer">Home</a>
            </li>
            <li className="footer__page">
              {" "}
              <a href="/" target="_blank" rel="noreferrer">About us</a>
            </li>
            <li className="footer__page">
              {" "}
              <a href="/auctions" target="_blank" rel="noreferrer">Auction</a>
            </li>
            <li className="footer__page">
              {" "}
              <a href="#" target="_blank" rel="noreferrer">Contact us</a>
            </li>
            <li className="footer__page">
              {" "}
              <a href="#" target="_blank" rel="noreferrer">Help</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottomline" />
    </footer>
  );
}
 
export default Footer;
