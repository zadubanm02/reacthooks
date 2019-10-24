import React from "react";
import fr from "../../firebase/firebase";

export default class TestComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: ""
    };
  }

  handleChange = e => {
    const { pic } = e.target.files[0];
    this.setState({ image: pic });
    console.log(this.state);
  };

  handleUpload = () => {
    const { image } = this.state;
    const storage = fr.storage();
    const uploadTask = storage.ref("images/" + image).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        // progress function ...
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress });
      },
      error => {
        // Error function ...
        console.log(error);
      },
      () => {
        // complete function ...
        storage
          .ref("images/")
          .child(image)
          .getDownloadURL()
          .then(url => {
            this.setState({ url });
          });
      }
    );
  };

  render() {
    return (
      <div className="center">
        <br />
        <h2 className="green-text">React Firebase Image Uploader</h2>
        <br />
        <br />
        <div className="row">
          <progress
            value={this.state.progress}
            max="100"
            className="progress"
          />
        </div>
        <br />
        <br />
        <br />
        <div className="file-field input-field">
          <div className="btn">
            <span>File</span>
            <input type="file" onChange={this.handleChange} />
          </div>
          <div className="file-path-wrapper">
            <input className="file-path validate" type="text" />
          </div>
        </div>
        <button
          onClick={this.handleUpload}
          className="waves-effect waves-light btn"
        >
          Upload
        </button>
        <br />
        <br />
        <img
          src={this.state.url || "https://via.placeholder.com/400x300"}
          alt="Uploaded Images"
          height="300"
          width="400"
        />
      </div>
    );
  }
}
