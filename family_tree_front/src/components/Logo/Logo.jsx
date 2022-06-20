import logo from '../../img/logo/TreeLogo.png'
import "./Logo.style.css"

export default function Logo() {
    return (
        <div className='loginLogo'>
            <div className='logoContainer'>
                <img src={logo} className='logo' alt='R Telecom logo'/>
            </div>
            <h1>Семейное</h1>
            <h2>Древо</h2>
        </div>
    );
}