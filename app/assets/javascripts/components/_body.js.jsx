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
   handleSubmit(item)
    var newState = this.state.items.concat(item);
    this.setState({ items: newState })

    });

    <NewItem handleSubmit={this.handleSubmit}/>
