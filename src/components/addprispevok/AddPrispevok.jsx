import React, { useContext, useState } from "react";
import firebase from "firebase";
import piexif from "piexifjs";
import { parseLat, parseLong, ConvertDMS } from "../test/exifData";
import { UserContext } from "../../context/UserContext";
import "./add-prispevok.scss";

export const AddPrispevok = () => {
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
  };

  if (isUploaded) {
    return (
      <div className="upload-success">
        <h3>
          Prispevok bol uspesne pridany <i class="fas fa-check check-icon"></i>
        </h3>
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
                Zadaj stat, mesto alebo miesto, ktore si navstivil.
              </small>
            </div>
            <div className="form-group">
              <input
                type="text"
                name="description"
                onChange={(e) => setDescription(e.target.value)}
                className="form-control "
                placeholder="Sem daj kratky popis"
              />
              <small class="form-text text-muted">
                Zadaj kratky popis miesta a zazitku, ktory si zazil.
              </small>
            </div>
            <div className="form-group">
              <textarea
                type="text"
                name="content"
                onChange={(e) => setContent(e.target.value)}
                className="form-control "
                rows="4"
                placeholder="Rozvin svoje myslienky a odporuc ostatnym..."
              ></textarea>
              <small class="form-text text-muted ">
                Tvojej slovnej zasobe sa medze nekladu. Mysli na ostatnych a
                porad im alebo odporuc.
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
              Pridat prispevok
            </button>
          </form>
        </div>
        <div className="col-lg-2"></div>
      </div>
    </div>
  );
};
