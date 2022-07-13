import React, { useEffect, useState } from 'react'
import { MoonIcon, SunIcon } from '@heroicons/react/outline'

function ThemeSwither() {
  const [theme, setTheme] = useState(() => {
    const saveTheme = localStorage.getItem('theme')
    if (saveTheme) {
      return saveTheme
    } else {
      return 'dark'
    }
  })

  useEffect(() => {
    localStorage.theme = theme
    document.documentElement.setAttribute('class', localStorage.theme)
  }, [theme])

  const handleThemeClick = () => {
    setTheme(currentTheme => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <>
      <div id="themeToggle" onClick={handleThemeClick}>
        <div className="relative w-[66px] h-[30px] rounded-[20px] bg-purple-opacity flex items-center justify-between px-2 cursor-pointer select-none">
          <MoonIcon className="w-5 opacity-50" />
          <SunIcon className="w-5 opacity-50" />
          <div className={theme === 'dark' ? 'toggleBtn' : 'toggleMove'}>
            {theme === 'dark' ? (
              <MoonIcon className="w-5" />
            ) : (
              <SunIcon className="w-5" />
            )}
          </div>
        </div>
      </div>
      <span className="font-normal text-xs dark:text-slate-400">
        Switch Theme
      </span>
    </>
  )
}

export default ThemeSwither
