import LogoComponent from '../../components/Logo/Logo';
import ContactDetailsComponent from "./components/ContactDetailsComponent";


export default function LoginPage(){

    const onLoginFormComplete = (login, password) => {
        console.log(login, password);
    }

    return (
        <div className='formPage'>
            <LogoComponent />
            <ContactDetailsComponent onComplete={onLoginFormComplete}/>
        </div>
    );
}