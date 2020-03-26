import React, { useState, useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { ListItem } from "../list-item/ListItem";
import db from "../../firebase/firebase";

const List = () => {
  const [data, setData] = useState({ blog: [] });

  useEffect(() => {
    db.collection("blog")
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => {
          return [doc.id, doc.data()];
        });
        console.log(data);
        setData({ blog: data });
      });
  }, []);

  return (
    <div className="container list">
      <ListGroup>
        {data.blog.map(item => {
          return (
            <ListItem
              key={item[0]}
              title={item[1].title}
              description={item[1].description}
              picture={item[1].picture}
              id={item[0]}
            />
          );
        })}
      </ListGroup>
    </div>
  );
};

export default List;
