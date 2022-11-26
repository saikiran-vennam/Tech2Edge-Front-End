import Spinner from "react-bootstrap/Spinner";

function SpinnerComp() {
  return (
    <Spinner className="spinner" animation="border" size="xl" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default SpinnerComp;
