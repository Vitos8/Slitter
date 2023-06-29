import {create } from "zustand";

interface EditModalProps {
	isOpen: boolean
	onClose: () => void
	onOpen: () => void
}

const useEditModal = create<EditModalProps>((set) => ({
	isOpen: false,
	onOpen: ( ) => set({isOpen: true}),
	onClose: () => set({isOpen: false})
}))


export default useEditModal