import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { PencilAltIcon, AnnotationIcon, LogoutIcon, MoonIcon, SunIcon } from '@heroicons/react/outline'

function Sidebar(props) {
    
    const [currentTheme, setCurrentTheme] = useState(localStorage.theme)

    const handleThemeClick = () => {
        setCurrentTheme( currentTheme === "dark" ? "light" : "dark")
    }
    
    useEffect(()=> {
        localStorage.theme = currentTheme
        document.documentElement.setAttribute("class", localStorage.theme)
    }, [currentTheme])

    return (
    <nav className={'text-black bg-white dark:text-white dark:bg-purple-dark w-3/4 fixed h-screen pt-20 px-7 pb-7 flex flex-col transition-all ' + props.visibility}>
        <div>
            <h2 className='text-3xl font-bold transition-all'>Welcome, Thanasak</h2>
            <ul className='pt-8 flex flex-col gap-2'>
                <li className='p-3 w-full bg-purple-opacity rounded-md'><Link to="/" className='flex items-center font-semibold transition-all hover:text-purple-main'><PencilAltIcon className='w-6 mr-3 text-purple-main' />Task</Link></li>
                <li className='p-3 w-full bg-purple-opacity rounded-md'><Link to="/" className='flex items-center font-semibold transition-all hover:text-purple-main'><AnnotationIcon className='w-6 mr-3 text-purple-main' />About</Link></li>
                <li className='p-3 w-full bg-purple-opacity rounded-md'><Link to="/" className='flex items-center font-semibold transition-all hover:text-purple-main'><LogoutIcon className='w-6 mr-3 text-purple-main' />Logout</Link></li>
            </ul>             
        </div>
        <div className='mt-auto flex items-center gap-2'>
            <div id='themeToggle' onClick={handleThemeClick}>
                <div className='relative w-[66px] h-[30px] rounded-[20px] bg-purple-opacity flex items-center justify-between px-2 cursor-pointer select-none'>
                    <MoonIcon className='w-5 opacity-50' />
                    <SunIcon className='w-5 opacity-50' />
                    <div className={currentTheme === "dark" ? 'toggleBtn' : 'toggleMove'}>
                        { currentTheme === "dark"  ? <MoonIcon className='w-5' /> : <SunIcon className='w-5' /> }
                    </div>
                </div>
            </div>
            <span className='font-thin text-xs'>Switch Theme</span>
        </div>
    </nav>
    )
}

export default Sidebar