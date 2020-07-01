import React,{Component} from "react";

import NoteBody from './Workspace/NoteBody/NoteBody';
import Header from './Workspace/Header/Header';
import Modal from './Workspace/BackDrop/Modal';

class App extends Component {
  state={
    modalToggle: false
  }
  
  modalHandler = (e) => {
    e.preventDefault();
    this.setState({
      modalToggle: !this.state.modalToggle
    })
  }
  render(){
  return (
    <div>
      <Header />
      <Modal show={this.state.modalToggle} modalClosed={this.modalHandler}>
        <div style={{ color: "black" }}>Enter your Note!</div>
      </Modal>
      <NoteBody>
        
      </NoteBody>
       <button onClick ={this.modalHandler}></button> {/*кнопочка внизу страницы чтобы появился модуль записи заметки)) */}
    </div>
  );
  }
}

export default App;

/* задание не закончено! еще много что нужно делать, но знаний пока не хватает*/