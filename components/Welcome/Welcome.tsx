import React from 'react'
import useLoginModal from '@/hooks/useLoginModal';
import useRegisterModal from '@/hooks/useRegisterModal'

const Welcome = () => {
	const register = useRegisterModal();
	const login = useLoginModal();

  return (
	<div className="border-b-[1px] border-white-900 py-10">
		<h2 className='text-center font-bold text-xl'>Welcome to TwitterClone</h2>
		<div className="mt-3 flex justify-center gap-x-3">
			<div onClick={() => login.onOpen()} className="cursor-pointer bg-sky-500 text-white py-1 px-3 text-md font-bold rounded-full hover:opacity-[0.5] transition ">Login</div>
			<div onClick={() => register.onOpen()} className="cursor-pointer border border-neutral-400  py-1 px-3 text-md font-bold rounded-full hover:opacity-[0.5] transition">Register</div>
		</div>
	</div>
  )
}

export default Welcome