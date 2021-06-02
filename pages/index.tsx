import { Component } from "react"

interface Home {
  counter:number
}

export default class App extends Component<Home>{

 state: Home;

  constructor(props: Home){
    super(props);
    this.state = {
      counter:0
    };
  }

  increase = (): void => {
    this.setState((prevState: Home) => {
      this.setState({ counter: prevState.counter + 1})
    })
  }

  decrease = (): void => {
    this.setState((prevState: Home) => {
      this.setState({ counter: prevState.counter - 1})
    })
  }

  render = () => {
    console.log("rerender")
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.increase}>Increase</button>
        <button onClick={this.decrease}>Decrease</button>
      </div>
    );
  }
}