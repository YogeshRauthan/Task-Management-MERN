import axios from "axios";

export const callRegisterUserApi = async (formData) => {
  const response = await axios.post(
    "http://task-management-mern-backend.vercel.app/api/user/register",
    formData,
    { withCredentials: true }
  );

  return response?.data;
};

export const callLoginUserApi = async (formData) => {
  const response = await axios.post(
    "http://task-management-mern-backend.vercel.app/api/user/login",
    formData,
    { withCredentials: true }
  );

  return response?.data;
};

export const callUserAuthApi = async () => {
  const response = await axios.post(
    "http://task-management-mern-backend.vercel.app/api/user/auth",
    {},
    { withCredentials: true }
  );

  return response?.data;
};

export const callLogoutApi = async (req, res) => {
  const response = await axios.post(
    "http://task-management-mern-backend.vercel.app/api/user/logout",
    {},
    { withCredentials: true }
  );

  return response?.data;
};

export const addNewTaskApi = async (formdata) => {
  const response = await axios.post(
    "http://task-management-mern-backend.vercel.app/api/task/add-new-task",
    formdata
  );

  return response?.data;
};

export const getAllTaskApi = async (getCurrentUserid) => {
  const response = await axios.get(
    `http://task-management-mern-backend.vercel.app/api/task/get-all-tasks-by-userid/${getCurrentUserid}`
  );

  return response?.data;
};

export const updateTaskApi = async (formdata) => {
  const response = await axios.put(
    `http://task-management-mern-backend.vercel.app/api/task/update-task`,
    formdata
  );

  return response?.data;
};

export const deleteTaskApi = async (getCurrentTaskid) => {
  const response = await axios.delete(
    `http://task-management-mern-backend.vercel.app/api/task/delete-task/${getCurrentTaskid}`
  );

  return response?.data;
};
