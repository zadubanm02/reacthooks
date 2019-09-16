import React, { useState, useEffect } from "react";
import db from "../../firebase/firebase";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./PrispevkyCards-styles.css";

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
    <div>
      <div>
        {data.prispevky.map(item => {
          return (
            <Card className="cardlist">
              <Card.Header as="h5">{item.state}</Card.Header>
              <Card.Body>
                <Card.Img src={item.picture}></Card.Img>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default PrispevkyCards;
