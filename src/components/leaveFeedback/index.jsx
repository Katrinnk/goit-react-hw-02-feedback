import { nanoid } from 'nanoid';

export const LeaveFeedback = ({ leaveFeedback, options }) => {
  return (
    <>
      {options.map(option => {
        let id = nanoid();
        return (
          <button
            type="button"
            key={id}
            className="btn btn-light ms-2"
            onClick={() => leaveFeedback(option)}
          >
            {option}
          </button>
        );
      })}
    </>
  );
};
