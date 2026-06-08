import React from 'react';

interface Props {}
export class App extends React.Component<Props> {
  state = {
    pressedKey: '',
  };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.keyEventListener);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keyEventListener);
  }

  render(): React.ReactNode {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.pressedKey !== ''
            ? `The last pressed pressedKey is ${this.state.pressedKey}`
            : `Nothing was pressed yet`}
        </p>
      </div>
    );
  }
}
