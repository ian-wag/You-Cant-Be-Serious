import React from "react";
import { useState } from "react";
import { ScoreCard, Button } from "./";
import styles from "./GameCard.module.css";

import { questions } from "../questions";

const GameCard = () => {
  const [laws, setLaws] = useState(0);
  const [points, setPoints] = useState(0);
  const [scoreCard, setScoreCard] = useState(false);
  const goToNextQuestion = (ans) => {
    if (ans === true) {
      setPoints(points + 1);
    }
    const nextQuestion = laws + 1;
    if (nextQuestion < questions.length) {
      setLaws(nextQuestion);
    } else {
      setScoreCard(true);
      // instead of starting over, we will add a new component with the score and a fallopian tube
    }
  };

  return (
    <div>
      {scoreCard ? (
        <ScoreCard points={points} questions={questions} />
      ) : (
        <div className={styles.container}>
          <h2 className={styles.gameQuestionNumber}>
            Question {laws + 1}{" "}
            <span style={{ color: "grey", fontWeight: "400" }}>
              of {questions.length}
            </span>
          </h2>
          <div className={styles.questionContainer}>
            <p className={styles.question}>{questions[laws].question}</p>
          </div>
          <div>
            <div className={styles.btnContainer}>
              <div className={styles.btn}>
                <Button btnText="True" onClick={() => goToNextQuestion(true)} />
              </div>
              <div>
                <Button btnText="False" onClick={() => goToNextQuestion()} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameCard;
