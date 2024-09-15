import CommonCard from "@/components/common-card";
import { scrumBoardOptions } from "@/config";
import { TaskManagerContext } from "@/context";
import { getAllTaskApi, updateTaskApi } from "@/services";
import React, { Fragment, useContext, useEffect } from "react";

const ScrumBoardPage = () => {
  const { user, setLoading, tasksList, setTasksList } =
    useContext(TaskManagerContext);

  async function fetchListOfTasks() {
    setLoading(true);
    const response = await getAllTaskApi(user?._id);

    if (response?.success) {
      setTasksList(response?.tasksList);
      setLoading(false);
    }
  }

  async function updateTaskByStatus(getTask) {
    await updateTaskApi(getTask);
    await fetchListOfTasks();
  }

  function onDragStart(event, getTaskId) {
    event.dataTransfer.setData("id", getTaskId);
  }

  function onDrop(event, getCurrentStatus) {
    const getDraggedTaskId = event.dataTransfer.getData("id");

    let findCurrentTask = tasksList.find(
      (item) => item._id.toString() === getDraggedTaskId
    );

    findCurrentTask = {
      ...findCurrentTask,
      status: getCurrentStatus,
    };

    updateTaskByStatus(findCurrentTask);
  }

  function renderTaskByTakStatus() {
    const taskStatuses = {
      todo: [],
      inProgress: [],
      blocked: [],
      review: [],
      done: [],
    };

    tasksList.forEach((singleTask) => {
      taskStatuses[singleTask.status].push(
        <div
          className="mb-2"
          draggable={singleTask?.status !== "done" ? true : false}
          onDragStart={
            singleTask?.status !== "done"
              ? (event) => onDragStart(event, singleTask._id)
              : null
          }
        >
          <CommonCard
            title={singleTask?.title}
            description={
              scrumBoardOptions.find(
                (boardoption) => boardoption.id === singleTask?.status
              ).label
            }
            extraTextStyles={
              singleTask?.status === "done" ? "line-through" : ""
            }
          />
        </div>
      );
    });
    return taskStatuses;
  }

  useEffect(() => {
    if (user !== null) {
      fetchListOfTasks();
    }
  }, [user]);

  return (
    <Fragment>
      <div className="grid grid-cols-5 gap-2 h-full">
        {scrumBoardOptions.map((item) => (
          <div
            key={item?.id}
            className="border border-[#333333] rounded overflow-auto"
            onDrop={(event) => onDrop(event, item.id)}
            onDragOver={(event) => event.preventDefault()}
          >
            <div className="px-1 py-3 text-center bg-black border-none mb-3">
              <h3 className="text-2xl font-bold text-white">{item?.label}</h3>
            </div>
            <div className="p-3">{renderTaskByTakStatus()[item.id]}</div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default ScrumBoardPage;
