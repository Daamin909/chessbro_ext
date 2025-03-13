import React from "react";
import ReportCard from "../ReportCard/ReportCard";
import Accuracy from "../Accuracy/Accuracy";
import "./GameReview.css";
const GameReview = ({ reviewedGame }) => {
  return (
    <div className="game_review">
      <Accuracy PGN={reviewedGame} />
      <ReportCard move_numbers={reviewedGame.number_of_move_types} />
    </div>
  );
};

export default GameReview;
