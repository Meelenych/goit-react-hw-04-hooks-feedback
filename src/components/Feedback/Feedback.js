import React from "react";
import PropTypes from "prop-types";
import s from "./Feedback.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={s.form}>
      {options.map((option) => (
        <button
          className={s.button}
          type="button"
          key={option}
          name={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};

export default FeedbackOptions;
