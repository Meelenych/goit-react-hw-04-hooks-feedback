import { Component } from "react";
import styles from "./App.module.css";
import Statistics from "./components/Feedback/Statistics";
import Feedback from "./components/Feedback/Feedback";
import Section from "./components/Feedback/Section";

class App extends Component {
	state = {
		good: 0,
		neutral: 0,
		bad: 0,
	};

	handleAddFeadback = (option) => {
		this.setState((prevState) => ({ [option]: prevState[option] + 1 }));
	};

	countTotalFeedback = () => {
		const { good, neutral, bad } = this.state;
		return good + neutral + bad;
	};

	countPositiveFeedbackPercentage = () => {
		return this.countTotalFeedback() === 0
			? 0
			: Math.round((this.state.good / this.countTotalFeedback()) * 100);
	};

	render() {
		const { good, neutral, bad } = this.state;
		return (
			<div className={styles.container}>
				<Section title="Please leave feedback">
					<Feedback
						options={["good", "neutral", "bad"]}
						onLeaveFeedback={this.handleAddFeadback}
					/>
				</Section>

				<Section title="Statistics">
					<Statistics
						good={good}
						neutral={neutral}
						bad={bad}
						total={this.countTotalFeedback()}
						positivePercentage={this.countPositiveFeedbackPercentage()}
					/>
				</Section>
			</div>
		);
	}
}

export default App;
