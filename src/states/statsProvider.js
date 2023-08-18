import {create} from 'zustand'

export const useShowAlumnoForm = create((set) => ({
    isAlumnoFormVisible: false,
    setIsAlumnoFormVisible: (props) => set({isAlumnoFormVisible: props}),
  }))