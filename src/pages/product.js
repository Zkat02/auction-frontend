import { useParams } from "react-router-dom";
import vegetableslist from "../helpers/vegetablelist";
import bidsHistory from "../helpers/history_bids";

import resttime from "../components/product_card/resttime";
import "./styles/product.css";
import Bid from "../components/bid/Bid";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const Product = () => {
  let { product_id } = useParams();
  const product = vegetableslist.find(
    (product) => product.id === parseInt(product_id)
  );

  const bids = bidsHistory.filter(
    (bid) => bid.product_id === parseInt(product_id)
  );

  return (
    <>
      {" "}
      <Navbar />
      <div className="product">
        {/* <div className="auction__body_filter">
          <div className="filter_title">Filters Фильтры</div>
          <ul className="filters">
            <li className="filter_item">filter 1</li>
            <li className="filter_item"> filter 2</li>
            <li className="filter_item">filter 3</li>
          </ul>
      </div> */}

        <div className="container__product">
          <img src={product.img} className="product_img" />
          <div className="container__product_info">
            <div className="container__product_info_text">
              <div className="container__product_name">{product.name}</div>
              <ul className="product_params">
                <li className="product_param">
                  <div className="param">текущая ставка</div>
                  <div className="value">
                    <strong>{product.currentBidPrice} BYN</strong>
                  </div>
                </li>
                <li className="product_param">
                  <div className="param">до конца аукциона аукциона</div>
                  <div className="value">
                    <strong> {resttime(product.auctionEndTime)}</strong>
                  </div>
                </li>
                <li className="product_param">
                  <div className="param">количество</div>
                  <div className="value">{product.amount} кг</div>
                </li>
                <li className="product_param">
                  <div className="param">поставщик</div>
                  <div className="value">{product.name}Corp</div>
                </li>
                <li className="product_param">
                  <div className="param">сорт</div>
                  <div className="value">{product.variety}</div>
                </li>
                <li className="product_param">
                  <div className="param">урожай</div>
                  <div className="value">{product.seasonality}</div>
                </li>
                <li className="product_param">
                  <div className="param">урожай</div>
                  <div className="value">{product.seasonality}</div>
                </li>
                <li className="product_param">
                  <div className="param">страна производитель</div>
                  <div className="value">{product.country}</div>
                </li>
                <li className="product_param">
                  <div className="param">упаковка</div>
                  <div className="value">{product.packaging}</div>
                </li>
                <li className="product_param">
                  <div className="param">доступно</div>
                  <div className="value">{product.availability}</div>
                </li>
                <li className="product_param">
                  <div className="param">средний размер (высота)</div>
                  <div className="value">{product.size.height} см </div>
                </li>
                <li className="product_param">
                  <div className="param">средний размер (ширина)</div>
                  <div className="value">{product.size.width} см </div>
                </li>
                <li className="product_param">
                  <div className="param">натуральность</div>
                  <div className="value">
                    {product.organic
                      ? "натуральный"
                      : "с использованием химии и пестицидов"}
                  </div>
                </li>

                {/* <li className="product_param"></li> */}
              </ul>
            </div>
          </div>
        </div>

        <div className="make_bid">
          <div className="make_bid_title">Сделать ставку</div>
          <div className="make_bid_fields">
            <div className="make_bid_field">
              <div className="field_name">Сделать ставку</div>
              <input
                className="bid_value"
                placeholder="ваша ставка, byn"
              ></input>
            </div>

            <div className="make_bid_field">
              <div className="field_name">автоматическое повышение ставки</div>
              <input type="checkbox" className="auto_bid"></input>
            </div>

            <div className="make_bid_field">
              <div className="field_name">автоматическое повышение ставки</div>
              <input
                className="max_bid_value"
                placeholder="максимальная ставка, byn"
              ></input>
            </div>
          </div>
          <div className="make_bid_btn">
            <button>сделать ставку</button>
          </div>
        </div>

        <div className="container__bids_history">
          <div className="container__bids_history_title">История ставок</div>
          <div className="current_bid">
            <Bid
              bid_id={"текущая"}
              dateCreated={new Date()}
              value={product.currentBidPrice}
            />
          </div>

          {bids.map((bid) => {
            return (
              <Bid
                bid_id={bid.bid_id}
                dateCreated={bid.dateCreated}
                value={bid.value}
              />
            );
          })}
          <Bid
            bid_id={"начальная"}
            dateCreated={product.dateCreated}
            value={product.minimumBidPrice}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
