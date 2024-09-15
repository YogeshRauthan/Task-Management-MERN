import CommonDialog from "@/components/common-dialog";
import { addNewTaskFormControls } from "@/config";

function AddNewTask({
  showDialog,
  setShowDialog,
  handleSubmit,
  taskformData,
  currentEditedId,
  setCurrentEditedId
}) {
  return (
    <CommonDialog
      formControls={addNewTaskFormControls}
      showDialog={showDialog}
      title={currentEditedId !== null ? "Edit Task" : "Post New Task"}
      handleSubmit={handleSubmit}
      btnText={"Add"}
      formData={taskformData}
      onOpenChange={() => {
        setShowDialog(false);
        currentEditedId ? taskformData.reset() : null;
        setCurrentEditedId(null)
      }}
    />
  );
}

export default AddNewTask;
