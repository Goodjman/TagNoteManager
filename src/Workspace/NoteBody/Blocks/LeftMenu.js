import React,{Component} from "react";
import  './LeftMenu.css';
class LeftMenu extends Component { 
  render(){
      return(
        <nav className='LeftMenu'>
            
            <div><button className="delete">Delete Tag</button></div>
            <div><button className="rename">Rename Tag</button></div>

      </nav>
      )
  }
   
};

export default LeftMenu;