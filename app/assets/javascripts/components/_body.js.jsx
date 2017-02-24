var Body = React.createClass({
 render(){
  return (
   <div>
   <NewItem />
    <AllItems />
    </div>
    )
     }
     });
var AllItems = React.createClass({
 getInitialState() {
  return { items: [] }

},

componentDidMount() {
  $.getJSON('/api/v1/items.json', (response) => { this.setState({ items: response }) });
}
});
 <AllItems items={this.state.items} />
var items= this.props.items.map((item) => {
   handleSubmit(item) {
        console.log(item);
      }
    },
    <NewItem handleSubmit={this.handleSubmit}/>
