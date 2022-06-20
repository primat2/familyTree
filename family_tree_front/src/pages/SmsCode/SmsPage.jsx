import LogoComponent from '../../components/Logo/Logo';
import SmsCodeComponents from "./components/SmsCodeComponents";


export default function LoginPage(){

    const onLoginFormComplete = (login, password) => {
        console.log(login, password);
    }

    return (
        <div className='formPage'>
            <LogoComponent />
            <SmsCodeComponents onComplete={onLoginFormComplete}/>
        </div>
    );
}