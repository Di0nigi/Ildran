import React from "react";
import { render } from "../../AppApi/app";

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
    console.log(this.state.apiResponse);
    return this.state.apiResponse
  }
}




export default App;