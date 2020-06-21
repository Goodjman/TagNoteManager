import React,{Component} from "react";
import BackDrop from './Workspace/BackDrop/BackDrop';
import NoteBody from './Workspace/NoteBody/NoteBody';
import Header from './Workspace/Header/Header';
// import previewUrl from './Workspace/Header/ImageUploader'

// let ImageStyle = {
//   backgroundImage: `url(${previewUrl})`
// };
class App extends Component {
  



  
  render(){
  return (
    <div>
     <Header/>
     <BackDrop/>
     <NoteBody >


     </NoteBody>
    </div>
  );
  }
}

export default App;
