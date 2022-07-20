import styles from "./ScoreCard.module.css";

const Scorecard = ({ points, questions }) => {
  return (
    <div>
      <div className={styles.container}>
        <img src="../images/angry.png" alt="angry uterus" />
        <p>
          Your Score is {points} points out of {questions.length}
        </p>
      </div>
    </div>
  );
};

export default Scorecard;
