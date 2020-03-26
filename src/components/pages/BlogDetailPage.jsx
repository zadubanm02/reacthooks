import React, { useState, useEffect } from "react";
import db from "../../firebase/firebase";
import NavigationBar from "../navigationbar/NavigationBar";

const BlogDetailPage = ({ match }) => {
  const [data, setData] = useState({ blog: {} });

  useEffect(() => {
    db.collection("blog")
      .doc(match.params.id)
      .get()
      .then(doc => {
        if (doc.exists) {
          console.log("Document data:", doc.data());
        } else {
          console.log("No such document!");
        }
        const data = doc.data();
        setData({ blog: data });
      });
  }, [match.params.id]);

  return (
    <div>
      <NavigationBar />

      <div className="container">
        <h2>{data.blog.title}</h2>
        <h4>{data.blog.description}</h4>
        <p>{data.blog.content}</p>
        <img
          src={data.blog.picture}
          alt="pic"
          className="col-lg-12 col-xs-12"
        />
      </div>
    </div>
  );
};

export default BlogDetailPage;
