import React, { useContext } from "react";
import firebase from "firebase";
import piexif from "piexifjs";
import { parseLat, parseLong, ConvertDMS } from "../test/exifData";
import "./addnew.scss";

export default class AddNew extends React.Component {
  state = {
    picture: "",
    pictureURL: "",
    isUploading: false,
    name: "",
    state: "",
    description: "",
    dbURL: "",
    files: [],
    url: "",
    GPSLat: "",
    GPSLong: "",
    content: "",
    isUploaded: false
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handlePicUpload = e => {
    let file = e.target.files[0];
    console.log(e.target.files[0]);
    const reader = new FileReader();
    reader.onloadend = e => {
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
      this.setState({ GPSLat: convertedLat });
      this.setState({ GPSLong: convertedLong });
    };
    reader.readAsDataURL(file);
    this.setState(() => ({ image: file }));
  };

  handleDataPost = e => {
    const { image } = this.state;
    e.preventDefault();

    const uploadTask = firebase
      .storage()
      .ref(`images/${image.name}`)
      .put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress });
      },
      error => {
        console.log(error);
      },
      () => {
        firebase
          .storage()
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            this.setState({ dbURL: url });
            console.log(this.state.dbURL);
            const {
              dbURL,
              name,
              state,
              description,
              content,
              GPSLat,
              GPSLong
            } = this.state;
            const db = firebase.firestore();
            db.collection("prispevky").add({
              name: name,
              state: state,
              description: description,
              content: content,
              dbURL: dbURL,
              GPSLat: GPSLat,
              GPSLong: GPSLong,
              timestamp: new Date().toUTCString()
            });
            this.setState({ isUploaded: true });
          });
      }
    );
  };

  render() {
    const { isUploaded } = this.state;
    if (isUploaded) {
      return (
        <div className="upload-success">
          <h3>
            Prispevok bol uspesne pridany{" "}
            <i class="fas fa-check check-icon"></i>
          </h3>
        </div>
      );
    }
    return (
      <div className="form-container">
        <form onSubmit={this.handleDataPost} className="add-new-form">
          <div className="form-group">
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              className="form-control addnew-text-input"
              placeholder="Podpis sa"
            />
            <small class="form-text text-muted">
              Zadaj svoje meno, prezyvku alebo co len chces aby ta ludia
              poznali.
            </small>
            <input
              type="text"
              name="state"
              onChange={this.handleChange}
              className="form-control addnew-text-input"
              placeholder="Kde si bol ?"
            />
            <small class="form-text text-muted">
              Zadaj stat, mesto alebo miesto, ktore si navstivil.
            </small>
            <input
              type="text"
              name="description"
              onChange={this.handleChange}
              className="form-control addnew-text-input"
              placeholder="Sem daj kratky popis"
            />
            <small class="form-text text-muted">
              Zadaj kratky popis miesta a zazitku, ktory si zazil.
            </small>
            <textarea
              type="text"
              name="content"
              onChange={this.handleChange}
              className="form-control textarea-input"
              rows="4"
              placeholder="Rozvin svoje myslienky a odporuc ostatnym..."
            ></textarea>
            <small class="form-text text-muted ">
              Tvojej slovnej zasobe sa medze nekladu. Mysli na ostatnych a porad
              im alebo odporuc.
            </small>
            <br />

            <input
              type="file"
              id="picupload"
              onChange={this.handlePicUpload}
              accept="image/*"
              className="file-input"
            />
            <label htmlFor="picupload" className="add-photo">
              <i class="fas fa-folder-plus file-icon"></i>
              Pridaj fotku
            </label>
            <br />
            <button type="submit" className=" submit-button">
              Pridat prispevok
            </button>
          </div>
        </form>
      </div>
    );
  }
}
