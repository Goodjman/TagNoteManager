import React from "react";
import './Adder.css';

class Adder extends React.Component {
    constructor(props) {
         super(props);
          this.state = { items: [], text: '' };
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
        }
     
        render() {
          return (
            <div className="Adder">
              <NoteList items={this.state.items} />
              {/* <form onSubmit={this.handleSubmit}>
                <label htmlFor="new-todo">
                  New tag
                </label>
                <input
                  id="new-todo"
                  onChange={this.handleChange}
                  value={this.state.text}
                />
                <button>
                  Add Tag №{this.state.items.length + 1}
                </button>
              </form> */}
            </div>
          );
        }
     
        handleChange(e) {
          this.setState({ text: e.target.value });
        }
     
        handleSubmit(e) {
          e.preventDefault();
          if (this.state.text.length === 0) {
            return;
          }
          const newItem = {
            text: this.state.text,
            id: Date.now()
          };
          this.setState(state => ({
            items: state.items.concat(newItem),
            text: ''
          }));
        }
      }
     
      class NoteList extends React.Component {
        render() {
          return (
            <ul>
               <li>First note</li>
                {/* <li>Second!</li>
                <li>Order 66</li>
                <li>Hello there!</li> */}
              {this.props.items.map(item => ( 
                <li key={item.id}>{item.text}</li>
              ))}
            </ul>
          );
        }
      }
    export default Adder;