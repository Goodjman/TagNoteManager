import React, { Component,Fragment }  from "react";
import './Header.css';
import ReactDropzone from 'react-dropzone';
import ImageUploader from './ImageUploader'
//render from react dom

class Header extends Component {
//     state={
//         files:[]
//     }
//   // fileSelectedHandler = (event) => {
//   //   this.setState({
//   //       selectedFile:event.target.files[0]
//   //   })
//  // };
//   onPreviewDrop = (files) => {
//     this.setState({
//       files: this.state.files.concat(files),
//      });
//   }

  render() {
    return (
      <div className="header">
        <input type="text" placeholder="Search..." id="search-text-input" />{" "}
 
        <div className="manager">
          <ImageUploader></ImageUploader>
        {/* <ReactDropzone
          accept="image/*"
          onDrop={this.onPreviewDrop}
        >
         Drop Image
        </ReactDropzone>
        {this.state.files.length > 0 &&
          <Fragment>
            <h3>Move that</h3>
            {this.state.files.map((file) => (
              <img
                alt="Preview"
                key={file.preview}
                src={file.preview}
               // style={previewStyle}
              />
            ))}
          </Fragment>
        } */}
         
        </div>
        <button>Login</button>
      </div>
    );
  }
}

export default Header;


/* <h2>Drop Here!</h2>
          <input
            className="file"
            type="file"
            onChange={this.fileSelectedHandler}
          />*/

          /*import React, { Component } from "react";
import Dropzone from "react-dropzone";


const maxSize = 1048576; //1mb
class DragAndDrop extends Component {
  onDrop = acceptedFiles => {
    console.log(acceptedFiles);
  };
  render() {
    return (
      <div>
        <Dropzone
          onDrop={this.onDrop}
          accept="image/png, image/gif image/jpg"//whatever the file type needed
          minSize={0}
          maxSize={maxSize}
          multiple
        >
          {({
            getRootProps,
            getInputProps,
            isDragActive,
            isDragReject,
            rejectedFiles
          }) => {
            const isFileTooLarge =
              rejectedFiles.length > 0 && rejectedFiles[0].size > maxSize;
            return (
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                {isDragActive
                  ? "Drop it when it's hot!"
                  : "Click me or drag a file to upload!"}
                {isDragActive && !isDragReject && "Drop it like it's hot!"}
                {isDragReject && "File type not accepted, sorry!"}
                {isFileTooLarge && (
                  <div>File is too large.</div>
                )}
              </div>
            );
          }}
        </Dropzone>
      </div>
    );
  }
}
export default DragAndDrop;*/