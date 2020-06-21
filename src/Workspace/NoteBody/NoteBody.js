import React,{Component} from "react";
import  './NoteBody.css';
import LeftMenu from './Blocks/LeftMenu';
import ImageArea from './Blocks/ImageArea';
import NoteList from './Blocks/NoteList';



class NoteBody extends Component { 
  render(){
      return(
        <div className='main-container'>
        <LeftMenu className='site-menu'></LeftMenu>
        <span className="vl"></span>
        <ImageArea className='main-content'>

        </ImageArea>
        <span className="vl"></span>
        <NoteList className='sidebar'></NoteList>
      </div>
      )
  }
   
};

export default NoteBody;
