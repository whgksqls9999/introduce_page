import infoData from "../../data/InfoData";

export default function InfoDetailContent(props) {
  let info = infoData[props.selectedTab];

  return (
    <div className="info-detail-content">
      <div>{info.id}</div>
    </div>
  );
}
