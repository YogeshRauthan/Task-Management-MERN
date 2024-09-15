import CommonForm from "@/components/common-form";
import { signUpFormControls } from "@/config";
import { useToast } from "@/hooks/use-toast";
import { callRegisterUserApi } from "@/services";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const formData = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const { toast } = useToast();
  const navigate = useNavigate();

  async function handleSubmit(getData) {
    const data = await callRegisterUserApi(getData);
    console.log(data);

    if (data?.success) {
      toast({
        title: "User registered successfully",
        description: "WELCOME",
      });
      navigate("/tasks/list");
    } else {
      toast({
        title: "Error",
        description: "Some error occured",
      });
    }
  }

  return (
    <div>
      <CommonForm
        formControls={signUpFormControls}
        handleSubmit={handleSubmit}
        btnText={"Sign Up"}
        form={formData}
      />
    </div>
  );
}

export default SignUp;
