import { useState, useEffect } from "react";

import Statistics from "./components/Feedback/Statistics";
import Feedback from "./components/Feedback/Feedback";
import Section from "./components/Feedback/Section";
import styles from "./App.module.css";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positive, setPositive] = useState(0);

  const handleChange = (e) => {
    switch (e.target.name) {
      case "good":
        setGood((state) => state + 1);
        break;
      case "neutral":
        setNeutral((state) => state + 1);
        break;
      case "bad":
        setBad((state) => state + 1);
        break;
      default:
        return;
    }
  };

  useEffect(() => {
    setTotal(good + neutral + bad);
  }, [good, neutral, bad]);

  useEffect(() => {
    setPositive(() => {
      return Math.round((good / total) * 100);
    });
  }, [good, total]);

  return (
    <div className={styles.container}>
      <Section title="Please leave feedback">
        <Feedback
          options={["good", "neutral", "bad"]}
          onLeaveFeedback={handleChange}
        />
      </Section>

      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positive}
        />
      </Section>
    </div>
  );
}
