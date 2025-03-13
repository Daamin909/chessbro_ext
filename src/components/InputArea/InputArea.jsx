import React, { useState } from "react";
import "./InputArea.css";
import { validatePGN } from "../../scripts/fetch";
import { reviewPGN } from "../../scripts/gameReview";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
const InputArea = () => {
  const [inputPGN, setInputPGN] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (await validatePGN(inputPGN, displayError)) {
      const reviewed_game = await reviewPGN(inputPGN, displayError);
      console.log(reviewed_game);
    } else {
      displayError("PGN is Invalid. Try again.");
    }
    setInputPGN("");
  };
  const handleClick = (e) => {
    console.log(e);
  };
  const displayError = (text) => {
    setErrorMessage(text);
  };
  return (
    <>
      <div id="input-area">
        <div id="game-input-container">
          <form id="game-input-form" onSubmit={handleSubmit}>
            <div id="game-input-box">
              <textarea
                type="text"
                id="game-input"
                placeholder="Enter PGN"
                value={inputPGN}
                required
                onChange={(e) => {
                  setInputPGN(e.target.value);
                }}
              ></textarea>
            </div>
            <div id="game-input-button-container">
              <button type="submit" className="game-input-button">
                <p id="img">🔍</p> Analyse
              </button>
              <button
                type="button"
                id="fetch-btn"
                className="game-input-button"
                onClick={(e) => handleClick(e)}
              >
                Fetch PGN from Page
              </button>
            </div>
          </form>
        </div>
      </div>
      {errorMessage && (
        <ErrorMessage
          message={errorMessage}
          duration={2000}
          onClose={() => setErrorMessage(null)}
        />
      )}
    </>
  );
};

export default InputArea;
