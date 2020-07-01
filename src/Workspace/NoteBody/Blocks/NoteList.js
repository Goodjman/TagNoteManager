import React,{Component} from "react";
import  './NoteList.css';
import Adder from './Adder.js'
class NoteList extends Component { 
  render(){
      return(
        <aside className='NoteList'>
         
            <div><button>Latest/All</button></div>
            <Adder/>
      </aside>
      
      )
  }
   
};

export default NoteList;