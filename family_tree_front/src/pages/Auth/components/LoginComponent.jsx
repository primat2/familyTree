import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../validationLogin";

export default function LoginComponent(props){

    // The register() method allows registering an element and applying the appropriate validation rules.
    // The handleSubmit() function will receive the form data if validation is successful.
    // The reset() function will clear all form fields or reset to initial values.
    // In this case, we are using formState to return form errors in an easier way.
    // (https://dev.to/franciscomendes10866/react-form-validation-with-react-hook-form-and-yup-4a98)
    const { register, handleSubmit, formState: { errors }, reset, getFieldState } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
      });

      const onFormSubmitHandler = (data) => {
        reset();
        props.onComplete({login: data.login, password: data.password});
      };


      console.log(errors)

    return (
        <form className='form' onSubmit={handleSubmit(onFormSubmitHandler)}>
            <div className="inputContainer">
                <label htmlFor="login" className='label'>Логин</label>
                <input type="text"
                        {...register("login")}
                        name="login"
                        className='input'
                />
                <p className='errorMessage'>{errors.login? errors.login.message : " "}</p>
            </div>
            <div className="inputContainer">
                <label htmlFor="password" className='label'>Пароль</label>
                <input type="password"
                        {...register("password")}
                        name="password"
                        className='input'
                />
                <p className='errorMessage'>{errors.password? errors.password?.message : " "}</p>
            </div>
            <a href='./help' className='helper'> Забыли логин/пароль? </a>

            <button className='buttonOrange'type='submit'>Войти</button>
        </form>
    )
}