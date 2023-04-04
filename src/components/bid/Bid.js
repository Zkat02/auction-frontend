import "./bid.css";
const Bid = (bid) => {
  return (
    <div className="Bid">
      <div className="bid_param">
        
        <div className="value">ставка {bid.bid_id}</div>
      </div>
      <div className="bid_param">
        <div className="value">{bid.dateCreated.toString()}</div>
      </div>
      <div className="bid_param">
        <div className="value">{bid.value}</div>
      </div>
    </div>
  );
};

export default Bid;
