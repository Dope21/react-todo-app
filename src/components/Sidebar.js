import {
  PencilAltIcon,
  AnnotationIcon,
  LogoutIcon,
  LoginIcon,
} from '@heroicons/react/outline'
import ThemeSwither from './ThemeSwitcher'
import { getUser } from '../utils/ManageUser'
import Backdrop from './Backdrop'
import LinkItem from './LinkItem'

function Sidebar({ backClick, backActive, navShow, navItemClick }) {
  const handleItemClick = () => {
    navItemClick('true')
  }

  const handleLogout = () => {
    navItemClick('true')
    localStorage.removeItem('token')
    localStorage.removeItem('username')
  }

  return (
    <Backdrop onClick={backClick} backActive={backActive}>
      <nav
        className={
          'text-black bg-white dark:text-white dark:bg-purple-dark max-w-xs w-full fixed h-screen pt-20 px-7 pb-7 flex flex-col transition-all z-20 ' +
          navShow
        }
        onClick={e => e.stopPropagation()}
      >
        <div>
          <h2 className="text-3xl font-bold transition-all flex flex-col">
            Welcome,
            <span>{getUser() ? getUser().split('@')[0] : 'TODO APP'}</span>
          </h2>
          <ul className="pt-8 flex flex-col gap-2">
            <LinkItem
              path={'/'}
              onClick={handleItemClick}
              Icon={<PencilAltIcon className="sideIcon" />}
            >
              Task
            </LinkItem>
            <LinkItem
              path={'/about'}
              onClick={handleItemClick}
              Icon={<AnnotationIcon className="sideIcon" />}
            >
              About
            </LinkItem>
            {getUser() ? (
              <LinkItem
                path={'/'}
                onClick={handleLogout}
                Icon={<LogoutIcon className="sideIcon" />}
              >
                Logout
              </LinkItem>
            ) : (
              <LinkItem
                path={'/login'}
                onClick={handleItemClick}
                Icon={<LoginIcon className="sideIcon" />}
              >
                Login
              </LinkItem>
            )}
          </ul>
        </div>
        <div className="mt-auto flex items-center gap-2">
          <ThemeSwither />
        </div>
      </nav>
    </Backdrop>
  )
}

export default Sidebar
