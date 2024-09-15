import CommonForm from "@/components/common-form";
import { signInFormControls } from "@/config";
import { useToast } from "@/hooks/use-toast";
import { callLoginUserApi } from "@/services";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const formData = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const navigate = useNavigate();
  const { toast } = useToast();

  async function handleSubmit(getData) {
    const data = await callLoginUserApi(getData);
    console.log(data, "data");

    if (data?.success) {
      toast({
        title: "User logged in",
        description: "WELCOME BACK",
      });
      navigate("/tasks/list");
    }
  }

  return (
    <div>
      <CommonForm
        formControls={signInFormControls}
        handleSubmit={handleSubmit}
        btnText={"Sign In"}
        form={formData}
      />
    </div>
  );
}

export default SignIn;
