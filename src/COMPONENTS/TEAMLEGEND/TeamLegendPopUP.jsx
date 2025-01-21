import React, { useState } from "react";

export default function TeamLegendPopUP({ poplegend }) {
  return (
    <div>
      <></>
      <div className="teamLegendPopUp">
        {poplegend.map((legend) => (
          <div className="conteinerLegend">
            <div className="leftLegendPop">
              <div className="imageholderPopUP">
                <img src={legend.image} alt="" />
              </div>
            </div>
            <div className="rightLegendPop">
              <h1>{legend.name}</h1>
              <h4>{legend.position}</h4>
              <p>{legend.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
