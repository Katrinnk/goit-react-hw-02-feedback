import { Component } from 'react';
import { LeaveFeedback } from './leaveFeedback';
import { Notification } from './Notification';
import { Statistics } from './satisticsFeedback';
import { Section } from './Section';

class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  onLeaveFeedback = key => {
    this.setState(prev => {
      return { [key]: prev[key] + 1 };
    });
  };
  getTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  getPositiveFeedback = () => {
    const { good } = this.state;
    const total = this.getTotalFeedback();
    return good / total;
  };

  render() {
    const totalFeedback = this.getTotalFeedback();
    const positiveFeedback = this.getPositiveFeedback();
    return (
      <>
        <Section title="Please leave feedback">
          <LeaveFeedback
            leaveFeedback={this.onLeaveFeedback}
            options={Object.keys(this.state)}
          />
        </Section>
        {!totalFeedback ? (
          <Notification message="There is no feedback" />
        ) : (
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={totalFeedback}
              positivePercentage={positiveFeedback}
            />
          </Section>
        )}
      </>
    );
  }
}

export default App;
