import CommonButton from "@/components/common-button";
import { default as CommonCard } from "@/components/common-card";
import { scrumBoardOptions } from "@/config";

function TaskItem({
  item,
  handleDelete,
  setShowDialog,
  setCurrentEditedId,
  taskformData,
}) {
  return (
    <CommonCard
      title={item?.title}
      description={
        scrumBoardOptions.find((boardoption) => boardoption.id === item?.status)
          .label
      }
      footerContent={
        <div className="flex w-full justify-between items-center">
          <CommonButton
            buttonText={"Edit"}
            onClick={() => {
              setShowDialog(true);
              setCurrentEditedId(item?._id);
              taskformData.setValue("title", item?.title);
              taskformData.setValue("description", item?.description);
              taskformData.setValue("status", item?.status);
              taskformData.setValue("priority", item?.priority);
            }}
          />
          <CommonButton
            buttonText={"Delete"}
            onClick={() => handleDelete(item?._id)}
          />
        </div>
      }
    />
  );
}

export default TaskItem;
