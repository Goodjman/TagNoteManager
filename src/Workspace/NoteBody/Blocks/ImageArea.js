import React,{Component} from "react";
import  './ImageArea.css';


// const store = createStore();

class ImageArea extends Component { 
  render(){
      return(
        <div className='ImageArea'>
          
      </div>
      )
  }
   
};
export default ImageArea;
let md_module = (function() {

  let btn = document.querySelectorAll(".md");
  let md_btn = Array.prototype.slice.call(btn);
 
   md_btn.forEach(eachCB)
 
  function eachCB (item, index, array){
 
   function md(e) {
      let offsetX = e.clientX - item.offsetLeft;
      let offsetY = e.clientY - item.offsetTop;
      item.style.setProperty("--x", offsetX);
      item.style.setProperty("--y", offsetY);
      item.innerHTML += '<div class="is-clicked"></div>';
    }
 
 function rm() {
   let state = item.querySelectorAll(".is-clicked");
   console.log(state)
   for (let i = 0; i < state.length; i++) {
     if (state[i].className === "is-clicked") {
       state[i].remove();
     }
   }
 }
 
 item.addEventListener("click", md);
 item.addEventListener("animationend", rm);
 }
 
  })();
  md_module='Поставьте семёрку пожалуйста';
  console.log(md_module);