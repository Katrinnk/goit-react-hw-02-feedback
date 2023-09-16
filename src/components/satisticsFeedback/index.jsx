import { v4 as uuidv4 } from 'uuid';

export const Statistics = ({ feedback }) => {
  const { good, neutral, bad } = feedback;
  const totalFeedback = () => {
    return good + neutral + bad;
  };

  const positiveFeedback = () => {
    const total = totalFeedback();
    return good / total;
  };

  return (
    <>
      <h2 className="mt-3 mb-2 ms-3">Statistics</h2>
      <ul className="list-group ms-3 me-3">
        {Object.entries(feedback).map(([key, value]) => (
          <li key={uuidv4()} className="list-group-item">
            {key}: {value}
          </li>
        ))}
        <li className="list-group-item">Total: {totalFeedback()}</li>
        <li className="list-group-item">
          Positive Feedback: {positiveFeedback()}%
        </li>
      </ul>
    </>
  );
};
