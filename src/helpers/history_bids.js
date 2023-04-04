import vegetableslist from "./vegetablelist";

const bidsHistory = [];

for (const vegetable of vegetableslist) {
  for (let i = 11; i > 1; i--) {
    const bid = {
      bid_id: i - 1,
      product_id: vegetable.id,
      dateCreated: new Date(),
      value: vegetable.currentBidPrice + Math.floor(Math.random() * 11),
    };
    bidsHistory.push(bid);
  }
}

export default bidsHistory;