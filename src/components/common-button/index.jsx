import { Button } from "../ui/button";

function CommonButton({ onClick, buttonText, type, disabled }) {
  return (
    <Button
      onClick={onClick || null}
      disabled={disabled || false}
      type={type || "submit"}
      className="flex h-11 justify-center items-center bg-black px-4 font-bold text-white border-none rounded hover:bg-black hover:text-white my-2"
    >
      {buttonText || "Submit"}
    </Button>
  );
}

export default CommonButton;
