import React, { useState, useEffect } from "react";
import DetailItem from "../detailitem/DetailItem";
import db from "../../firebase/firebase";
import NavigationBar from "../navigationbar/NavigationBar";
import { CardPrispevok } from "../card/CardPrispevok";

const DetailPage = ({ match }) => {
  const [data, setData] = useState({ prispevok: {} });
  const [recommended, setRecommended] = useState({ recommendedData: [] });

  useEffect(() => {
    db.collection("prispevky")
      .doc(match.params.id)
      .get()
      .then(doc => {
        if (doc.exists) {
          console.log("Document data:", doc.data());
        } else {
          console.log("No such document!");
        }
        const data = doc.data();
        setData({ prispevok: data });
        db.collection("prispevky")
          .limit(3)
          .get()
          .then(querySnapshot => {
            const recommended = querySnapshot.docs
              .filter(doc => {
                return (
                  doc.data().GPSLat === data.GPSLat &&
                  doc.data().GPSLong === data.GPSLong
                );
              })
              .map(doc => {
                return [doc.id, doc.data()];
              });
            console.log("Recommended data: ", recommended);
            setRecommended({ recommendedData: recommended });
          });
      });
  }, [match.params.id]);

  return (
    <div>
      <NavigationBar />
      <DetailItem
        name={data.prispevok.name}
        state={data.prispevok.state}
        content={data.prispevok.content}
        dbURL={data.prispevok.dbURL}
      />

      <div className="container">
        <br />
        <h4>Mohlo by ta zaujimat</h4>
        {recommended.recommendedData.map(item => {
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
  );
};

export default DetailPage;
