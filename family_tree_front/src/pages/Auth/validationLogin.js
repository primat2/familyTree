import * as yup from "yup";

const schema = yup.object().shape({
  login: yup.string()
              .test("len", "Не менее 6 символов", val => val.length > 6)
              .required(),
  password: yup.string()
              .test("len", "Не менее 6 символов", val => val.length > 6)
              .required()
});

export default schema;
