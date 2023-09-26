import React from "react";


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={apiResponse:""};
  }
  callApi(){
    fetch("http://localhost:3000/testApi")
    .then(res=> res.text())
    .then(res=>this.setState({apiResponse:res}));
  }
  componentWillMount(){
    this.callApi();
  }
  render(){
    return <div>
        <p>
          {this.state.apiResponse +"your mom"}
          </p>
      </div>
  };
}






export default App;