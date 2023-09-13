import React from 'react';
import { Link } from 'react-router-dom';
import address from '../images/address-icon.png';
import contact from '../images/contact.png';
import mail from '../images/mail.png'
import facebook from '../images/facebook.png'
import github from '../images/github.png'
import instgram from '../images/instagram.png'

const Footer = () => {
    return (
        <>
            <div className='bg-gradient-to-bl from-blue-100 to-red-100 flex items-end h-[60vh] w-full'>
                <div className='mx-auto w-[90%] flex justify-center items-center h-[50vh] my-10'>
                    <div className='flex space-y-5 flex-col items-start justify-center w-[90%]'>
                        <div className='relative rounded-full h-20 w-20 bg-gradient-to-r flex items-center justify-center from-red-400 to-blue-400'>
                            <span style={{ fontFamily: 'sans-serif' }} className='absolute text-xl p-4 text-center font-bold text-tranparent bg-gradient-to-r from-red-300 to-blue-300 bg-clip-text'>UTSAV</span>
                        </div>
                        <div className='w-full flex flex-col items-start space-y-4'>
                            <ul className='flex space-x-5'>
                                <Link className='text-lg pr-2  border-[1px] border-y-0 border-l-0 border-r-black underline font-medium decoration-red-600' style={{ fontFamily: 'sans-serif' }} to="/product">Home</Link>
                                <Link className='text-lg pr-2  border-[1px] border-y-0 border-l-0 border-r-black underline font-medium decoration-red-600' style={{ fontFamily: 'sans-serif' }} to="/product">Product</Link>
                                <Link className='text-lg pr-2  border-[1px] border-y-0 border-l-0 border-r-black underline font-medium decoration-red-600' style={{ fontFamily: 'sans-serif' }} to="/product">Services</Link>
                                <Link className='text-lg pr-2  border-[1px] border-y-0 border-l-0 border-r-black underline font-medium decoration-red-600' style={{ fontFamily: 'sans-serif' }} to="/product">Features</Link>
                                <Link className='text-lg pr-2  border-[1px] border-y-0 border-l-0 border-r-black underline font-medium decoration-red-600' style={{ fontFamily: 'sans-serif' }} to="/product">About</Link>
                                <Link className='text-lg pr-2  underline font-medium decoration-red-600' style={{ fontFamily: 'sans-serif' }} to="/product">Contact</Link>
                            </ul>
                            <span className='font-medium text-lg ' style={{ fontFamily: 'sans-serif' }}>UTSAV &#169; 2023 - All rights reserved</span>
                        </div>
                    </div>
                    <div className='w-[100%] flex justify-between h-full items-center'>
                        <div className='w-[100%] space-y-6'>
                            <div className='w-[100%] space-y-1'>
                                <span className='text-xl font-semibold' style={{ fontFamily: 'sans-serif' }}>Contact details</span>
                                <div className='space-y-1'>
                                    <div className='flex items-center space-x-4'>
                                        <img className='h-4 w-4' src={address} alt="" />
                                        <span className='font-medium text-lg' style={{ fontFamily: 'sans-serif' }}>123, City Park , NewYork, 12003</span>
                                    </div>
                                    <div className='flex items-center space-x-4'>
                                        <img src={contact} className='w-4 h-4' alt="" />
                                        <span className='font-medium text-lg' style={{ fontFamily: 'sans-serif' }}>+55 555555</span>
                                    </div>
                                    <div className='flex items-center space-x-4'>
                                        <img className='w-4 h-4' src={mail} alt="" />
                                        <span className='text-sky-600 underline font-medium text-lg' style={{ fontFamily: 'sans-serif' }}>utsav@gmail.com</span>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col justify-start space-y-2'>
                                <span className='text-xl font-semibold ' style={{ fontFamily: 'sans-serif' }}>
                                    Social Links
                                </span>
                                <div className='flex space-x-3'>
                                    <span><img className='w-4 h-4 cursor-pointer hover:scale-150 duration-300 ease-in-out' src={facebook} alt="" /></span>
                                    <span><img className='w-4 h-4 cursor-pointer hover:scale-150 duration-300 ease-in-out' src={instgram} alt="" /></span>
                                    <span><img className='w-4 h-4 cursor-pointer hover:scale-150 duration-300 ease-in-out' src={github} alt="" /></span>
                                </div>
                            </div>
                        </div>
                        {/* about company */}
                        <div className='w-[100%] space-y-4'>
                            <span className='font-semibold text-black text-3xl' style={{ fontFamily: 'sans-serif' }}>About the company</span>
                            <p className='font-medium text-lg' style={{ fontFamily: 'sans-serif' }}>Utsav is a platform that bridges the gap between two types of users: those seeking specific services and those offering them. Our platform ensures that both parties benefit from enhanced reliability, increased flexibility, and simplified access to services.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
