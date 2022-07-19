import React from 'react'

function Content({ children }) {
  return (
    <>
      <main className="bg-white dark:bg-purple-dark rounded-t-xl min-h-screen px-7 pt-7 pb-28">
        <div className="h-full max-w-xl mx-auto">{children}</div>
      </main>
    </>
  )
}

export default Content
