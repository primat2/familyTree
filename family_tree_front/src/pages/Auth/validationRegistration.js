import * as yup from "yup";

const schema = yup.object().shape({
  login: yup.string()
              .test("len", "Не менее 6 символов", val => val.length > 6)
              .required(),
  password: yup.string()
              .test("len", "Не менее 6 символов", val => val.length > 6)
              .required(),
  password2: yup.string()
              .oneOf([yup.ref('password'), null], 'Пароли не совпадают')
              .required(),
  phone: yup.string()
              .test("digits", "Только цифры разрешены", val => val.match(/^[0-9]+$/) != null)              
              .test("len", "Телефон обычно состоит из 11 цифр", val => val.length === 11)
              .required(),
});

export default schema;
