"use client"
import { usePathname } from "next/navigation";

import { IoSpeedometerOutline } from "react-icons/io5";
import { FaChartPie, FaGlobeAfrica, FaRegFolderOpen } from "react-icons/fa";
import Link from "next/link";

const Sidebar = () => {
    const pathname = usePathname();
    return (
        < div id="sideBar" className="relative flex flex-col flex-wrap bg-white border-r border-gray-300 p-6 flex-none w-1/5 mt-20 md:slideInLeft md:fixed md:top-0 md:z-30 md:h-screen md:shadow-xl animated faster" >


            {/* sidebar content */}
            < div className="flex flex-col" >
                < Link href="/admin/dashboard" className={`mb-6 p-2 capitalize font-medium text-sm  rounded-lg transition ease-in-out duration-500 flex space-x-3 
                ${pathname.includes("dashboard") && " bg-teal-600 text-white"}`}
                >
                    <IoSpeedometerOutline size={20} color={pathname.includes("dashboard") ? "#ffffff75" : "#000"} />
                    <span>Dashboard</span>
                </Link >

                < Link href="/admin/districts" className={`mb-6 p-2 capitalize font-medium text-sm  rounded-lg transition ease-in-out duration-500 flex space-x-3 
                ${pathname.includes("districts") && " bg-teal-600 text-white"}`}
                >
                    <FaGlobeAfrica size={20} color={pathname.includes("districts") ? "#ffffff75" : "#000"} />
                    <span>Districts</span>
                </Link >

                < Link href="/admin/cases" className={`mb-6 p-2 capitalize font-medium text-sm  rounded-lg transition ease-in-out duration-500 flex space-x-3 
                ${pathname.includes("cases") && " bg-teal-600 text-white"}`}
                >
                    <FaRegFolderOpen size={20} color={pathname.includes("cases") ? "#ffffff75" : "#000"} />
                    <span>Cases</span>
                </Link >

                < Link href="/admin/reports" className={`mb-6 p-2 capitalize font-medium text-sm  rounded-lg transition ease-in-out duration-500 flex space-x-3 
                ${pathname.includes("reports") && " bg-teal-600 text-white"}`}
                >
                    <FaChartPie size={20} color={pathname.includes("reports") ? "#ffffff75" : "#000"} />
                    <span>Reports</span>
                </Link >

            </div >
            {/* end sidebar content */}

        </div >
    );
}

export default Sidebar;