import { XIcon } from '@heroicons/react/outline'

function LoginError({
    status,
    errClose,
    errText
}) {
  
  const handleError = () => {
    return status ? '' : 'hidden'
  }
  const handleErrorClose = () => {
    errClose('true')
  }

  return (
    <div className={'w-full px-3 py-2 text-white bg-red-600 rounded-md mb-5 flex justify-between items-center '+ handleError()}>
        <p>{errText}</p>
        <span onClick={handleErrorClose}>
          <XIcon className='w-5 cursor-pointer' />
        </span>
    </div>
  )
}

export default LoginError