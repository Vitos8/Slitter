import {create } from "zustand";

interface IRegisterModalProps {
	isOpen: boolean
	onClose: () => void
	onOpen: () => void
}


const useRegisterModal = create<IRegisterModalProps>((set) => ({
	isOpen: false,
	onOpen: ( ) => set({isOpen: true}),
	onClose: () => set({isOpen: false})
}))

export default useRegisterModal;