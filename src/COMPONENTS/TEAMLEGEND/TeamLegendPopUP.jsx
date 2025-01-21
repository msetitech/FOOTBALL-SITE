import React, { useState } from "react";

export default function TeamLegendPopUP({ poplegend }) {
  return (
    <div>
      <></>
      <div className="teamLegendPopUp">
        {poplegend.map((legend) => (
          <div className="conteinerLegend">
            <div className="leftLegendPop">{legend.id}</div>
            <div className="rightLegendPop">Right</div>
          </div>
        ))}
      </div>
    </div>
  );
}
