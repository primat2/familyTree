import { useState } from "react";
import Logo from "../../components/Logo/Logo";
import "./Auth.style.css"
import LoginComponent from "./components/LoginComponent";
import RegistrationComponent from "./components/RegistrationComponent";


export default function() {

    const classButtonSelected = "authButtonSelection"
    const classButtonNotSelected = "authButtonNoSelection"

    let [loginButtonClass, setLoginClass ] = useState(classButtonSelected)
    let [regiterButtonClass, setRegisterClass] = useState(classButtonNotSelected)
    let [currentOption, setCurrentOption] = useState("login")

    const changeSelectedOption = (newOption) => {
        setCurrentOption(newOption);
        switch (newOption){
            case "login":
                setLoginClass(classButtonSelected);
                setRegisterClass(classButtonNotSelected);
                break;
            case "registration":
                console.log(1)
                setLoginClass(classButtonNotSelected);
                setRegisterClass(classButtonSelected);
                break;
        }
    }


    const onLoginFormComplete = (formData) => {
        console.log(`Data to login: `, formData)
    }

    const onRegisterFormComplete = (formData) => {
        console.log(`Data to register: `, formData)
    }


    return (
        <div>            
            <Logo />
            <div className="formPage">
                <div className="form">
                    <div className="loginComponentBlock">
                        <div className="authSelectButtons">
                            <button 
                                className={"authSelectLeft authSelect " + loginButtonClass}
                                onClick={() => changeSelectedOption("login")}>
                                    Войти
                            </button>
                            
                            <button
                                className={"authSelectRight authSelect " + regiterButtonClass}
                                onClick={() => changeSelectedOption("registration")}>
                                    Регистрация
                            </button>
                        </div>

                        {currentOption == "login" && <LoginComponent onComplete={onLoginFormComplete} />}
                        {currentOption == "registration" && <RegistrationComponent onComplete={onRegisterFormComplete} />}
                    </div>
                </div>
            </div>
        </div>
    )
}