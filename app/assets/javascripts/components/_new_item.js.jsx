var NewItem= React.createClass({
  render() {
   return (
    <div>
    <h1>new item</h1>
    </div>
     )
      }
    });
var NewItem= React.createClass({
  render() {
    return (
      <div>
       <input ref='name' placeholder='Enter the name of the item' />
        <input ref='description' placeholder='Enter a description' />
       <button onClick={this.handleClick}>Submit</button>
        </div>
         )
          }
           });
// app/assets/javascripts/components/_new_item.js.jsx
// var NewItem = …
handleClick() {
 var name = this.refs.name.value;
  var description = this.refs.description.value;
   console.log('The name value is ' + name + 'the description value is ' + description);
    },
     //render()..
