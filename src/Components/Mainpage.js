import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Book from "./Book";
import Contact from "./Contact";
import Home from "./Home";
import Navbar from "./Navbar";
import Styles from '../Styles.css';
import Myorders from './Myorders';
import Routing from './Routing';




const Mainpage = () => {
    const backimg = {
        backgroundImage: "url('https://images.unsplash.com/photo-1601662528567-526cd06f6582?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBsYW5lJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60')",
        backgroundRepeat: "repeat",
        height: '100vh',
        width: "100%",
        objectFit: "cover"
    };

    const [popupVisible, setPopupVisible] = useState(false);

    const openPopup = (e) => {
        setPopupVisible(true);
    };

    const closePopup = (e) => {
        setPopupVisible(false);
    };


    return (
        <>
            <div style={backimg} className={`container ${popupVisible ? 'active' : ''}`}>
                <header className="text-gray-400 body-font  shadow-lg">
                    <div className="container mx-auto w-full flex flex-wrap p-5 flex-col md:flex-row items-center">
                        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-black ">
                                <path fill-rule="evenodd" d="M2.25 4.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875V17.25a4.5 4.5 0 11-9 0V4.125zm4.5 14.25a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" clip-rule="evenodd" />
                                <path d="M10.719 21.75h9.156c1.036 0 1.875-.84 1.875-1.875v-5.25c0-1.036-.84-1.875-1.875-1.875h-.14l-8.742 8.743c-.09.089-.18.175-.274.257zM12.738 17.625l6.474-6.474a1.875 1.875 0 000-2.651L15.5 4.787a1.875 1.875 0 00-2.651 0l-.1.099V17.25c0 .126-.003.251-.01.375z" />
                            </svg>

                            <Link className="ml-3 text-2xl lg:text-3xl hover:cursor-pointer text-slate-900 font-bold" to='/'>Brahmin's</Link>
                        </a>
                        <nav className="hidden md:ml-auto md:mr-auto md:flex flex-wrap items-center lg:text-lg md:text-base justify-center font-semibold">

                            <Link className="mr-5 text-slate-900 hover:text-red-400 cursor-pointer hover:shadow-xl p-2" to='/Dishes'>Dishes</Link>
                            <Link className="mr-5 text-slate-900 hover:text-red-400 cursor-pointer hover:shadow-xl p-2" to='/Reservations'>Reservations</Link>
                            <Link className="mr-5 text-slate-900 hover:text-red-400 cursor-pointer hover:shadow-xl p-2" to='/Contact'>Contact</Link>
                            <Link className="mr-5 text-slate-900 hover:text-red-400 cursor-pointer hover:shadow-xl p-2" to='/Orders'>MyOrders</Link>
                        </nav>
                        <button className="hidden md:inline-flex text-white bg-lime-500 border-0 py-1 px-4 focus:outline-none hover:bg-yellow-600 rounded text-lg btn" onClick={openPopup} >SignIn</button>
                        <button className="hidden ml-4 md:inline-flex text-gray-400 bg-gray-800 border-0 py-1 px-4 focus:outline-none hover:bg-gray-600 hover:text-white rounded text-lg transition-all" onClick={openPopup}>Login</button>
                    </div>
             
                </header>
                <Routing/>
            </div >
        
            <div>
                <div className={`h-[90%] w-full md:w-3/4 m-4 ${popupVisible ? '' : 'active'} popup-container`}>
                    <div className="text-xl cursor-pointer flex flex-col justify-center items-center mt-5 md:mt-0">
                        <div className="w-6 h-6 ml-96 " onClick={closePopup}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"  >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>

                        <h1 className="font-semibold text-3xl text-gray-700 m-2">Log In</h1>


                        <div className="flex">
                            <ion-icon name="logo-google"
                                className="py-2 rounded px-4 border-2 m-1 cursor-pointer border-violet-600 text-white bg-violet-600 hover:bg-white hover:text-violet-600 text-2xl">
                            </ion-icon>
                            <ion-icon name="logo-facebook"
                                className="py-2 rounded px-4 border-2 m-1 cursor-pointer border-blue-500 bg-blue-500 text-white hover:bg-white hover:text-blue-500 text-2xl">
                            </ion-icon>
                        </div>

                    </div>
                    <div className="flex flex-col justify-center items-center mt-10 md:mt-4 space-y-6 md:space-y-8">
                        <div className="">
                            <input type="text" placeholder="Email"
                                className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-violet-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]" />
                        </div>
                        <div className="">
                            <input type="password" placeholder="Password"
                                className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-violet-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]" />
                        </div>
                        <div className="flex space-x-2 -ml-28 md:-ml-40  lg:-ml-52">
                            <input className="" type="checkbox" id="checkbox" name="checkbox" />
                            <h3 className="text-sm font-semibold text-gray-400 -mt-1 cursor-pointer">Remember Me</h3>
                        </div>
                    </div>
                    <div className="text-center mt-7">
                        <button
                            className="uppercase px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-violet-500 hover:bg-violet-600  font-medium popup-btn" onClick={closePopup}>login</button>
                    </div>
                    <div className="text-center my-6 flex flex-col">
                        <a href="#" className="text-sm font-medium text-gray-400 hover:text-violet-500 m-1">Forgot
                            Password ?</a>
                        <a href="#" className="text-sm font-bold text-gray-400 hover:text-violet-500 m-1">
                            Not a User? Create New Account</a>
                    </div>
                </div>
            </div>
            

            <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
            <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
            
        </>
    )
}

export default Mainpage
