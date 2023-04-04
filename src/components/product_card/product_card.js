import "./product_card.css";
import { NavLink } from "react-router-dom";
// import i_dollar from "../../img/icons/🦆 icon _dollar_.svg";
// import i_timer from "../../img/icons/🦆 icon _timer_.svg";
import i_timer from "../../img/icons/🦆 icon _clock outline_.svg";
import i_dollar from "../../img/icons/🦆 icon _coin_.svg";
import i_amount from "../../img/icons/🦆 icon _cart alt_.svg";

const Product_card = (props) => {
  return (
    <div className="product_card">
      <NavLink className="navlink" to={`/product/${props.id}`}>
        <div className="product_card_img">
        <img src={props.img} />
        </div>
      </NavLink>

      <div className="about_product">
        <NavLink className="navlink" to={`/product/${props.id}`}>
          <div className="product_name">{props.name}</div>
          <div className="product_information">
            <div className="product_parametr">
              <div className="name_parametr"><img src={i_timer}/>до конца аукциона</div>
              <div className="value" id="timer">
                {props.rest_time}
              </div>
            </div>

            <div className="product_parametr">
              <div className="name_parametr"><img src={i_amount}/>Количество</div>
              <div className="value">{props.amount} кг</div>
            </div>

            <div className="product_parametr">
              <div className="name_parametr"><img src={i_dollar}/>текущая ставка</div>
              <div className="value">{props.current_bid_price} BYN </div>
            </div>
          </div>
        </NavLink>

        <div className="buttons">
          <div className="btn_info">
            <a href={`/product/${props.id}`}>подробнее</a>
          </div>
          <div className="btm_make_bid">
            <a href="#">сделать ставку</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product_card;
