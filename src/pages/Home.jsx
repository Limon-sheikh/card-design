import React from 'react';
import { BsQrCode } from "react-icons/bs";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Home = () => {
    return (
        <>
            {/* card background design */}
            <div className=' mx-auto h-screen bg-gradient-to-r from-cyan-900 to-slate-900'>
                <div className='bg-gradient-to-r from-[#ca9c62] to-[#f0c986]' style={{ clipPath: "polygon(100% 0, 100% 72%, 0 100%, 0 31%)", width: "100%", height: "739px"}} ></div>
                {/* end  */}

                {/* card back part design */}
                <div id='cardContainer' className='absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] ' >
                    <div id='backPart' className='bg-gradient-to-r from-slate-900 to-slate-700 w-[500px] h-[300px] pb-6 mt-[-40px] shadow-[15px_14px_21px_0px_rgba(0,0,0,0.64)]'>
                        <div className=' h-[90%]'>
                            <div className=' w-[100%] h-[125px] relative '>
                                <div id='logo' className=' absolute top-[79%] left-[44%] transform translate-x-[-40%] translate-y-[-80%] w-[90px] h-[30px] bg-gradient-to-r from-[#ca9c62] to-[#f0c986] rotate-[-48deg] rounded-2xl' ></div>
                                <div id='logo' className=' absolute top-[74%] left-[47%] translate-y-[-25%] bg-gradient-to-r from-[#ca9c62] to-[#f0c986]' style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)", width: "65px", height: "38px" }} ></div>
                            </div>
                            <div id='text' className='text-center'>
                                <h1 className='text-[30px] font-bold text-[#ca9c62] uppercase font-myFontMontserrat '>company logo</h1>
                                <h1 className='text-[14px] text-[#a89c8f] uppercase font-myFontMontserrat '>your slogan here</h1>
                            </div>
                        </div>
                        <div className=' bg-gradient-to-r from-[#ca9c62] to-[#f0c986] mt-1'>
                            <p className='text-slate-800 text-center uppercase font-myFontMontserrat '>www.yourclub.com</p>
                        </div>
                    </div>
                    {/* end  */}

                    {/* card front part , left side design */}
                    <div id='frontPart' className=' relative bg-gradient-to-r from-[#ca9c62] to-[#f0c986] w-[500px] h-[300px] pb-6 mt-6 shadow-[15px_14px_21px_0px_rgba(0,0,0,0.64)]'>
                        <div className=' absolute top-0 bg-gradient-to-r from-[#f0c986] to-[#ca9c62]  ' style={{ clipPath: "polygon(100% 0%, 86% 30%, 30% 100%, 0 100%, 0% 50%, 0 1%)",  width: "260px", height: "300px" }} ></div>
                        <div className=' rotate-[-4deg] bg-gradient-to-r from-cyan-900 to-slate-900  ' style={{ clipPath: "polygon(58% 0, 68% 20%, 77% 53%, 86% 88%, 86% 100%, 71% 99%, 53% 81%, 49% 57%, 47% 28%, 46% 0)",  width: "280px", height: "308px" }} ></div>
                        <div className=' absolute top-0 bg-gradient-to-bl from-slate-700 to-slate-800 ' style={{ clipPath: "polygon(58% 0, 68% 20%, 77% 53%, 86% 88%, 85% 100%, 50% 100%, 0 100%, 0% 70%, 0% 35%, 0 0)",  width: "250px", height: "301px" }} >
                            <div className='relative h-[100%]'>
                                <div id='logo' className=' absolute top-[40%] left-[22%] transform translate-x-[-20%] translate-y-[-40%] w-[60px] h-[18px] bg-gradient-to-r from-[#ca9c62] to-[#f0c986] rotate-[-48deg] rounded-2xl' ></div>
                                <div id='logo' className=' absolute top-[42%] left-[30%] translate-y-[-25%] bg-gradient-to-r from-[#ca9c62] to-[#f0c986]' style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)", width: "45px", height: "25px" }} ></div>
                                <div id='text' className='absolute top-[50%] left-[6%] transform translate-x-[-%] translate-y-[-50%]'>
                                    <h1 className='text-[17px] font-bold text-[#ca9c62] uppercase font-myFontMontserrat '>company logo</h1>
                                    <h1 className='text-[10px] text-center text-[#a89c8f] uppercase font-myFontMontserrat '>your slogan here</h1>
                                </div>
                            </div>
                            <div id='scannerLogo' className=' absolute top-[72%] left-[15px] text-[70px] bg-gradient-to-r from-[#ca9c62] to-[#f0c986]'><BsQrCode/></div>
                        </div>
                        {/* end  */}

                        {/* card front part, right side design */}
                        <div className='absolute top-[60%] left-[95%] transform translate-x-[-100%] translate-y-[-60%] w-[220px] h-[250px]'>
                            <div id='text'>
                                <h1 className='uppercase text-end text-[25px] px-2 font-myFontMontserrat font-bold bg-gradient-to-r from-slate-700 to-slate-800 bg-clip-text text-transparent'>Limon sheikh</h1>
                                <h1 className='capitalize text-end px-2 font-myFontMontserrat text-[18px] bg-gradient-to-r from-slate-700 to-slate-800 bg-clip-text'>modeling design</h1>
                                <div className=' my-4 h-[2px] bg-gradient-to-bl from-slate-700 to-slate-800'></div>
                            </div>
                            <div id='contac' className=''>
                                <div className='flex justify-end items-center mb-5 px-2 '> 
                                    <div className=' text-[13px] font-myFontMontserrat mr-2'>
                                        <h1>+070 6754 76854</h1>
                                        <h1>+070 6754 76854</h1>
                                    </div>
                                    <div className=' bg-gradient-to-bl from-slate-700 to-slate-800 w-[40px] h-[32px] flex items-center justify-center  ' style={{clipPath: "polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%)"}}>
                                        <span className='text-[#f0c986] text-[22px] pl-2'><IoIosCall /></span>
                                    </div>
                                </div>
                                <div className='flex justify-end items-center mb-5 px-2'>
                                    <div className=' text-[13px] font-myFontMontserrat mr-2 '>
                                        <h1>abcd@gmail.com</h1>
                                        <h1>abcd@gmail.com</h1>
                                    </div>
                                    <div className=' bg-gradient-to-bl from-slate-700 to-slate-800 w-[40px] h-[32px] flex items-center justify-center  ' style={{clipPath: "polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%)"}}>
                                        <span className='text-[#f0c986] text-[22px] pl-2'><MdEmail /></span>
                                    </div>
                                </div>
                                <div className='flex justify-end items-center mb-5 px-2'>
                                    <div className=' text-[13px] font-myFontMontserrat mr-2 capitalize'>
                                        <h1>dhaka bangladesh,1202</h1>
                                        <h1>dhaka bangladesh,1202</h1>
                                    </div>
                                    <div className=' bg-gradient-to-bl from-slate-700 to-slate-800 w-[40px] h-[32px] flex items-center justify-center  ' style={{clipPath: "polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%)"}}>
                                        <span className='text-[#f0c986] text-[22px] pl-2'><FaLocationDot /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end  */}
                    </div>
                </div>
            </div>
        </>
    );
};
export default Home;