import { Component } from 'react';

// Define types for props (if needed)
interface MyComponentProps {
  message: string;
}

// Define types for state (if needed)
interface MyComponentState {
  count: number;
}


class MyComponent extends Component<MyComponentProps, MyComponentState> {
  constructor(props: MyComponentProps) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount(): void {
    console.log("Mounted");
  }
  componentDidUpdate(): void {
    console.log("Updated");
  }
  shouldComponentUpdate(_nextProps: Readonly<MyComponentProps>, _nextState: Readonly<MyComponentState>): boolean {
    if(_nextState.count>10) return false;
    return true;
  }
  componentWillUnmount(): void {
    console.log("Unmounted");
  }
  // Method to handle button click and update the state
  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    const { message } = this.props;
    const { count } = this.state;

    return (
      <div>
        <h1>{message}</h1>
        <p>Current count: {count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

export default MyComponent;
