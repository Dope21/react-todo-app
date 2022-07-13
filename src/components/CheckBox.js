import { CheckCircleIcon } from '@heroicons/react/solid'

export const Checked = () => {
  return (
    <CheckCircleIcon className="w-7 text-purple-main cursor-pointer text-center" />
  )
}

export const UnChecked = () => {
  return (
    <div className="w-7 h-7 flex items-center justify-center">
      <span className="rounded-full border border-purple-main w-[22.4px] h-[22.4px]" />
    </div>
  )
}
