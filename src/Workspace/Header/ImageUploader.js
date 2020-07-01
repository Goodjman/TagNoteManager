import React from "react";
import './ImageUploader.css';


const ImageUploader = () => {
   
    const handleFile = (file) => {
      URL.createObjectURL(file);
      console.log(file);
    };
    const handleOnDragOver = (event) => {
      event.preventDefault();
    };
    const handleOnDrop = (event) => {
      event.preventDefault();
      event.stopPropagation();
      let imageFile = event.dataTransfer.files[0];
      handleFile(imageFile);
    };
    return (
        <div className="wrapper" /*ImgUrl={this.props.ImgUrl}*/>
            <div 
             className="drop_zone"
             onDragOver = {handleOnDragOver}
             onDrop = {handleOnDrop}
            > 
                <p>Drag image here....</p>
            </div>
     </div>
    )
}

// const mapStateToProps = (state) => {
//   return {
//     ImgUrl: state.image.url,
//   };
// };

// const mapDispatchToProps = {};

// export default connect(mapStateToProps, mapDispatchToProps)(ImageUploader);
export default ImageUploader;