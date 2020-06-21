import React from "react";
import './ImageUploader.css';
const ImageUploader = () => {
   
    const handleFile = file => {
       URL.createObjectURL(file);
       console.log(file);
    }

    const handleOnDragOver = event => {
        event.preventDefault();
    }
    const handleOnDrop = event => {
        //prevent the browser from opening the image
        event.preventDefault(); 
        event.stopPropagation(); 
        //let's grab the image file
        let imageFile = event.dataTransfer.files[0];
        handleFile(imageFile);
    }
    return (
        <div className="wrapper">
            <div 
             className="drop_zone"
             onDragOver = {handleOnDragOver}
             onDrop = {handleOnDrop}
            > 
            
                <p>Drag image here....</p>
            </div>
            {/* { previewUrl && <div className="image">
       <img src={previewUrl} alt='Drop' /> 
    
     </div> } */}
     </div>
    )
}

export default ImageUploader;