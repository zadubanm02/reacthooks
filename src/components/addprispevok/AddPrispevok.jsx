import React, { useContext, useState } from "react";
import firebase from "firebase";
import piexif from "piexifjs";
import { parseLat, parseLong, ConvertDMS } from "../test/exifData";
import { UserContext } from "../../context/UserContext";
import "./add-prispevok.scss";
import { withRouter } from "react-router-dom";

const AddPrispevok = (props) => {
  const { user, setUser } = useContext(UserContext);
  const [GPSLat, setGPSLat] = useState("");
  const [GPSLong, setGPSLong] = useState("");
  const [image, setImage] = useState(null);
  const [dbURL, setdbURL] = useState("");
  const [state, setState] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [isUploaded, setIsUploaded] = useState(false);
  const [files, setFiles] = useState([]);
  const [URL, setURL] = useState("");
  const [isUploading, setisUploading] = useState(false);

  const handlePicUpload = (e) => {
    e.preventDefault();
    setFiles(e.target.files[0]);
    let file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = (e) => {
      const exif = piexif.load(e.target.result);
      const parsedGPSLat = parseLat(exif.GPS);
      const parsedGPSLong = parseLong(exif.GPS);
      if (parsedGPSLat == null) return;
      const convertedLat = ConvertDMS(
        parsedGPSLat[0],
        parsedGPSLat[1],
        parsedGPSLat[2],
        exif.GPS[1]
      );
      const convertedLong = ConvertDMS(
        parsedGPSLong[0],
        parsedGPSLong[1],
        parsedGPSLong[2],
        exif.GPS[3]
      );
      const trimmedGPSLat = Math.floor(convertedLat * 1000) / 1000;
      const trimmedGPSLong = Math.floor(convertedLong * 1000) / 1000;
      setGPSLat(trimmedGPSLat);
      setGPSLong(trimmedGPSLong);
    };
    reader.readAsDataURL(file);
    setImage(file);
  };

  const handleDataPost = (e) => {
    e.preventDefault();
    setisUploading(true);

    const uploadTask = firebase
      .storage()
      .ref(`images/${image.name}`)
      .put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
      },
      (error) => {
        console.log(error);
      },
      () => {
        firebase
          .storage()
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            const imageURL = url;
            setdbURL(url);
            setURL(url);
            const db = firebase.firestore();
            db.collection("prispevky").add({
              name: user.displayName,
              state: state,
              description: description,
              content: content,
              dbURL: imageURL,
              GPSLat: GPSLat,
              GPSLong: GPSLong,
              timestamp: new Date().toUTCString(),
            });
            setIsUploaded(true);
          });
      }
    );
    setTimeout(() => {
      props.history.replace("/prispevky");
    }, 3000);
  };

  if (isUploaded) {
    return (
      <div className="upload-success text-center">
        <h3>
          Príspevok bol úspešne pridaný <i class="fas fa-check check-icon"></i>
        </h3>
      </div>
    );
  }
  if (isUploading) {
    return (
      <div class="text-center">
        <div class="spinner-border text-warning" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <div className="form-container">
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          <form onSubmit={handleDataPost} className="add-new-form">
            <div className="form-group">
              <input
                type="text"
                name="state"
                onChange={(e) => {
                  setState(e.target.value);
                }}
                className="form-control "
                placeholder="Kde si bol ?"
              />
              <small class="form-text text-muted">
                Zadaj štát, mesto alebo miesto, ktoré si navštívil.
              </small>
            </div>
            <div className="form-group">
              <input
                type="text"
                name="description"
                onChange={(e) => setDescription(e.target.value)}
                className="form-control "
                placeholder="Sem daj krátky popis"
              />
              <small class="form-text text-muted">
                Zadaj krátky popis miesta a zážitku, ktorý si zažil.
              </small>
            </div>
            <div className="form-group">
              <textarea
                type="text"
                name="content"
                onChange={(e) => setContent(e.target.value)}
                className="form-control "
                rows="4"
                placeholder="Rozviň svoje myšlienky a odporuč ostatným..."
              ></textarea>
              <small class="form-text text-muted ">
                Tvojej slovnej zásobe sa medze nekladú. Mysli na ostatných a
                poraď im alebo odporuč.
              </small>
            </div>
            <br />
            <div className="form-group">
              <input
                type="file"
                id="picupload"
                onChange={handlePicUpload}
                accept="image/*"
                className="file-input"
              />
            </div>
            <br />
            <button
              type="submit"
              className="btn btn-primary submit-button"
              style={{ background: "#FBD34D" }}
            >
              Pridať príspevok
            </button>
          </form>
        </div>
        <div className="col-lg-2"></div>
      </div>
    </div>
  );
};

export default withRouter(AddPrispevok);
