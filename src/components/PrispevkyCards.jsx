import React, { useState, useEffect } from "react";
import db from "../firebase/firebase";

const PrispevkyCards = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    db.collection("prispevky")
      .get()
      .then(querySnapshot => {
        const res = querySnapshot.docs.map(doc => doc.data());
        console.log(res);
        setData(res.data);
      });
  }, []);

  const counter = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div>
      <iframe width="560" height="315" src="https://musiclab.chromeexperiments.com/Song-Maker/embed/5091555276750848" frameborder="0" allowfullscreen></iframe>
      </div>

      <div>{count}</div>
      <button onClick={counter}>Increment</button>
      <p>Vitaj na stranke</p>
    </div>
  );
};

export default PrispevkyCards;
