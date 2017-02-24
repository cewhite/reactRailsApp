var AllItems = React.createClass({
  handleDelete() {
    this.props.handleDelete();
     },
     handleEdit() {

},

onUpdate(item) {
    this.props.onUpdate(item);
},

      render() {
        var items= this.props.items.map((item) => {
         return (
          <div key={item.id}>
           <Item item={item}
                       handleDelete={this.handleDelete.bind(this, item.id)}
                       handleEdit={this.handleEdit}/>
            </div>
              )
               });

                return(
                 <div>
                  {items}
                   </div>
                    )
                     }
                      });




