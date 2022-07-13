import { Link } from 'react-router-dom'

function LinkItem({ onClick, Icon, children, path }) {
  return (
    <li onClick={onClick}>
      <Link to={path} className="sideLink">
        {Icon}
        {children}
      </Link>
    </li>
  )
}

export default LinkItem
