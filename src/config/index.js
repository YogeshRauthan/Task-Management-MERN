export const signUpFormControls = [
  {
    id: "name",
    label: "Name",
    placeholder: "Enter your Name",
    componentType: "input",
    type: "text",
  },
  {
    id: "email",
    label: "Email",
    placeholder: "Enter your Email",
    componentType: "input",
    type: "email",
  },
  {
    id: "password",
    label: "Password",
    placeholder: "Enter your Password",
    componentType: "input",
    type: "password",
  },
];

export const signInFormControls = [
  {
    id: "email",
    label: "Email",
    placeholder: "Enter your Email",
    componentType: "input",
    type: "email",
  },
  {
    id: "password",
    label: "Password",
    placeholder: "Enter your Password",
    componentType: "input",
    type: "password",
  },
];

export const scrumBoardOptions = [
  {
    id: "todo",
    label: "To Do",
  },
  {
    id: "inProgress",
    label: "In Progress",
  },
  {
    id: "blocked",
    label: "Blocked",
  },
  {
    id: "review",
    label: "Review",
  },
  {
    id: "done",
    label: "Done",
  },
];

export const addNewTaskFormControls = [
  {
    id: "title",
    type: "text",
    placeholder: "Enter Title",
    label: "Title",
    componentType: "input",
  },
  {
    id: "description",
    type: "text",
    placeholder: "Enter Description",
    label: "Description",
    componentType: "input",
  },
  {
    id: "status",
    placeholder: "Enter Status",
    label: "Status",
    componentType: "select",
    options: scrumBoardOptions,
  },
  {
    id: "priority",
    placeholder: "Enter Priority",
    label: "Priority",
    componentType: "input",
    componentType: "select",
    options: [
      {
        id: "low",
        label: "Low",
      },
      {
        id: "medium",
        label: "Medium",
      },
      {
        id: "High",
        label: "High",
      },
    ],
  },
];
