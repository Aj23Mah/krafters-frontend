import Ongoingcource from "./Ongoingcourse";
import UpCommingCource from "./UpCommingCourse";
import CommonSection from "../../common/CommonSection";
import Relatedblog from "./Relatedblog";

const Development = () => {
  return (
    <div>
      <CommonSection title="Development" />
      <Ongoingcource />
      <UpCommingCource />
      <Relatedblog />
    </div>
  );
};

export default Development;
