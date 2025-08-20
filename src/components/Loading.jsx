import { ScaleLoader } from "react-spinners";

function Loading() {
  return (
    <div>
      <br />
      <ScaleLoader color="white" height={"50px"} barCount={20} margin={4} />{" "}
    </div>
  );
}
export default Loading;
