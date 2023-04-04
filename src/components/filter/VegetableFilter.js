import React, { useState } from "react";
import Product_card from "../product_card/product_card";
import resttime from "../product_card/resttime";

import "./VegetableFilter.css";

const VegetableFilter = ({ vegetables }) => {
  const [filteredVegetables, setFilteredVegetables] = useState(vegetables);

  // const [minBidPrice, setMinBidPrice] = useState('');
  // const [maxBidPrice, setMaxBidPrice] = useState('');

  const [filters, setFilters] = useState({
    type: "",
    seasonality: "",
    country: "",
    minimumBidPrice: "",
    currentBidPrice: "",
    currentBidPriceMin: "",
    currentBidPriceMax: "",
    amount: "",
    availability: "",
    organic: "",
    size: "",
    packaging: "",
    variety: "",
    auctionStartTime: "",
    auctionEndTime: "",
    dateCreated: "",
    img: "",
  });

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters({ ...filters, [name]: value });
  };

  // const handleMinBidPrice = (event) => {
  //   setMinBidPrice(event.target.value);
  //   console.log("min",minBidPrice);
  // };
  // const handleMaxBidPrice = (event) => {
  //   setMaxBidPrice(event.target.value);
  //   console.log("max",maxBidPrice);
  // };

  const applyFilters = () => {
    let filtered = [...vegetables];
    if (filters.type) {
      filtered = filtered.filter((v) => v.type === filters.type);
    }
    if (filters.seasonality) {
      filtered = filtered.filter((v) => v.seasonality === filters.seasonality);
    }
    if (filters.country) {
      filtered = filtered.filter((v) => v.country === filters.country);
    }
    if (filters.minimumBidPrice) {
      filtered = filtered.filter(
        (v) => v.minimumBidPrice <= parseFloat(filters.minimumBidPrice)
      );
    }
    if (filters.currentBidPriceMin) {
      filtered = filtered.filter(
        (v) =>
          v.currentBidPrice >= parseFloat(filters.currentBidPriceMin)
      );
    }
    if (filters.currentBidPriceMax) {
      filtered = filtered.filter(
        (v) =>
          v.currentBidPrice <= parseFloat(filters.currentBidPriceMax)
      );
    }
    if (filters.amount) {
      filtered = filtered.filter((v) => v.amount >= parseFloat(filters.amount));
    }
    if (filters.availability) {
      filtered = filtered.filter(
        (v) => v.availability === filters.availability
      );
    }
    if (filters.organic) {
      let org = filters.organic === "true" ? true : false;
      filtered = filtered.filter((v) => v.organic === org);
    }
    if (filters.size) {
      filtered = filtered.filter(
        (v) =>
          v.size[0] <= parseFloat(filters.size) &&
          v.size[1] <= parseFloat(filters.size)
      );
    }
    if (filters.packaging) {
      filtered = filtered.filter((v) => v.packaging === filters.packaging);
    }
    if (filters.variety) {
      filtered = filtered.filter((v) => v.variety === filters.variety);
    }
    if (filters.auctionStartTime) {
      filtered = filtered.filter(
        (v) => v.auctionStartTime <= new Date(filters.auctionStartTime)
      );
    }
    if (filters.auctionEndTime) {
      filtered = filtered.filter(
        (v) => v.auctionEndTime >= new Date(filters.auctionEndTime)
      );
    }
    if (filters.dateCreated) {
      filtered = filtered.filter(
        (v) => v.dateCreated <= new Date(filters.dateCreated)
      );
    }
    setFilteredVegetables(filtered);
  };

  const resetFilters = () => {
    setFilters({
      type: "",
    seasonality: "",
    country: "",
    minimumBidPrice: "",
    currentBidPrice: "",
    currentBidPriceMin: "",
    currentBidPriceMax: "",
    amount: "",
    availability: "",
    organic: "",
    size: "",
    packaging: "",
    variety: "",
    auctionStartTime: "",
    auctionEndTime: "",
    dateCreated: "",
    img: "",
    });
    setFilteredVegetables(vegetables);
    document.getElementById("currentMinBidPrice").value = "";
    document.getElementById("currentMaxBidPrice").value = "";
  };

  const getveg = () => filteredVegetables;

  return (
    <div className="all">
      <div className="filter">
        <h1 className="filter_title">Овощные Фильтры</h1>
        <ul className="list_filters">
          <li className="list_filter">
            <label>Сорт:</label>
            <select name="type" onChange={handleFilterChange}>
              <option value="">All</option>
              <option value="carrot">Carrot</option>
              <option value="cabbage">Cabbage</option>
              <option value="cucumber">Cucumber</option>
              <option value="garlic">Garlic</option>
              <option value="tomato">Tomato</option>
              <option value="potato">Potato</option>
              {/* other options */}
            </select>
          </li>
          <li className="list_filter">
            <label>Сезон урожайности:</label>
            <select name="seasonality" onChange={handleFilterChange}>
              <option value="spring">весна</option>
              <option value="summer">лето</option>
              <option value="fall">осень</option>
              <option value="winter">зима</option>
              {/* other options */}
            </select>
          </li>

          <li className="list_filter">
            <label>Упаковка:</label>
            <select name="packaging" onChange={handleFilterChange}>
              <option value="">All</option>
              <option value="sack">мешок</option>
              <option value="bag">сумка</option>
              <option value="box">коробка</option>
              <option value="basket">корзина</option>
              <option value="crate">ящик</option>
            </select>
          </li>

          <li className="list_filter">
            <label>Доступно:</label>
            <select name="availability" onChange={handleFilterChange}>
              <option value="">All</option>
              <option value="in stock">на складе</option>
              <option value="out of stock">растёт</option>
            </select>
          </li>

          <li className="list_filter">
            <label>Натуральность:</label>
            <select name="organic" onChange={handleFilterChange}>
              <option value="">All</option>
              <option value={true}>натур продукт</option>
              <option value={false}>
                с использованием химических удобрений и пестицидов
              </option>
            </select>
          </li>

          <li className="list_filter">
            <label>Текущая ставка:</label>

            <div>
              минимальная ставка:
              <input
                type="number"
                id="currentBidPriceMin"
                name="currentBidPriceMin"
                value={filters.currentBidPriceMin}
                onChange={handleFilterChange}
                placeholder="min"
              />
            </div>
            <div>
              максимальная ставка:
              <input
                type="number"
                id="currentBidPriceMax"
                name="currentBidPriceMax"
                value={filters.currentBidPriceMax}
                onChange={handleFilterChange}
                placeholder="max"
              />
            </div>
          </li>

          {/* other filter options */}
        </ul>
        <div className="filter_buttons">
          <button onClick={applyFilters}>Apply Filters</button>
          <button onClick={resetFilters}>Reset Filters</button>
        </div>
      </div>
      <ul className="filteredVegetables">
        {filteredVegetables.map((v) => (
          <li key={v.id}>
            <Product_card
              key={v.id}
              id={v.id}
              name={v.name}
              img={v.img}
              current_bid_price={v.currentBidPrice}
              amount={v.amount}
              rest_time={resttime(v.auctionEndTime)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VegetableFilter;
