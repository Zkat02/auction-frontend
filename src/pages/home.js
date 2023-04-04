// import icon from "../img/logo.png";
import icon from "../img/logo1.svg";
import fruits from "../img/fruits.png";
import { NavLink } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

import React, { useRef } from 'react';

function ScrollDownButton() {
  const scrollRef = useRef(null);

  const handleScrollDown = () => {
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  };

  return (
    <div>
      <button onClick={handleScrollDown}>Scroll Down</button>
      <div ref={scrollRef} style={{ height: '200px', overflowY: 'scroll' }}>
        {/* Some content that can be scrolled */}
      </div>
    </div>
  );
}



const Home = () => {
  return (
    <>
      <Navbar />
      <header className="header">
        <div className="header__container">
          <div className="header__row">
            <div className="first_header_column">
              <h1 className="header__title">
                <strong>FarmAuction</strong>
              </h1>
            </div>
            <div className="second_header_column">
              <div className="heaader__text">
                аукцион овощей
                <br />и фермерских продуктов
              </div>
            </div>
          </div>
          <div className="button__row">
            <NavLink className="btn_rel" to={`/auction`}>
              <button className="btn">
                к лотам
              </button>
            </NavLink>
          </div>
        </div>
      </header>

      <div className="home_body" id="home_body">
        <div className="about_us">
          <div className="about_container">
            <div className="first_about_column">
              <h1 className="about__title">About us</h1>
              <div className="about__text">
                Добро пожаловать на овощную аукционную платформу, ведущее место
                для покупки и продажи самых свежих и местных овощей. Наша
                платформа предоставляет простой и интуитивно понятный интерфейс
                для просмотра и ставок на широкий ассортимент овощей, от
                хрустящей моркови до сладкой кукурузы и всего, что между ними.
              </div>
            </div>
            <div className="second_about_column">
              <img src={icon} alt="some" />
            </div>
          </div>
        </div>

        <div className="for_whom">
          <div className="for_whom__container">
            {/* <div className="for_whom__container_image"> */}
            <img src={fruits} />
            {/* </div> */}
            <div className="for_whom__container_text">
              <div className="for_whom__text">
                Являетесь ли вы опытным покупателем овощей или посетителем
                впервые, вы найдете все необходимое, чтобы делать обоснованные
                ставки на овощи, которые вы любите. <br />
                <br />
                На странице
                <a href="/auction">
                  <strong> Auction</strong>
                </a>{" "}
                представлен список доступных овощей с четкими описаниями,
                текущими ставками и вариантами размещения ставки и просмотра
                всех ставок. Список обновляется в режиме реального времени,
                поэтому у вас всегда будет самая актуальная информация о
                доступных овощах.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
