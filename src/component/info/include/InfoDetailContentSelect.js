import infos from "../../../data/InfoData";

function InfoDetailContentSelect(props) {
  let info = infos[props.info];
  let output = "";
  switch (props.info) {
    case 0:
      return (
        <div className="info-detail-content-select">
          <ul className="info-detail-content-skills">
            <li>
              <div>● Language</div>
              <div>{info.lang.join(" ")}</div>
            </li>
            <li>
              <div>● Framework/Library</div>
              <div>{info.framwork.join(" ")}</div>
            </li>
            <li>
              <div>● Tool</div>
              <div>{info.tool.join(" ")}</div>
            </li>
          </ul>
        </div>
      );
    case 1:
      return (
        <div className="info-detail-content-select">
          <ul className="info-detail-content-edu">
            {info.edu.map((element, idx) => {
              return (
                <li key={idx}>
                  <div>● {element}</div>
                </li>
              );
            })}
          </ul>
        </div>
      );
    case 2:
      return (
        <div className="info-detail-content-select">
          <div className="info-detail-content-select">인트로듀스</div>
        </div>
      );
  }
}

export default InfoDetailContentSelect;
