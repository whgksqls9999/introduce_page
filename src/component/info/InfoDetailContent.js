import infoData from "../../data/InfoData";
import InfoDetailContentSelect from "./include/InfoDetailContentSelect";

export default function InfoDetailContent(props) {
  let info = infoData[props.selectedTab];

  return (
    <div className="info-detail-content">
      <div>
        <InfoDetailContentSelect info={props.selectedTab} />
      </div>
    </div>
  );
}
