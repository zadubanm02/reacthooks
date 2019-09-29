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
        const data = querySnapshot.docs.map(doc => doc.data());
        console.log(data);
        setData({ blog: data });
      });
  }, []);

  return (
    <div>
      <ListGroup>
        {data.blog.map(item => {
          return (
            <ListItem key={item.name} header={item.header} name={item.name} />
          );
        })}
      </ListGroup>
    </div>
  );
};

export default List;
