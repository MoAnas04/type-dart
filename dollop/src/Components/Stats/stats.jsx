import React from "react";
// import { FiRepeat } from "react-icons/fi";
// import { FaStepForward } from "react-icons/fa";
import styles from "./stats.module.css";

const Stats = ({
  showStats,
  accuracy,
  incorrectArr,
  wpm,
  currentCount,
  inputSelected,
  incorrectWordsArr,
  displayText,
}) => {
  return (
    <div className={"stats " + (showStats === true ? "statsCompleted" : "")}>
      <div
        className={
          "resultsTitleHidden " + (showStats === true ? "resultsTitleShow" : "")
        }
      >
        Results
      </div>

      <div className={styles.statbox}>
        <p className={styles.statbox__title}>Accuracy</p>
        <p className={styles.statbox__value}>{accuracy}</p>
        <p className={styles.statbox__unit}>%</p>
      </div>
      <div className={styles.statbox}>
        <p className="statbox__title">Typos</p>
        <p className="statbox__value">{incorrectArr.length}</p>
      </div>
      <div className="statbox">
        <p className="statbox__title">Speed</p>
        <p className="statbox__value">{wpm}</p>
        <p className="statbox__unit">wpm</p>
      </div>
      <div className="statbox">
        <p className="statbox__title">Time</p>
        <p className="statbox__value">{currentCount}</p>
        <p className="statbox__unit">sec</p>
      </div>

      <div
        className={
          "resultsOptionsHidden " +
          (showStats === true ? "resultsOptionsShow" : "")
        }
      >
        <div
          className="results__options__box"
          onClick={() => displayText("redoText", true)}
        >
          {/* <FiRepeat /> */}
        </div>
        <div
          className={
            inputSelected !== null
              ? "results__options__box"
              : "results__options__boxUnavailable"
          }
          onClick={() => {
            if (inputSelected !== null) {
              displayText("nextText", true);
            }
          }}
        >
          {/* <FaStepForward /> */}
        </div>
        <div
          className={
            incorrectArr.length === 0 && showStats === true
              ? "results__options__boxUnavailable"
              : "results__options__box"
          }
          onClick={() => {
            if (incorrectArr.length !== 0) {
              displayText("redoLetters", true);
            }
          }}
        >
          A
        </div>
        <div
          className={
            incorrectArr.length > 0 &&
            showStats === true &&
            (inputSelected === "text" ||
              inputSelected === "gen" ||
              inputSelected === null)
              ? "results__options__box"
              : "results__options__boxUnavailable"
          }
          onClick={() => {
            if (
              incorrectWordsArr.length !== 0 &&
              (inputSelected === "text" ||
                inputSelected === "gen" ||
                inputSelected === null)
            ) {
              displayText("redoWords", true);
            }
          }}
        >
          ABC
        </div>
      </div>
    </div>
  );
};

export default Stats;
