import { Component } from "react"
import { connect } from "react-redux";
import { decrementCounter, incrementCounter } from "../redux/actions/counter_actions";

interface Home {
  counter:number
}

type CounterReducer = {
  value:number
}

class App extends Component<Home>{

 state: Home;

 static getInitialProps({store}) {}

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
 
    return (
      <div>
        <h1>{this.props.counter}</h1>
        <button onClick={this.props.incrementCounter}>Increase</button>
        <button onClick={this.props.decrementCounter}>Decrease</button>
      </div>
    );
  }
}

const mapStateToProps = (state: { counter: { value: any; }; }) => ({
  counter:state.counter.value
})

const mapDispatchToProps = {
  incrementCounter,
  decrementCounter
}

export default connect(mapStateToProps, mapDispatchToProps)(App)