import { Component } from 'react';
import { LeaveFeedback } from './leaveFeedback';
import { Statistics } from './satisticsFeedback';

class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  onLeaveFeedback = key => {
    this.setState(prev => {
      return { [key]: prev[key] + 1 };
    });
  };

  render() {
    return (
      <>
        <LeaveFeedback leaveFeedback={this.onLeaveFeedback} />
        {this.state.good === 0 &&
        this.state.neutral === 0 &&
        this.state.bad === 0 ? (
          <h2 className="mt-3 mb-2 ms-3">There is no feedback</h2>
        ) : (
          <Statistics feedback={this.state} />
        )}
      </>
    );
  }
}

export default App;
