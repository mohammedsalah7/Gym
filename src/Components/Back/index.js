import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import * as B from "./style.js";
function Back() {
  const history = useHistory();
  return (
    <B.Container>
      <B.BtnBack onClick={() => history.goBack()}>
        <B.Icon icon={faChevronLeft} />
        <B.WordBack>Back</B.WordBack>
      </B.BtnBack>
    </B.Container>
  );
}
export default Back;
