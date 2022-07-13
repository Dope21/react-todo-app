function Backdrop({ children, onClick, backActive }) {
  return (
    <div
      className={
        'absolute inset-0 bg-backDrop z-10 ' +
        (backActive ? 'visible' : 'invisible')
      }
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default Backdrop
