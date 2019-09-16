import React, { useState, useEffect } from "react";
import db from "../../firebase/firebase";
import "./PrispevkyCards-styles.css";
import { CardPrispevok } from "../card/Card";

const PrispevkyCards = () => {
  const [data, setData] = useState({ prispevky: [] });

  useEffect(() => {
    db.collection("prispevky")
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        console.log(data);
        setData({ prispevky: data });
      });
  }, []);

  return (
    <div className="cardcontainer">
      {data.prispevky.map(item => {
        return (
          <CardPrispevok
            state={item.state}
            name={item.name}
            description={item.description}
          />
        );
      })}
    </div>
  );
};

export default PrispevkyCards;
