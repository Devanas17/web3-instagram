import React from 'react'
import { useAppContext } from '../context/context'

const Login = () => {
    const {connectWallet} = useAppContext()
  return (
    <div className='h-screen w-full flex items-center justify-center'>
        <button className="bg-pink-600 text-white rounded-md h-10 w-36 hover:cursor-pointer flex items-center justify-center" onClick={e => connectWallet()}>Connect Wallet</button>
    </div>
  )
}

export default Login
