import React, { useState, useEffect, useContext } from "react";
import DetailItem from "../detailitem/DetailItem";
import db from "../../firebase/firebase";
import NavigationBar from "../navigationbar/NavigationBar";
import { CardPrispevok } from "../card/CardPrispevok";
import { UserContext } from "../../context/UserContext";
import LoginNavigationBar from "../login-navigationbar/LoginNavigationBar";

const DetailPage = ({ match }) => {
  const { user, setUser } = useContext(UserContext);
  const [data, setData] = useState({ prispevok: {} });
  const [recommended, setRecommended] = useState({ recommendedData: [] });
  const [GPSLa, setGPSLa] = useState("");
  const [GPSLo, setGPSLo] = useState("");

  useEffect(() => {
    db.collection("prispevky")
      .doc(match.params.id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log("Document data:", doc.data());
        } else {
          console.log("No such document!");
        }
        const data = doc.data();
        const GPSLa = doc.data().GPSLat;
        const GPSLo = doc.data().GPSLong;
        setGPSLa(GPSLa);
        setGPSLo(GPSLo);
        console.log(GPSLa, GPSLo);
        setData({ prispevok: data });
        db.collection("prispevky")
          .limit(3)
          .where("GPSLat", "==", GPSLa)
          .get()
          .then((querySnapshot) => {
            const recommended = querySnapshot.docs.map((doc) => {
              return [doc.id, doc.data()];
            });
            console.log(data.GPSLat, data.GPSLong);
            console.log("Recommended data: ", recommended);
            setRecommended({ recommendedData: recommended });
          });
      });
  }, [match.params.id]);

  return user == null ? (
    <div>
      <NavigationBar />
      <DetailItem
        name={data.prispevok.name}
        state={data.prispevok.state}
        content={data.prispevok.content}
        dbURL={data.prispevok.dbURL}
      />
      <div className="bg-light">
        <div className="container">
          <br />
          <h3 className="text-center m-4 font-weight-bold">
            Mohlo by ťa zaujímať
          </h3>
          <div className="row p-5">
            {recommended.recommendedData
              .filter((item) => {
                return item[1].GPSLong == GPSLo;
              })
              .map((item) => {
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
    </div>
  ) : (
    <div>
      <LoginNavigationBar />
      <DetailItem
        name={data.prispevok.name}
        state={data.prispevok.state}
        content={data.prispevok.content}
        dbURL={data.prispevok.dbURL}
      />
      <div></div>

      <div className="container">
        <br />
        <h4>Mohlo by ta zaujimat</h4>
        {recommended.recommendedData
          .filter((item) => {
            return item[1].GPSLat == GPSLa;
          })
          .map((item) => {
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

/*.filter(doc => {
  return (
    doc.data().GPSLat === data.GPSLat &&
    doc.data().GPSLong === data.GPSLong
  );
})

doc[1].GPSLong == GPSLo;
*/
