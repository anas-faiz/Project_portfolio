export const formSchema = [
  {
    name: "fullName",
    label: "Full Name",
    type: "text",
    required: true,
    minLength: 3
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    required: true,
    minLength: 6
  },
  {
    name: "confirmPassword",
    label: "Confirm Password",
    type: "password",
    required: true,
    matchField: "password"
  },
  {
    name: "age",
    label: "Age",
    type: "number",
    required: true,
    min: 18
  },{
    name: "Degree",
    label: "Degree",
    type: "select",
    required: true,
    options: ["Delhi", "Mumbai", "Bangalore"]
  }
];