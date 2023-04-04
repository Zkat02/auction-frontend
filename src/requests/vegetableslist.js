// get vegetableslist from 'http://127.0.0.1:8000/vegetableslist/'
// objects in array :
// {
//     id: 1,
//     name: "Potato",
//     type: "potato",
//     variety: "Russet",
//     seasonality: "winter",
//     country: "Belarus",
//     amount: 5.0, // kg
//     size: { height: 8, width: 4 }, // in cm
//     packaging: "sack",
//     availability: "in stock",
//     organic: false,
//     minimumBidPrice: 2.0,
//     currentBidPrice: 2.5,
//     auctionStartTime: new Date("2023-03-10T10:00:00Z"),
//     auctionEndTime: new Date("2023-03-12T10:00:00Z"),
//     dateCreated: new Date("2023-03-01T10:00:00Z"),
//     img: potato ,
//   }


let vegetableslist = [];

fetch('http://127.0.0.1:8000/vegetableslist/')
// fetch('http://127.0.0.1:8000/api/my_view/')
  .then(response => response.json())
  .then(data => {
    vegetableslist = data;
    console.log(vegetableslist); // обработка полученных данных
  })
  .catch(error => console.error(error));

export default vegetableslist;