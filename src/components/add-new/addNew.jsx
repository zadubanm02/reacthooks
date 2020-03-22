import React from "react";
import firebase from "firebase";
import piexif from "piexifjs";
import { parseLat, parseLong, ConvertDMS } from "../test/exifData";

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
    content: ""
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
              GPSLong: GPSLong
            });
          });
      }
    );
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleDataPost}>
          <div className="form-group">
            <label for="name">Podpis sa</label>
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              className="form-control"
            />
            <small class="form-text text-muted">
              Zadaj svoje meno, prezyvku alebo co len chces aby ta ludia
              poznali.
            </small>
            <label for="state">Kde si bol?</label>
            <input
              type="text"
              name="state"
              onChange={this.handleChange}
              className="form-control"
            />
            <small class="form-text text-muted">
              Zadaj stat, mesto alebo miesto, ktore si navstivil.
            </small>
            <label for="description">Popis tvojho zazitku ?</label>
            <input
              type="text"
              name="description"
              onChange={this.handleChange}
              className="form-control"
            />
            <small class="form-text text-muted">
              Zadaj kratky popis miesta a zazitku, ktory si zazil.
            </small>
            <label for="content">Rozvin svoje myslienky a porad ostatnym</label>
            <textarea
              type="text"
              name="content"
              onChange={this.handleChange}
              className="form-control"
              rows="4"
            ></textarea>
            <small class="form-text text-muted">
              Tvojej slovnej zasobe sa medze nekladu. Mysli na ostatnych a porad
              im alebo odporuc.
            </small>
            <br />
            <input type="file" id="picupload" onChange={this.handlePicUpload} />
            <br />
            <button type="submit">Submit data</button>
            <img src={this.state.dbURL} alt="" />
          </div>
        </form>
      </div>
    );
  }
}
