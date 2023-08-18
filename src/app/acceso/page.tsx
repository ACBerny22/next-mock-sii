'use client'

import { FC, useState } from 'react'
import AccessCard from '@/components/AccessTag'
import {useShowAlumnoForm} from '../../states/statsProvider'
import AlumnosLogin from '@/components/AlumnosLogin'
import {BsFillBellFill} from 'react-icons/bs'
import {notifications} from '../../provData/data'
import NotificationTag from '@/components/NotificationTag'

interface ComponentProps {
  
}

const Component: FC<ComponentProps> = ({}) => {

    const {isAlumnoFormVisible, setIsAlumnoFormVisible} = useShowAlumnoForm()
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
    <main>
        <div className="flex p-12 justify-between text-3xl">
            <div className='flex gap-3'>
                <img src="logo-itcm-v2.png" alt="" 
                className='w-16'/>
                <h1 className='mt-3 '>SII - ITCM</h1>
            </div>
            <div className="relative">
                <BsFillBellFill onClick={() => {setIsDropdownOpen(!isDropdownOpen)}} className="hover:text-slate-600 transition-all" />
                <div className="absolute -top-1 -right-2 bg-yellow-600 rounded-full w-5 h-5 flex items-center justify-center text-white text-sm">
                {2}
            </div>
            <div className={`absolute top-10 right-2 bg-white p-2 rounded-xl shadow-lg z-50 text-base
                             transition-all font-light flex flex-col gap-2${
                isDropdownOpen
                    ? 'opacity-100 scale-100'
                    : 'scale-0 opacity-0 pointer-events-none'
                } `}>
                {/* Add your dropdown menu content here */}
                <div>
                    <div className='flex gap-24 mb-5'>
                        <h1 className='text-lg font-semibold'>Notificaciones</h1>
                        <a className='font-light text-sm'>Ver todo</a>
                    </div>
                    {notifications.map((item)=>(
                        <NotificationTag corpus={item.corpus} title={item.title}/>
                    ))}
                </div>

            </div>
        </div>
    </div>
        <div className="flex flex-col items-center justify-between lg:p-24 gap-20 p-12">
            <div className='flex flex-col gap-5 text-center'>
                <h1 className='text-4xl font-semibold'>¡Bienvenido/a!</h1>
                <button className='bg-yellow-400 py-2 px-3 rounded-xl hover:bg-yellow-500 transition-all
                font-light'>Soporte contraseñas y ayuda SII</button>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                <AccessCard title='Personal'/>
                <AccessCard title='Alumnos'/>
                <AccessCard title='Aspirantes'/>
            </div>
            <div className='mt-3'> 
                {isAlumnoFormVisible ? 
                    <div>
                        <h2 className='text-lg mb-5 font-bold text-center'>Autenticacion para Acceso al Sistema</h2>
                        <AlumnosLogin/> 
                    </div>
                    : 
                    null
                }
            </div>
        </div>
    </main>
    )
}

export default Component