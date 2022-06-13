import { Link } from 'react-router-dom'
import { PencilAltIcon, AnnotationIcon, LogoutIcon, LoginIcon } from '@heroicons/react/outline'
import ThemeSwither from './ThemeSwither'
import { getUser, removeUser } from '../utils/Authen'

function Sidebar(props) {

    const handleItemClick = () => {
        props.navItemClick("true")
    }

    const handleLogout = () => {
        props.navItemClick("true")
        removeUser()
    }

    const LoginLink = <li onClick={handleItemClick}><Link to="/login" className='sideLink'><LoginIcon className='sideIcon' />Login</Link></li>
    const LogoutLink = <li onClick={handleLogout}><Link to="/" className='sideLink'><LogoutIcon className='sideIcon' />Logout</Link></li>

    return (
        <nav className={'text-black bg-white dark:text-white dark:bg-purple-dark max-w-xs w-full fixed h-screen pt-20 px-7 pb-7 flex flex-col transition-all z-20 ' + props.navShow}>
            <div>
                <h2 className='text-3xl font-bold transition-all flex flex-col'>
                    Welcome, 
                    {getUser() ? getUser().split('@')[0] : <span>TODO APP</span>}
                </h2>
                <ul className='pt-8 flex flex-col gap-2'>
                    <li onClick={handleItemClick}><Link to="/" className='sideLink'><PencilAltIcon className='sideIcon' />Task</Link></li>
                    <li onClick={handleItemClick}><Link to="/about" className='sideLink'><AnnotationIcon className='sideIcon' />About</Link></li>
                { getUser() ? LogoutLink : LoginLink }
                </ul>             
            </div>
            <div className='mt-auto flex items-center gap-2'>
                <ThemeSwither/>
                <span className='font-normal text-xs dark:text-slate-400'>Switch Theme</span>
            </div>
        </nav>
    )
}

export default Sidebar
