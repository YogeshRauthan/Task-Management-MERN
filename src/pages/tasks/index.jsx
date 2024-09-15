import CommonButton from "@/components/common-button";
import AddNewTask from "@/components/tasks/add-new-task";
import TaskItem from "@/components/tasks/task-item";
import { Skeleton } from "@/components/ui/skeleton";
import { TaskManagerContext } from "@/context";
import {
  addNewTaskApi,
  deleteTaskApi,
  getAllTaskApi,
  updateTaskApi,
} from "@/services";
import React, { Fragment, useContext, useEffect, useState } from "react";

const TaskPage = () => {
  const [showDialog, setShowDialog] = useState(false);

  const {
    tasksList,
    setTasksList,
    loading,
    setLoading,
    user,
    taskformData,
    currentEditedId,
    setCurrentEditedId,
  } = useContext(TaskManagerContext);

  async function fetchListOfTasks() {
    setLoading(true);
    const response = await getAllTaskApi(user?._id);

    if (response?.success) {
      setTasksList(response?.tasksList);
      setLoading(false);
    }
  }

  async function handleSubmit(getData) {
    const response =
      currentEditedId !== null
        ? await updateTaskApi({
            ...getData,
            userId: user?._id,
            _id: currentEditedId,
          })
        : await addNewTaskApi({
            ...getData,
            userId: user?._id,
          });

    if (response) {
      fetchListOfTasks();
      setShowDialog(false);
      taskformData.reset();
      setCurrentEditedId(null);
    }
  }

  async function handleDelete(getTaskId) {
    console.log(getTaskId);

    const response = await deleteTaskApi(getTaskId);

    if (response?.success) {
      fetchListOfTasks();
    }
  }

  useEffect(() => {
    if (user !== null) {
      fetchListOfTasks();
    }
  }, [user]);

  console.log(tasksList);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Skeleton className="w-full h-[550px] rounded-lg bg-gray-300 animate-pulse" />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Task Manager</h1>
        <CommonButton
          onClick={() => setShowDialog(true)}
          buttonText="Add New Task"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
        />
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6">
        {tasksList?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {tasksList.map((taskItem) => (
              <TaskItem
                key={taskItem._id}
                item={taskItem}
                handleDelete={handleDelete}
                setShowDialog={setShowDialog}
                setCurrentEditedId={setCurrentEditedId}
                taskformData={taskformData}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold text-gray-600">No Tasks Added</h2>
            <p className="mt-2 text-gray-500">Click the "Add New Task" button to get started!</p>
          </div>
        )}
      </div>
      <AddNewTask
        showDialog={showDialog}
        setShowDialog={setShowDialog}
        handleSubmit={handleSubmit}
        taskformData={taskformData}
        currentEditedId={currentEditedId}
        setCurrentEditedId={setCurrentEditedId}
      />
    </div>
  );
};

export default TaskPage;