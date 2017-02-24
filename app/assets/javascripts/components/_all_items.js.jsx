var AllItems = React.createClass({
  componentDidMount() {
    console.log('Component mounted');
  }, render() {
   return (
    <div>
    <h1>All items component</h1>
     </div>
      )
       }
        });


// render() {
  var items= this.state.items.map((item) => {
    return (
     <div key={item.id}>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
       </div>
       )

  return(
        <div>
         {items}
         </div>
         )
          });




