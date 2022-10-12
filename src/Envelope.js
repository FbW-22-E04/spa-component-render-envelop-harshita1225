import React from "react";
import "./Envelope.css";

export default function Envelope(props) {
  return (
    <div>
      <div className="main">
        <div className="envelope">
          <div className="sender">
            <p className="send-person">{props.sender}</p>
            <p className="sender-address1">{props.address1}</p>
            <p className="sender-address2">{props.address2}</p>
          </div>
          <div className="stamp">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs0I8C6OIQupAUujBoUur0AQIb0-8St_7W8GQ6nWAqng&s"
              alt="stamp"
            />{" "}
          </div>
          <div className="receiver">
            <div className="sender">
              <p className="rec-person">{props.receiver}</p>
              <p className="rec-address1">{props.rec1}</p>
              <p className="rec-address2">{props.rec2}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
