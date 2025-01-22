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
              <div className="statusOnTeam">
                <div className="statusSingle">
                  <h2>{legend.match}</h2>
                  <h4>Matches</h4>
                </div>
                <div className="statusSingle">
                  <h2>{legend.goal}</h2>
                  <h4>Goal</h4>
                </div>

                <div className="statusSingle">
                  <h2>{legend.yelloCard}</h2>
                  <h4>Yellow Card</h4>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
