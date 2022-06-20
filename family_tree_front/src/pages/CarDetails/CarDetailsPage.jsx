import LogoComponent from '../../components/Logo/Logo';
import CarDetailsComponent from "./components/CarDetailsComponent";


export default function LoginPage(){

    const onLoginFormComplete = (login, password) => {
        console.log(login, password);
    }

    return (
        <div className='formPage'>
            <LogoComponent />
            <CarDetailsComponent onComplete={onLoginFormComplete}/>
        </div>
    );
}