import React,{Component} from "react";
import  './NoteList.css';
class NoteList extends Component { 
  render(){
      return(
        <aside className='NoteList'>
            List of Notes
            <div><button>Latest/All</button></div>
      </aside>
      )
  }
   
};

export default NoteList;