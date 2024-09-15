import CommonForm from "../common-form";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";

function CommonDialog({
  showDialog,
  title,
  formControls,
  handleSubmit,
  btnText,
  formData,
  onOpenChange,
}) {
  return (
    <Dialog open={showDialog} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-screen h-[450px] overflow-auto">
        <DialogTitle>{title}</DialogTitle>
        <div>
          <CommonForm
            formControls={formControls}
            handleSubmit={handleSubmit}
            btnText={btnText}
            form={formData}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default CommonDialog;
