"use client"
import { useSession } from "next-auth/react";
import { useState } from "react";
import { BsArrowDown, BsBell, BsChat, BsChatDots, BsMegaphone } from "react-icons/bs";
import { FaChevronDown, FaChevronUp, FaUserEdit, FaUserTimes } from "react-icons/fa";

const Navbar = () => {
    const { data: session, status } = useSession()
    const [showMessages, setShowMessages] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    const [showProfile, setShowProfile] = useState(false);

    return (
        <>
            {/* start navbar */}
            < div className="md:fixed md:w-full md:top-0 md:z-20 flex flex-row flex-wrap items-center bg-white p-6 border-b border-gray-300" >

                {/* logo */}
                < div className="flex-none space-x-3 max-w-40 flex flex-row items-center" >
                    <strong className="capitalize ml-1 flex-1">Report It</strong>
                    <BsMegaphone color="#000" size={30} />
                    <button id="sliderBtn" className="flex-none text-right text-gray-900 hidden md:block">
                        <i className="fad fa-list-ul"></i>
                    </button>
                </div >
                {/* end logo */}

                {
                    session?.user &&
                    <div id="navbar" className="z-50 md:fixed md:top-0 md:w-60 md:right-9  md:border-t md:border-b md:border-gray-200 h-full flex-1 pl-3 flex flex-row flex-wrap justify-between items-center md:flex-col md:items-center">
                        {/* right */}
                        <div className="flex h-16 flex-row-reverse items-center">
                            {/* user */}
                            <div className="dropdown relative md:static">
                                <button className="menu-btn outline-0 outline-none flex flex-wrap items-center focus:outline-0 border-0"
                                    onClick={() => { setShowProfile(!showProfile) }}
                                >
                                    <div className="w-8 h-8 overflow-hidden rounded-full">
                                        <img className="w-full h-full object-cover" src="/images/user.svg" />
                                    </div>

                                    <div className="ml-2 capitalize flex space-x-3 items-center">
                                        <h1 className="text-sm text-gray-800 font-semibold m-0 p-0 leading-none">{session.user.name}</h1>
                                        {
                                            showProfile ? <FaChevronUp size={10} color='#000' />
                                                : <FaChevronDown size={10} color='#000' />
                                        }
                                    </div>
                                </button>

                                {/* <button className=" fixed top-0 left-0 z-10 w-full h-full "></button> */}

                                {
                                    showProfile &&
                                    <div className="text-gray-500 menu md:mt-6 md:w-full rounded bg-white shadow-md absolute z-20 right-0 w-40 mt-5 py-2 animated faster">

                                        {/* item */}
                                        <a className="flex space-x-4 px-4 py-2 capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 hover:text-gray-900 transition-all duration-300 ease-in-out" href="#">
                                            <FaUserEdit color="#004d4d" size={20} />
                                            <span className="text-teal-900">Edit profile</span>
                                        </a>
                                        {/* end item */}

                                        {/* item */}
                                        <a className="px-4 py-2 flex space-x-4 capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 hover:text-gray-900 transition-all duration-300 ease-in-out" href="#">
                                            <BsChat size={20} color="#004d4d" />
                                            <span className="text-teal-900">Inbox</span>
                                        </a>
                                        {/* end item */}

                                        <hr />

                                        {/* item */}
                                        <a className="px-4 py-2 flex space-x-4 capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 hover:text-gray-900 transition-all duration-300 ease-in-out" href="#">
                                            <FaUserTimes size={20} color="#004d4d" />
                                            <span className="text-teal-900">log out</span>
                                        </a>
                                        {/* end item */}

                                    </div>
                                }
                            </div>
                            {/* end user */}

                            {/* notifcation */}
                            <div className="dropdown relative mr-5 md:static">

                                <button className="text-gray-500 menu-btn p-0 m-0 hover:text-gray-900 focus:text-gray-900 focus:outline-none transition-all ease-in-out duration-300"
                                    onClick={() => { setShowNotifications(!showNotifications) }}
                                >
                                    <BsBell size={20} color="#005658" />
                                </button>

                                {/* <button className=" fixed top-0 left-0 w-full h-full "></button> */}
                                {
                                    showNotifications &&
                                    <div className="menu rounded bg-white md:right-0 md:w-full shadow-md absolute z-20 right-0 w-84 mt-5 py-2 animated faster">
                                        {/* top */}
                                        <div className="px-4 py-2 flex flex-row justify-between items-center capitalize font-semibold text-sm">
                                            <h1>notifications</h1>
                                            <div className="bg-teal-100 border border-teal-200 text-teal-500 text-xs rounded px-1">
                                                <strong>5</strong>
                                            </div>
                                        </div>
                                        <hr />
                                        {/* end top */}

                                        {/* body */}

                                        {/* item */}
                                        <a className="flex flex-row items-center justify-start px-4 py-4  capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 transition-all duration-300 ease-in-out" href="#">

                                            <div className="px-3 py-2 rounded mr-3 bg-gray-100 border border-gray-300">
                                                <i className="fad fa-birthday-cake text-sm"></i>
                                            </div>

                                            <div className="flex-1 flex flex-rowbg-green-100">
                                                <div className="flex-1">
                                                    <h1 className="text-sm font-semibold">poll..</h1>
                                                    <p className="text-xs text-gray-500">text here also</p>
                                                </div>
                                                <div className="text-right text-xs text-gray-500">
                                                    <p>4 min ago</p>
                                                </div>
                                            </div>

                                        </a>
                                        <hr />
                                        {/* end item */}

                                        {/* item */}
                                        <a className="flex flex-row items-center justify-start px-4 py-4  capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 transition-all duration-300 ease-in-out" href="#">

                                            <div className="px-3 py-2 rounded mr-3 bg-gray-100 border border-gray-300">
                                                <i className="fad fa-user-circle text-sm"></i>
                                            </div>

                                            <div className="flex-1 flex flex-rowbg-green-100">
                                                <div className="flex-1">
                                                    <h1 className="text-sm font-semibold">mohamed..</h1>
                                                    <p className="text-xs text-gray-500">text here also</p>
                                                </div>
                                                <div className="text-right text-xs text-gray-500">
                                                    <p>78 min ago</p>
                                                </div>
                                            </div>

                                        </a>
                                        <hr />
                                        {/* end item */}

                                        {/* item */}
                                        <a className="flex flex-row items-center justify-start px-4 py-4  capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 transition-all duration-300 ease-in-out" href="#">

                                            <div className="px-3 py-2 rounded mr-3 bg-gray-100 border border-gray-300">
                                                <i className="fad fa-images text-sm"></i>
                                            </div>

                                            <div className="flex-1 flex flex-rowbg-green-100">
                                                <div className="flex-1">
                                                    <h1 className="text-sm font-semibold">new imag..</h1>
                                                    <p className="text-xs text-gray-500">text here also</p>
                                                </div>
                                                <div className="text-right text-xs text-gray-500">
                                                    <p>65 min ago</p>
                                                </div>
                                            </div>

                                        </a>
                                        <hr />
                                        {/* end item */}

                                        {/* item */}
                                        <a className="flex flex-row items-center justify-start px-4 py-4  capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 transition-all duration-300 ease-in-out" href="#">

                                            <div className="px-3 py-2 rounded mr-3 bg-gray-100 border border-gray-300">
                                                <i className="fad fa-alarm-exclamation text-sm"></i>
                                            </div>

                                            <div className="flex-1 flex flex-rowbg-green-100">
                                                <div className="flex-1">
                                                    <h1 className="text-sm font-semibold">time is up..</h1>
                                                    <p className="text-xs text-gray-500">text here also</p>
                                                </div>
                                                <div className="text-right text-xs text-gray-500">
                                                    <p>1 min ago</p>
                                                </div>
                                            </div>

                                        </a>
                                        {/* end item */}


                                        {/* end body */}

                                        {/* bottom */}
                                        <hr />
                                        <div className="px-4 py-2 mt-2">
                                            <a href="#" className="border border-gray-300 block text-center text-xs uppercase rounded p-1 hover:text-teal-500 transition-all ease-in-out duration-500">
                                                view all
                                            </a>
                                        </div>
                                        {/* end bottom */}
                                    </div>
                                }
                            </div>
                            {/* end notifcation */}

                            {/* messages */}
                            <div className="dropdown relative mr-5 md:static">
                                <button className="text-gray-500 menu-btn p-0 m-0 hover:text-gray-900 focus:text-gray-900 focus:outline-none transition-all ease-in-out duration-300"
                                    onClick={() => { setShowMessages(!showMessages) }}
                                >
                                    <BsChatDots size={20} color="#005658" />
                                </button>

                                {/* <button className="hidden fixed top-0 left-0 z-10 w-full h-full "></button> */}
                                {
                                    showMessages &&
                                    <div className="menu md:w-full md:right-0 rounded bg-white shadow-md absolute z-20 right-0 w-84 mt-5 py-2 animated faster">
                                        {/* top */}
                                        <div className="px-4 py-2 flex flex-row justify-between items-center capitalize font-semibold text-sm">
                                            <h1>messages</h1>
                                            <div className="bg-teal-100 border border-teal-200 text-teal-500 text-xs rounded px-1">
                                                <strong>3</strong>
                                            </div>
                                        </div>
                                        <hr />
                                        {/* end top */}

                                        {/* body */}

                                        {/* item */}
                                        <a className="flex flex-row items-center justify-start px-4 py-4  capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 transition-all duration-300 ease-in-out" href="#">

                                            <div className="w-10 h-10 rounded-full overflow-hidden mr-3 bg-gray-100 border border-gray-300">
                                                <img className="w-full h-full object-cover" src="/images/user1.jpg" alt="" />
                                            </div>

                                            <div className="flex-1 flex flex-rowbg-green-100">
                                                <div className="flex-1">
                                                    <h1 className="text-sm font-semibold">mohamed said</h1>
                                                    <p className="text-xs text-gray-500">yeah i know</p>
                                                </div>
                                                <div className="text-right text-xs text-gray-500">
                                                    <p>4 min ago</p>
                                                </div>
                                            </div>

                                        </a>
                                        <hr />
                                        {/* end item */}

                                        {/* item */}
                                        <a className="flex flex-row items-center justify-start px-4 py-4  capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 transition-all duration-300 ease-in-out" href="#">

                                            <div className="w-10 h-10 rounded-full overflow-hidden mr-3 bg-gray-100 border border-gray-300">
                                                <img className="w-full h-full object-cover" src="/images/user2.jpg" alt="" />
                                            </div>

                                            <div className="flex-1 flex flex-rowbg-green-100">
                                                <div className="flex-1">
                                                    <h1 className="text-sm font-semibold">sull goldmen</h1>
                                                    <p className="text-xs text-gray-500">for sure</p>
                                                </div>
                                                <div className="text-right text-xs text-gray-500">
                                                    <p>1 day ago</p>
                                                </div>
                                            </div>

                                        </a>
                                        <hr />
                                        {/* end item */}

                                        {/* item */}
                                        <a className="flex flex-row items-center justify-start px-4 py-4  capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 transition-all duration-300 ease-in-out" href="#">

                                            <div className="w-10 h-10 rounded-full overflow-hidden mr-3 bg-gray-100 border border-gray-300">
                                                <img className="w-full h-full object-cover" src="/images/user3.jpg" alt="" />
                                            </div>

                                            <div className="flex-1 flex flex-rowbg-green-100">
                                                <div className="flex-1">
                                                    <h1 className="text-sm font-semibold">mick</h1>
                                                    <p className="text-xs text-gray-500">is typing ....</p>
                                                </div>
                                                <div className="text-right text-xs text-gray-500">
                                                    <p>31 feb</p>
                                                </div>
                                            </div>

                                        </a>
                                        {/* end item */}


                                        {/* end body */}

                                        {/* bottom */}
                                        <hr />
                                        <div className="px-4 py-2 mt-2">
                                            <a href="#" className="border border-gray-300 block text-center text-xs uppercase rounded p-1 hover:text-teal-500 transition-all ease-in-out duration-500">
                                                view all
                                            </a>
                                        </div>
                                        {/* end bottom */}
                                    </div>
                                }
                            </div>
                            {/* end messages */}


                        </div>
                        {/* end right */}
                    </div>
                }

            </div >
            {/* end navbar */}
            < hr />
        </>
    );
}

export default Navbar;