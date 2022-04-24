import React from "react";
import { findDOMNode } from "react-dom";

import styles from "./Screen.module.css";

function setScrollPosition() {
  const elementNode = findDOMNode(this.refs.progressMarker);
  let containerNode = findDOMNode(this.refs.screenRef);

  var topPos = elementNode.offsetTop;
  containerNode.scrollTop = topPos - 140;
}

const Screen = ({
  screenFade,
  inputSelected,
  completedText,
  inputText,
  remainingText,
}) => (
  <div className="screen">
    <div
      className={
        screenFade === true
          ? "screen__inner__wrapperFadeIn"
          : "screen__inner__wrapper"
      }
      ref="screenRef"
    >
      <div
        className={
          inputSelected === "num"
            ? "screen__inner__num"
            : inputSelected === "sym"
            ? "screen__inner__sym"
            : ""
        }
      >
        <span className="completedText">{completedText}</span>
        <span
          className={
            inputSelected === "sym"
              ? "progressMarker progressMarkerSym"
              : inputSelected === "num"
              ? "progressMarker progressMarkerNum"
              : "progressMarker"
          }
          ref="progRef"
        ></span>
        <span ref="progressMarker" className="remainingText">
          {remainingText}
        </span>
      </div>
      <div className="progressMeter">
        {((completedText.length / inputText.length) * 100).toFixed(0) + "%"}
      </div>
    </div>
  </div>
);

export default Screen;
