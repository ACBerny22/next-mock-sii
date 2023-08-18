'use client'

import { FC, useState } from 'react'
import {useShowAlumnoForm} from '../states/statsProvider'
import {FaChalkboardTeacher} from 'react-icons/fa'
import {PiStudentBold} from 'react-icons/pi'
import {MdOutlineEmojiPeople} from 'react-icons/md'

interface AccessCardProps {
    title:string
}

const AccessCard: FC<AccessCardProps> = ({title}) => {

    const {isAlumnoFormVisible, setIsAlumnoFormVisible} = useShowAlumnoForm()


    const handleClick = () => {
        if(title === 'Alumnos'){
            setIsAlumnoFormVisible(!isAlumnoFormVisible)
        }
    }

    return (
        <button onClick={handleClick} className='p-12 shadow-lg rounded-xl group bg-white flex gap-5 hover:text-yellow-600
        transition-all'>
            {title === 'Personal' ?  <FaChalkboardTeacher className='text-3xl'/> : 
                title === "Alumnos" ? <PiStudentBold className='text-3xl'/> : 
                    title === "Aspirantes" ? <MdOutlineEmojiPeople className='text-3xl'/> : null}
            
            <h1 className='uppercase font-semibold text-2xl'>{title}</h1>
        </button>
    )
}

export default AccessCard