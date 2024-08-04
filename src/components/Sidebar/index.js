import './index.css'
import {BsFillHouseDoc, BsCart, BsFillFileBarGraph} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gr'

const Sidebar = () => {
    return(
    <div className='sidebar'>
        <div className='sidebar-wrapper'>
            <div className='siderbar-menu'>
                <ul className='sidebar-list'>
                    <li className='sidebar-list-items'>Dashboard</li>
                    <li className='sidebar-list-items'>NFT Market place</li>
                    <li className='sidebar-list-items'> Tables </li>
                    <li className='sidebar-list-items'>Canban</li>
                    <li className='sidebar-list-items'>Profile</li>
                    <li className='sidebar-list-items'> Sign In</li>
                </ul>
            </div>
        </div>
    </div>
)
}

export default Sidebar