import beetroot from "../components/product_card/img_products/beetroot.svg";
import bell_pepper from "../components/product_card/img_products/bell_pepper.svg";
import cabbage from "../components/product_card/img_products/cabbage.svg";
import carrot1 from "../components/product_card/img_products/carrot1.svg";
import carrot2 from "../components/product_card/img_products/carrot2.svg";
import cucumber1 from "../components/product_card/img_products/cucumber1.svg";
import cucumber2 from "../components/product_card/img_products/cucumber2.svg";
import eggplant from "../components/product_card/img_products/eggplant.svg";
import garlic from "../components/product_card/img_products/garlic.svg";
import onion from "../components/product_card/img_products/onion.svg";
import potato from "../components/product_card/img_products/potato.svg";
import tomato from "../components/product_card/img_products/tomato.svg";
import zucchini from "../components/product_card/img_products/zucchini.svg";

const vegetableslist = [
    {
      id: 1,
      name: "Potato",
      type: "potato",
      variety: "Russet",
      seasonality: "winter",
      country: "Belarus",
      amount: 5.0, // kg
      size: { height: 8, width: 4 }, // in cm
      packaging: "sack",
      availability: "in stock",
      organic: false,
      minimumBidPrice: 2.0,
      currentBidPrice: 2.5,
      auctionStartTime: new Date("2023-03-10T10:00:00Z"),
      auctionEndTime: new Date("2023-03-12T10:00:00Z"),
      dateCreated: new Date("2023-03-01T10:00:00Z"),
      img: potato ,
    },
    {
      id: 2,
      name: "Cucumber",
      type: "cucumber",
      variety: "Kirby",
      seasonality: "summer",
      country: "Belarus",
      amount: 1.5, // kg
      size: { height: 10, width: 5 }, // in cm
      packaging: "basket",
      availability: "out of stock",
      organic: true,
      minimumBidPrice: 1.0,
      currentBidPrice: 1.5,
      auctionStartTime: new Date("2023-03-10T10:00:00Z"),
      auctionEndTime: new Date("2023-03-12T10:00:00Z"),
      dateCreated: new Date("2023-03-02T10:00:00Z"),
      img: cucumber1,
    },
    {
      id: 3,
      name: "Carrot",
      type: "carrot",
      variety: "Nantes",
      seasonality: "spring",
      country: "Belarus",
      amount: 3.0, // kg
      size: { height: 12, width: 3 }, // in cm
      packaging: "bag",
      availability: "in stock",
      organic: false,
      minimumBidPrice: 0.5,
      currentBidPrice: 0.75,
      auctionStartTime: new Date("2023-03-10T10:00:00Z"),
      auctionEndTime: new Date("2023-03-12T10:00:00Z"),
      dateCreated: new Date("2023-03-03T10:00:00Z"),
      img: carrot2 ,
    },
    {
      id: 4,
      name: "Onion",
      type: "onion",
      variety: "Yellow",
      seasonality: "summer",
      country: "Belarus",
      amount: 2.0, // kg
      size: { height: 5, width: 5 }, // in cm
      packaging: "sack",
      availability: "in stock",
      organic: true,
      minimumBidPrice: 1.0,
      currentBidPrice: 1.25,
      auctionStartTime: new Date("2023-03-10T10:00:00Z"),
      auctionEndTime: new Date("2023-03-12T10:00:00Z"),
      dateCreated: new Date("2023-03-03T10:00:00Z"),
      img: onion ,
    },
    {
      id: 5,
      name: "Tomato",
      type: "tomato",
      variety: "Cherry",
      seasonality: "summer",
      country: "Belarus",
      amount: 2.5, // kg
      size: { height: 3, width: 3 }, // in cm
      packaging: "basket",
      availability: "out of stock",
      organic: false,
      minimumBidPrice: 1.5,
      currentBidPrice: 2.0,
      auctionStartTime: new Date("2023-03-10T10:00:00Z"),
      auctionEndTime: new Date("2023-03-12T10:00:00Z"),
      dateCreated: new Date("2023-03-04T10:00:00Z"),
      img: tomato,
    },
    {
      id: 6,
      name: "Cabbage",
      type: "cabbage",
      variety: "Green",
      seasonality: "winter",
      country: "Belarus",
      amount: 4.0, // kg
      size: { height: 15, width: 15 }, // in cm
      packaging: "crate",
      availability: "in stock",
      organic: true,
      minimumBidPrice: 1.0,
      currentBidPrice: 1.5,
      auctionStartTime: new Date("2023-03-10T10:00:00Z"),
      auctionEndTime: new Date("2023-03-12T10:00:00Z"),
      dateCreated: new Date("2023-03-05T10:00:00Z"),
      img: cabbage ,
    },
    {
      id: 7,
      name: "Bell Pepper",
      type: "bell pepper",
      variety: "Red",
      seasonality: "summer",
      country: "Belarus",
      amount: 1.5, // kg
      size: { height: 8, width: 6 }, // in cm
      packaging: "box",
      availability: "in stock",
      organic: false, 
      minimumBidPrice: 1.5,
      currentBidPrice: 2.0,
      auctionStartTime: new Date("2023-03-10T10:00:00Z"),
      auctionEndTime: new Date("2023-03-12T10:00:00Z"),
      dateCreated: new Date("2023-03-06T10:00:00Z"),
      img: bell_pepper ,
    },
    {
      id: 8,
      name: "Garlic",
      type: "garlic",
      variety: "White",
      seasonality: "fall",
      country: "Belarus",
      amount: 1.0, // kg
      size: { height: 5, width: 5 }, // in cm
      packaging: "sack",
      availability: "out of stock",
      organic: true,
      minimumBidPrice: 2.0,
      currentBidPrice: 2.5,
      auctionStartTime: new Date("2023-03-10T10:00:00Z"),
      auctionEndTime: new Date("2023-03-12T10:00:00Z"),
      dateCreated: new Date("2023-03-07T10:00:00Z"),
      img: garlic ,
    },
    {
      id: 9,
      name: "Cucumber",
      type: "cucumber",
      variety: "English",
      seasonality: "summer",
      country: "Belarus",
      amount: 2.0, // kg
      size: { height: 15, width: 4 }, // in cm
      packaging: "basket",
      availability: "in stock",
      organic: false,
      minimumBidPrice: 1.2,
      currentBidPrice: 1.5,
      auctionStartTime: new Date("2023-03-10T10:00:00Z"),
      auctionEndTime: new Date("2023-03-12T10:00:00Z"),
      dateCreated: new Date("2023-03-08T10:00:00Z"),
      img: cucumber2 ,
    },
    {
      id: 10,
      name: "Zucchini",
      type: "zucchini",
      variety: "Green",
      seasonality: "summer",
      country: "Belarus",
      amount: 2.5, // kg
      size: { height: 20, width: 6 }, // in cm
      packaging: "box",
      availability: "in stock",
      organic: true,
      minimumBidPrice: 1.0,
      currentBidPrice: 1.2,
      auctionStartTime: new Date("2023-03-10T10:00:00Z"),
      auctionEndTime: new Date("2023-03-12T10:00:00Z"),
      dateCreated: new Date("2023-03-09T10:00:00Z"),
      img: zucchini ,
    },
    {
      id: 11,
      name: "Beetroot",
      type: "beetroot",
      variety: "Red",
      seasonality: "fall",
      country: "Belarus",
      amount: 3.0, // kg
      size: { height: 8, width: 8 }, // in cm
      packaging: "crate",
      availability: "in stock",
      organic: false,
      minimumBidPrice: 0.8,
      currentBidPrice: 1.0,
      auctionStartTime: new Date("2023-03-10T10:00:00Z"),
      auctionEndTime: new Date("2023-03-12T10:00:00Z"),
      dateCreated: new Date("2023-03-10T10:00:00Z"),
      img: beetroot ,
    },
    {
      id: 12,
      name: "Eggplant",
      type: "eggplant",
      variety: "Black Beauty",
      seasonality: "summer",
      country: "Belarus",
      amount: 1.5, // kg
      size: { height: 12, width: 6 }, // in cm
      packaging: "basket",
      availability: "out of stock",
      organic: true,
      minimumBidPrice: 1.5,
      currentBidPrice: 2.0,
      auctionStartTime: new Date("2023-03-10T10:00:00Z"),
      auctionEndTime: new Date("2023-03-12T10:00:00Z"),
      dateCreated: new Date("2023-03-11T10:00:00Z"),
      img: eggplant ,
    },
  ];

  export default vegetableslist;