'use client'

import { FC } from 'react'
import {MdLogin} from 'react-icons/md'

interface AlumnosLoginProps {
  
}

const AlumnosLogin: FC<AlumnosLoginProps> = ({}) => {
  return (
  <div>
    <form className='flex flex-col gap-3 items-end'>
        <div className='flex gap-2'>
            <h1>No. de Control:</h1>
            <input className='border p-1 rounded-lg' required={true} type='number'></input>
        </div>
        <div className='flex gap-2'>
            <h1>NIP:</h1>
            <input className='border p-1 rounded-lg' required={true} type='password'></input>
        </div>
        <button className='w-full bg-yellow-500 p-3 rounded-xl text-white font-bold
        hover:bg-yellow-600 transition-all flex items-center justify-center gap-3'>
            <MdLogin className='text-2xl'></MdLogin>
            Acceso
        </button>
    </form>
  </div>
  )
}

export default AlumnosLogin