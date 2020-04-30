import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import NavigationBar from "../navigationbar/NavigationBar";
import db from "../../firebase/firebase";
import { Link } from "react-router-dom";
import "./profilepage.scss";

const ProfilePage = (props) => {
  const { user, setUser } = useContext(UserContext);
  const [profileposts, setProfilePosts] = useState({ profilepostsData: [] });

  useEffect(() => {
    db.collection("prispevky")
      .where("name", "==", user.displayName)
      .get()
      .then((querySnapshot) => {
        const myposts = querySnapshot.docs.map((doc) => {
          return [doc.id, doc.data()];
        });
        console.log("Recommended data: ", myposts);
        setProfilePosts({ profilepostsData: myposts });
      });
  }, []);

  return (
    <div>
      <NavigationBar />
      <div className="container text-center">
        <div className="my-6 text-center py-3">
          {" "}
          <h2 className="profilepage-title font-weight-bold">Tvoj Profil</h2>
        </div>
        <div className="row my-6">
          <div className="col-lg-6 col-12">
            <h2 className="text-center py-6 my-6">Your Profile Details </h2>
          </div>
          <div className="col-lg-6 col-12">
            <div className="profile-info py-6 text-center">
              <h4>{user.displayName}</h4>
              <h6>{user.email}</h6>
              <p>Last login: {user.metadata.lastSignInTime}</p>
              <p>Acoount created: {user.metadata.creationTime}</p>
            </div>
          </div>
        </div>
        <div className="list-group">
          {profileposts.profilepostsData.map((post) => {
            return (
              <Link
                to={`/prispevky/${post[0]}`}
                className="my-3 shadow border profile-list-item"
              >
                <div className="row">
                  <div className="col-lg-3 col-12 p-0">
                    <img
                      src={post[1].dbURL}
                      alt="notfound"
                      className="profile-page-img img-fluid "
                    />
                  </div>
                  <div className="col-lg-9 col-12 profile-list-content">
                    <div class="row">
                      <div className="col-lg-3 col-12"></div>
                      <div className="col-lg-6 col-12 p-5">
                        <h5 class="py-6 text-center font-weight-bold">
                          {post[1].state}
                        </h5>
                      </div>
                      <div className="col-lg-3 col-12">
                        <small class="text-muted">{post[1].timestamp}</small>
                      </div>
                    </div>
                    <p class="py-3">{post[1].description}</p>
                    <small class="text-muted">{post[1].name}</small>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

/**<div>
                <h6>{post[1].state}</h6>
                <h6>{post[1].description}</h6>
                <img src={post[1].dbURL} alt="" style={{ height: "200px" }} />
              </div>*/
