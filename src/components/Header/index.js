import './index.css'
import {BsBellFill, BsMoonFill, BsSearch, BsPersonCircle} from 'react-icons/bs'

const Header = () => {
    return(
        <div className="header">
            <div className="header-wrapper">
                <div className="header-left"> 
                    <h1 className='logo-first-part'>HORIZON <span className='logo-second-part'>FREE</span></h1>
                    <div className='main-heading'>
                        <p className='first-heading-main'>Pages/Dashboard</p>
                        <p className='second-heading-main'>Main Dashboard</p>
                    </div>
                </div>
                <div className="header-right">
                    <div className='icon-container'><BsSearch /> </div>
                    <div className='icon-container'><BsBellFill /> </div>
                    <div className='icon-container'><BsMoonFill /> </div>
                    <div className='icon-container'><BsPersonCircle /> </div>
                </div>
            </div>
        </div>
    )
}

export default Header