import React from "react";
import PropTypes from "prop-types";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
	if (total === 0) {
		return (
			<div>
				<p>No feedback given</p>
			</div>
		);
	} else {
		return (
			<div>
				<p>
					Good: <span>{good}</span>
				</p>
				<p>
					Neutral: <span>{neutral}</span>
				</p>
				<p>
					Bad: <span>{bad}</span>
				</p>
				<p>
					Total: <span>{total}</span>
				</p>
				<p>
					Positive Feedback: <span>{positivePercentage}</span>%
				</p>
			</div>
		);
	}
};

Statistics.propTypes = {
	good: PropTypes.number.isRequired,
	neutral: PropTypes.number.isRequired,
	bad: PropTypes.number.isRequired,
	total: PropTypes.number.isRequired,
	positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
