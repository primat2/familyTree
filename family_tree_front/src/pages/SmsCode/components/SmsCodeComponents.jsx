import '../../../css/style.css'
import { useForm } from "react-hook-form";
import schema from '../../../util/validation';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


export default function RegistrationComponent(props){

    // The register() method allows registering an element and applying the appropriate validation rules.
    // The handleSubmit() function will receive the form data if validation is successful.
    // The reset() function will clear all form fields or reset to initial values.
    // In this case, we are using formState to return form errors in an easier way.
    // (https://dev.to/franciscomendes10866/react-form-validation-with-react-hook-form-and-yup-4a98)
    const { register, handleSubmit, formState: { errors }, reset, getFieldState } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });

    register("login");
    const fieldState = getFieldState("login");

    const onFormSubmitHandler = (data) => {
        console.log({ data });
        reset();
        props.onComplete(data.login, data.password);
    };


    return (
        <div className="wrapperForm">
            <h1>Регистрация</h1>
            <form className='form' onSubmit={handleSubmit(onFormSubmitHandler)}>
                <div className="inputContainer">
                    <label htmlFor="login" className='label'>Введите SMS пароль</label>
                    <input type="text"
                           {...register("login")}
                           name="login"
                           className='input'
                    />
                    <p className='errorMessage'>{errors.login? errors.login.message : " "}</p>
                </div>
                <button className='buttonOrange'type='submit'>Продолжить</button>
            </form>
        </div>
    )
}