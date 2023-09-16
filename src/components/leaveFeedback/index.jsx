export const LeaveFeedback = ({ leaveFeedback }) => {
  // const onLeaveFeedback = key => {
  //   this.setState(prev => {
  //     return { [key]: prev[key] + 1 };
  //   });
  // };
  return (
    <>
      <h2 className="mt-3 mb-3 ms-3">Please leave feedback</h2>
      <button
        type="button"
        className="btn btn-light ms-2"
        data-key="good"
        onClick={e => {
          leaveFeedback(e.target.getAttribute('data-key'));
        }}
      >
        Good
      </button>
      <button
        type="button"
        className="btn btn-light mx-2"
        data-key="neutral"
        onClick={e => {
          leaveFeedback(e.target.getAttribute('data-key'));
        }}
      >
        Neutral
      </button>
      <button
        type="button"
        className="btn btn-light"
        data-key="bad"
        onClick={e => {
          leaveFeedback(e.target.getAttribute('data-key'));
        }}
      >
        Bad
      </button>
    </>
  );
};
