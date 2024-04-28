import React from "react";
import "../assets/css/components/card.css";
import Button from "./Button";

class Card extends React.Component {
  render() {
    return (
      <>
        <div className="card">
          <input type="checkbox" name="" id="" />
          <span>{this.props.task}</span>
          <Button value="Edit" className="btn-success" />
          <Button value="Delete" className="btn-danger" />
        </div>
      </>
    );
  }
}

export default Card;
