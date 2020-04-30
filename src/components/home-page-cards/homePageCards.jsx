import React, { useState, useEffect } from "react";
import db from "../../firebase/firebase";
import { CardPrispevok } from "../card/CardPrispevok";

const HomePageCards = () => {
  const [data, setData] = useState({ prispevky: [] });

  useEffect(() => {
    db.collection("prispevky")
      .limit(3)
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => {
          return [doc.id, doc.data()];
        });
        setData({ prispevky: data });
      });
  }, []);

  return (
    <div>
      <div className="container homepage-cards">
        <div className="row wow slideInLeft" data-wow-duration="1s">
          {data.prispevky.map(item => {
            return (
              <CardPrispevok
                key={item[0]}
                state={item[1].state}
                name={item[1].name}
                description={item[1].description}
                dbURL={item[1].dbURL}
                id={item[0]}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePageCards;
