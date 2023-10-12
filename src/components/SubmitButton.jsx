import { useNavigation } from "react-router-dom";

function SubmitButton({type, text}) {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <button
      className="btn btn-primary btn-block"
      type={type}
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <>
          <span className="loading loading-spinner">sending</span>
        </>
      ) : (
        text || "submit"
      )}
    </button>
  );
}

export default SubmitButton;
