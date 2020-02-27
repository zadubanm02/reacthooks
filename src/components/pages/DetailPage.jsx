import React, { useState, useEffect } from "react";
import DetailItem from "../detailitem/DetailItem";
import db from "../../firebase/firebase";
import NavigationBar from "../NavigationBar";

const DetailPage = ({ match }) => {
  const [data, setData] = useState({ prispevok: {} });

  useEffect(() => {
    db.collection("prispevky")
      .doc(match.params.id)
      .get()
      .then(doc => {
        if (doc.exists) {
          console.log("Document data:", doc.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
        const data = doc.data();
        console.log(doc.data().state);
        setData({ prispevok: data });
      });
  }, [match.params.id]);

  return (
    <div>
      <NavigationBar />
      <DetailItem
        name={data.prispevok.name}
        state={data.prispevok.state}
        content={data.content}
        dbURL={data.prispevok.dbURL}
      />
    </div>
  );
};

export default DetailPage;
