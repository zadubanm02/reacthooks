import React, { useState, useEffect } from "react";
import db from "../firebase/firebase";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

const PrispevkyCards = () => {
  const [data, setData] = useState({ prispevky: [] });
  const [count, setCount] = useState(0);

  useEffect(() => {
    db.collection("prispevky")
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        console.log(data);
        setData({ prispevky: data });
      });
  }, []);

  const counter = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div>
        {data.prispevky.map(item => {
          return (
            <Card>
              <Card.Header as="h5">{item.state}</Card.Header>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>

      <div>{count}</div>
      <button onClick={counter}>Increment</button>
      <p>Vitaj na stranke</p>
    </div>
  );
};

export default PrispevkyCards;
