import React from "react";
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";
import EXIF from "exif-js";

export default class TestComp2 extends React.Component {
  state = {
    picture: "",
    pictureURL: "",
    isUploading: false,
    name: "",
    state: "",
    description: "",
    dbURL: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleDataPost = e => {
    e.preventDefault();
    const db = firebase.firestore();

    db.collection("prispevky").add({
      name: this.state.name,
      state: this.state.state,
      description: this.state.description,
      dbURL: this.state.pictureURL
    });
  };

  getMetaData = pictureURL => {};

  handleUploadStart = () => {
    this.setState({ isUploading: true });
  };

  handleUploadError = error => {
    this.setState({ isUploading: false });
    console.error(error);
  };

  handleUploadSuccess = filename => {
    this.setState({ picture: filename, isUploading: false });
    firebase
      .storage()
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then(url => this.setState({ pictureURL: url }))
      .then(url => console.log(this.state.pictureURL));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleDataPost}>
          <input type="text" name="name" onChange={this.handleChange} />
          <input type="text" name="state" onChange={this.handleChange} />
          <input type="text" name="description" onChange={this.handleChange} />
          <button type="submit">Submit data</button>
        </form>
        <form>
          {this.state.dbURL && <img src={this.state.dbURL} alt="" />}

          <FileUploader
            accept="image/*"
            name="avatar"
            randomizeFilename
            storageRef={firebase.storage().ref("images")}
            onUploadStart={this.handleUploadStart}
            onUploadError={this.handleUploadError}
            onUploadSuccess={this.handleUploadSuccess}
            getMetaData={this.getMetaData}
          />
        </form>
      </div>
    );
  }
}
