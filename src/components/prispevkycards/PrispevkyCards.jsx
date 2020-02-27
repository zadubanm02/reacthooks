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
        const data = querySnapshot.docs.map(doc => {
          return [doc.id, doc.data()];
        });
        console.log(data);
        setData({ prispevky: data });
      });
  }, []);

  return (
    <div className="cardcontainer">
      {data.prispevky.map(item => {
        return (
          <CardPrispevok
            key={item[1].docID}
            state={item[1].state}
            name={item[1].name}
            description={item[1].description}
            dbURL={item[1].dbURL}
            id={item[0]}
          />
        );
      })}
    </div>
  );
};

export default PrispevkyCards;
