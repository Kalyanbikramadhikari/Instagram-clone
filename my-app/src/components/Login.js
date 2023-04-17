import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';

const Login = () => {
  return (
    <div className='flex space-x-3 mt-8 max-h-full'>
        <div className="flex flex-grow ">

        </div>
        <div className="flex flex-grow   justify-center space-x-6">
            <div>
            <img className='h-3/5 hidden md:inline-flex' src="images/ilogin.png" alt=""/>

            </div>
            <div className='flex flex-col '>
            <div className='border-gray-300 border flex flex-col px-9'>
                <div className='flex justify-center p-6'>
                    <img className='w-32' src="images/logoinsta.png" alt=""/>
                </div>
                <div className='flex flex-col w-64 pb-2'>
                    <div className='flex flex-col space-y-1'>
                        <input className='border-gray-300 border outline-none p-2 rounded bg-zinc-50 text-xs font-normal' type="text" placeholder='Phone number, username, or email'/>
                        <input className='border-gray-300 border outline-none p-2 rounded bg-zinc-50 text-xs' type="text " placeholder='Password' />
                    </div>
                    <div className='mt-3'>
                    <button className='w-full bg-sky-400 rounded-md  text-white p-0.5 font-semibold text-sm'>Log in</button>


                    </div>
                    <div className='flex items-center space-x-4 mt-4 mb-3'>
                        <div className='bg-red-100 border-gray-300 border h-0 w-24'><hr /></div>
                        <div className='text-gray-500 font-sm text-sm'>OR</div>
                        <div className='border-gray-300 border h-0 w-28'><hr /></div>
                    </div>
                    <span className='mt-2 flex justify-center text-blue-900 text-sm font-medium cursor-pointer'><FacebookIcon className='mr-2'/> Log In with Facebook</span>
                    <span className='mt-2 flex justify-center text-xs text-gray-600 cursor-pointer'>Forgot Password?</span>

                </div>
            </div>

            <div className='flex mt-2 border-gray-300 border p-4 justify-center space-x-1'>
                <span className='text-sm font-light text-black '>Don't have an account? </span>
                <span><a className='text-sky-600 font-semibold text-sm' href="#">Sign up</a> </span>
            </div>

            <div className="flex justify-center mt-4">Get the app</div>
            <div className="space-x-2 flex justify-center mt-4">
                <img className='h-8 cursor-pointer' src="images/app.png" alt="" />
                <img className='h-8 cursor-pointer' src="images/play.png" alt="" />
            </div>
            </div>
            
            
        </div>
        <div className="flex flex-grow ">
            
        </div>
    </div>
  )
}

export default Login