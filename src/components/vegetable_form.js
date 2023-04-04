import React, { useState } from "react";
import Navbar from "./navbar/Navbar";
import "./vegetable_form.css";

import Footer from "./footer/Footer";
function VegetableForm() {

  var currentDate = new Date();
  var nextWeekDate = new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000);
  var startBidPrice = 0;
  
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentBidPrice, setCurrentBidPrice] = useState(null);

  const [vegetable, setVegetable] = useState({
    id: 1,
    name: "",
    type: "",
    variety: "",
    seasonality: "",
    country: "",
    amount: 0,
    size: { height: "", width: "" },
    packaging: "",
    availability: "",
    organic: false,
    startBidPrice: 0,
    currentBidPrice: startBidPrice, // here to fix
    auctionStartTime: currentDate,
    auctionEndTime: nextWeekDate,
    dateCreated: currentDate,
    img: "",
  });

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  }

//   const handleCurrentBidPrice = (event) => {
//     setCurrentBidPrice(event.target);
//   }

//   const handlSize = (event) => {
//     const { name, value } = event.target;
//     setSize() => (0,0);
//   }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setVegetable((prevvegetable) => ({
      ...prevvegetable,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(vegetable); // отправка данных на сервер
  };

  return (
    <div className="auction_create">
    <Navbar/>
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h1>Форма создания аукциона</h1>

        <label htmlFor="name">Название:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={vegetable.name}
          onChange={handleChange}
        />

        <label htmlFor="type">
          Тип продукции (например: помидор, картофель, ...):
        </label>
        <input
          type="text"
          id="type"
          name="type"
          value={vegetable.type}
          onChange={handleChange}
        />

        <label htmlFor="variety">Сорт:</label>
        <input
          type="text"
          id="variety"
          name="variety"
          value={vegetable.variety}
          onChange={handleChange}
        />

        <label>Сезон урожайности:</label>
        <select name="seasonality" onChange={handleChange}>
          <option value="spring">весна</option>
          <option value="summer">лето</option>
          <option value="fall">осень</option>
          <option value="winter">зима</option>
        </select>

        <label htmlFor="country">Страна в которой выращен продукт:</label>
        <input
          type="text"
          id="country"
          name="country"
          value={vegetable.country}
          onChange={handleChange}
        />

        <label htmlFor="amount">Количество, кг:</label>
        <input
          type="text"
          id="amount"
          name="amount"
          value={vegetable.amount}
          onChange={handleChange}
        />

        <label>Размер:</label>

        <div>
          высота, см:
          <input
            type="text"
            id="size.height"
            name="size.height"
            value={vegetable.size.height}
            onChange={handleChange}
          />
        </div>
        <div>
          ширина, см:
          <input
            type="text"
            id="size.width"
            name="size.width"
            value={vegetable.size.width}
            onChange={handleChange}
          />
        </div>

        <label>Упаковка:</label>
        <select name="packaging" onChange={handleChange}>
          <option value="">All</option>
          <option value="sack">мешок</option>
          <option value="bag">сумка</option>
          <option value="box">коробка</option>
          <option value="basket">корзина</option>
          <option value="crate">ящик</option>
        </select>

        <label>Доступность:</label>
        <select name="availability" onChange={handleChange}>
          <option value="in stock">на складе</option>
          <option value="out of stock">растёт</option>
          {/* other options */}
        </select>

        <label>Натуральность:</label>
        <select name="organic" onChange={handleChange}>
          <option value="">All</option>
          <option value={true}>натур продукт</option>
          <option value={false}>
            с использованием химических удобрений и пестицидов
          </option>
        </select>

        <label htmlFor="startBidPrice"> начальная ставка: </label>
        <input
          type="text"
          id="startBidPrice"
          name="startBidPrice"
          value={vegetable.startBidPrice}
          onChange={handleChange}
        />

        <label htmlFor="auctionStartTime"> время начала аукциона: </label>
        <input
          type="text"
          id="auctionStartTime"
          name="auctionStartTime"
          value={vegetable.auctionStartTime}
          onChange={handleChange}
        />

        <label htmlFor="auctionEndTime"> время конца аукциона: </label>
        <input
          type="text"
          id="auctionEndTime"
          name="auctionEndTime"
          value={vegetable.auctionEndTime}
          onChange={handleChange}
        />

        <label htmlFor="img "> Изображение: </label>
        {/* <input
          type="image"
          id="img"
          name="img"
          value={vegetable.img}
          onChange={handleChange}
        /> */}

        <input
        type="file"
        id="image"
        accept="image/*"
        onChange={handleImageChange}
        />
        {selectedImage && (
            <img
            src={URL.createObjectURL(selectedImage)}
            alt="Selected"
            width="200"
            height="200"
            />
        )}

        <button type="submit">Создать аукцион</button>
      </form>
      </div>
      <Footer/>
    </div>
  );
}

export default VegetableForm;
