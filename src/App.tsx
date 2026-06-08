import React from 'react';

interface Props {}
export class App extends React.Component<Props> {
  state = {
    key: '',
  };

  keyEventListener = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
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
          {this.state.key !== ''
            ? `The last pressed key is [${this.state.key}]`
            : `Nothing was pressed yet`}
        </p>
      </div>
    );
  }
}
