import "./BasicComponents.css";

function ErrorMessage(props) {
  return (
    <>
      <span className="error-message">{props.message}</span>
    </>
  );
}

export default ErrorMessage;
