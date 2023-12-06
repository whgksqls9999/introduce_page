import InfoProfile from "../component/info/InfoProfile";
import InfoDetailTab from "../component/info/InfoDetailTab";

function InfoView() {
  return (
    <div className="view">
      <div className="border">
        <div className="title">INFO</div>
        <InfoProfile />
        <InfoDetailTab />
      </div>
    </div>
  );
}

export default InfoView;
