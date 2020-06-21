import React,{Component} from "react";
import  './LeftMenu.css';
class LeftMenu extends Component { 
  render(){
      return(
        <nav className='LeftMenu'>
            Interact with tags
            <div><button>Delete Tag</button></div>
            <div><button>Rename Tag</button></div>

      </nav>
      )
  }
   
};

export default LeftMenu;