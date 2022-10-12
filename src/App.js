import React from "react";
import Envelope from "./Envelope";

export default function App() {
  const sender = "SGT Miranda McAnderson";
  const address1 = "6543 N 9th Street";
  const address2 = "APO, AA 33608-1234";
  const receiver = "Henry Hernandez";
  const rec1 = "90210 Broadway Blvd.";
  const rec2 = "Nashville, TN 37011-5678";

  return (
    <Envelope
      sender={sender}
      address1={address1}
      address2={address2}
      receiver={receiver}
      rec1={rec1}
      rec2={rec2}
    />
  );
}
