import React from 'react';
import './Modal.css';
import BackDrop from './BackDrop.js';

const modal = props => {
    
    return (
        <div
        className='Modal'
        style={{
            transform:props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity : props.show ? 1 : 0
        }}
    >
        <BackDrop show={props.show} clicked={props.modalClosed} />
        {props.children}

        <input type='text' value='First note!'/>
        <button>Ok</button>
        <button>Cancel</button>
        
    </div>
    );
};


export default modal;



