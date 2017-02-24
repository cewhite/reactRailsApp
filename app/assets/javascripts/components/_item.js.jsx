var Item = React.createClass({
 getInitialState() {
  return {editable: false}
 },
  handleEdit() {
   if(this.state.editable) {
    var name = this.refs.name.value;
    var id = this.props.item.id;
    var description = this.refs.description.value;
    var item = {id: id , name: name , description: description};
    this.props.handleUpdate(item);
  }
  this.setState({ editable: !this.state.editable })
}
}
);
     //  return (
     //    <div>
     //     {name}
     //     {description}
     //      <button onClick={this.props.handleDelete} >Delete</button>
     //     <button onClick={this.handleEdit}> {this.state.editable ? 'Submit' : 'Edit' } </button>
     //     </div>
     // )
     //  }
     //  )};
