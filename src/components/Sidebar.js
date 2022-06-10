import { Link } from 'react-router-dom'
import { PencilAltIcon, AnnotationIcon, LogoutIcon, LoginIcon } from '@heroicons/react/outline'
import ThemeSwither from './ThemeSwither'

function Sidebar(props) {

    const handleItemClick = () => {
        props.navItemClick("true")
    }

    return (
        <nav className={'text-black bg-white dark:text-white dark:bg-purple-dark max-w-xs fixed h-screen pt-20 px-7 pb-7 flex flex-col transition-all z-20 ' + props.navShow}>
            <div>
                <h2 className='text-3xl font-bold transition-all'>Welcome, Thanasak</h2>
                <ul className='pt-8 flex flex-col gap-2'>
                    <li onClick={handleItemClick}><Link to="/" className='p-3 w-full bg-black bg-opacity-10 rounded-md flex items-center font-semibold transition-all hover:text-purple-main'><PencilAltIcon className='w-6 mr-3 text-purple-main' />Task</Link></li>
                    <li onClick={handleItemClick}><Link to="/about" className='p-3 w-full bg-black bg-opacity-10 rounded-md flex items-center font-semibold transition-all hover:text-purple-main'><AnnotationIcon className='w-6 mr-3 text-purple-main' />About</Link></li>
                    <li onClick={handleItemClick}><Link to="/login" className='p-3 w-full bg-black bg-opacity-10 rounded-md flex items-center font-semibold transition-all hover:text-purple-main'><LoginIcon className='w-6 mr-3 text-purple-main' />Login</Link></li>
                    {/* <li onClick={handleItemClick}><Link to="/" className='p-3 w-full bg-black bg-opacity-10 rounded-md flex items-center font-semibold transition-all hover:text-purple-main'><LogoutIcon className='w-6 mr-3 text-purple-main' />Logout</Link></li> */}
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
