import axios from "axios";

export const callRegisterUserApi = async (formData) => {
  const response = await axios.post(
    "http://localhost:5000/api/user/register",
    formData,
    { withCredentials: true }
  );

  return response?.data;
};

export const callLoginUserApi = async (formData) => {
  const response = await axios.post(
    "http://localhost:5000/api/user/login",
    formData,
    { withCredentials: true }
  );

  return response?.data;
};

export const callUserAuthApi = async () => {
  const response = await axios.post(
    "http://localhost:5000/api/user/auth",
    {},
    { withCredentials: true }
  );

  return response?.data;
};

export const callLogoutApi = async (req, res) => {
  const response = await axios.post(
    "http://localhost:5000/api/user/logout",
    {},
    { withCredentials: true }
  );

  return response?.data;
};

export const addNewTaskApi = async (formdata) => {
  const response = await axios.post(
    "http://localhost:5000/api/task/add-new-task",
    formdata
  );

  return response?.data;
};

export const getAllTaskApi = async (getCurrentUserid) => {
  const response = await axios.get(
    `http://localhost:5000/api/task/get-all-tasks-by-userid/${getCurrentUserid}`
  );

  return response?.data;
};

export const updateTaskApi = async (formdata) => {
  const response = await axios.put(
    `http://localhost:5000/api/task/update-task`,
    formdata
  );

  return response?.data;
};

export const deleteTaskApi = async (getCurrentTaskid) => {
  const response = await axios.delete(
    `http://localhost:5000/api/task/delete-task/${getCurrentTaskid}`
  );

  return response?.data;
};
