import React, { useState, useEffect } from "react";
import db from "../../firebase/firebase";
import "./PrispevkyCards-styles.css";
import { CardPrispevok } from "../card/CardPrispevok";
import SearchBar from "../searchbar/SearchBar";

const PrispevkyCards = props => {
  const [data, setData] = useState({ prispevky: [] });
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    db.collection("prispevky")
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => {
          return [doc.id, doc.data()];
        });
        setData({ prispevky: data });
      });
  }, []);

  const onSearchChange = e => {
    setSearchValue(e.target.value);
    console.log(searchValue);
  };

  return (
    <div>
      <SearchBar searchValue={searchValue} onSearchChange={onSearchChange} />
      <div className="cardcontainer">
        {data.prispevky
          .filter(item => {
            return (
              item[1].state.toLowerCase().indexOf(searchValue.toLowerCase()) >
              -1
            );
          })
          .map(item => {
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

export default PrispevkyCards;
