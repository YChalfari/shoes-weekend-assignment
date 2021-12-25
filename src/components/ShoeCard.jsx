import React from "react";
import "./ShoeCard.css";
import Button from "./Button";

const ShoeCard = (props) => {
  const { price, description, model, color, size } = props.shoe;
  const listDisplay = { model, description, size, color, price };
  const renderList = () => {
    return Object.entries(listDisplay).map((entry, i) => {
      return (
        <div key={i}>
          <h4>{`${entry[0]}: `} </h4>
          <span className="desc"> {entry[1]}</span>
        </div>
      );
    });
  };
  return (
    <div className="shoe-card">
      <div className="shoe-card-inner">
        <img
          src={`https://picsum.photos/150?random=${props.i}`}
          alt={props.shoe.model}
        />
        <div className="shoe-card-cont">{renderList()}</div>
      </div>
      <div className="buttons-wrap">
        <Button
          text={"Edit"}
          type={"edit"}
          onClick={props.handleEdit}
          shoe={props.shoe}
        />
        <Button
          text={"Delete"}
          onClick={props.handleDelete}
          shoe={props.shoe}
          type={"delete"}
        />
      </div>
    </div>
  );
};
export default ShoeCard;
