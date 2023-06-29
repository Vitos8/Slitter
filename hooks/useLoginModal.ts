import {create } from "zustand";

interface ILoginModalProps {
	isOpen: boolean
	onClose: () => void
	onOpen: () => void
}


const useLoginModal = create<ILoginModalProps>((set) => ({
	isOpen: false,
	onOpen: ( ) => set({isOpen: true}),
	onClose: () => set({isOpen: false})
}))

export default useLoginModal;