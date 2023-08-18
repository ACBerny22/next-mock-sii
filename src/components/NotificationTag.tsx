import { FC } from 'react'

interface NotificationTagProps {
  title:string,
  corpus:string
}

const NotificationTag: FC<NotificationTagProps> = ({title, corpus}) => {
    return (
        <div className='px-5 py-5 flex flex-col items-start text-left border hover:bg-slate-100 cursor-pointer'>
            <h1 className='font-semibold mb-1'>{title}</h1>
            <p className='font-light text-sm'>{corpus}</p>
        </div>
    )
}

export default NotificationTag