import { TrashIcon } from '@heroicons/react/outline'

function TrashButton({ onClick }) {
  return (
    <div className="flex justify-center fixed bottom-0 left-0 w-full p-7">
      <div className="max-w-xl flex justify-end w-full">
        <div
          className="bg-purple-main rounded-full text-white w-[60px] h-[60px] flex items-center justify-center cursor-pointer"
          onClick={onClick}
        >
          <TrashIcon className="w-7" />
        </div>
      </div>
    </div>
  )
}

export default TrashButton
