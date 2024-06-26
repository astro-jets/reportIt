const MessageList = () => {
    return (
        <div className="w-[30%] bg-slate-50 border-r md:flex flex-col hidden">
            <div className="h-16 border-b px-4 flex items-center justify-center space-x-4">
                <div className="px-4 py-4 border-b-4 border-b-blue-500">All</div>
                <div className="px-4 py-4 ">Archived</div>
            </div>
            <div className="h-full">

                <div
                    className="px-5 py-4   flex items-center   cursor-pointer border-l-4 border-l-transparent hover:bg-slate-100">
                    <img src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXJzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500"
                        className="h-12 w-12 border-2 border-white rounded-full" alt="" />
                    <div className="ml-4">
                        <p x-text="user.name" className="text-md font-semibold text-slate-600 m-0 p-0">Yaroslav Zubkp
                        </p>
                        <p className="text-xs text-slate-400 -mt-0.5 font-semibold" x-text="user.email">is is long ipsum
                            avaliable...</p>
                    </div>
                </div>

                <div
                    className="px-5 py-4   flex items-center   cursor-pointer border-l-4 border-l-transparent hover:bg-slate-100">
                    <img src="https://images.unsplash.com/photo-1499887142886-791eca5918cd?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXJzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500 "
                        className="h-12 w-12 border-2 border-white rounded-full" alt="" />
                    <div className="ml-4">
                        <p x-text="user.name" className="text-md font-semibold text-slate-600 m-0 p-0"> Alison Alison
                        </p>
                        <p className="text-xs text-slate-400 -mt-0.5 font-semibold" x-text="user.email">Hello</p>
                    </div>
                </div>

                <div
                    className="px-5 py-4   flex items-center bg-white cursor-pointer border-l-4 border-l-blue-500 border-t border-b">
                    <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500 "
                        className="h-12 w-12 border-2 border-white rounded-full" alt="" />
                    <div className="ml-4">
                        <p x-text="user.name" className="text-md font-semibold text-slate-600 m-0 p-0"> Mircel Jones</p>
                        <p className="text-xs text-slate-400 -mt-0.5 font-semibold" x-text="user.email">Ok, Thanks.</p>
                    </div>
                </div>

                <div
                    className="px-5 py-4   flex items-center   cursor-pointer border-l-4 border-l-transparent hover:bg-slate-100">
                    <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500"
                        className="h-12 w-12 border-2 border-white rounded-full" alt="" />
                    <div className="ml-4">
                        <p x-text="user.name" className="text-md font-semibold text-slate-600 m-0 p-0">Uran Poland</p>
                        <p className="text-xs text-slate-400 -mt-0.5 font-semibold" x-text="user.email">We own hidden
                            lake..</p>
                    </div>
                </div>

                <div
                    className="px-5 py-4   flex items-center   cursor-pointer border-l-4 border-l-transparent hover:bg-slate-100">
                    <img src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXJzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500"
                        className="h-12 w-12 border-2 border-white rounded-full" alt="" />
                    <div className="ml-4">
                        <p x-text="user.name" className="text-md font-semibold text-slate-600 m-0 p-0">Yaroslav Zubkp
                        </p>
                        <p className="text-xs text-slate-400 -mt-0.5 font-semibold" x-text="user.email">is is long ipsum
                            avaliable...</p>
                    </div>
                </div>

                <div
                    className="px-5 py-4   flex items-center   cursor-pointer border-l-4 border-l-transparent hover:bg-slate-100">
                    <img src="https://images.unsplash.com/photo-1499887142886-791eca5918cd?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXJzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500 "
                        className="h-12 w-12 border-2 border-white rounded-full" alt="" />
                    <div className="ml-4">
                        <p x-text="user.name" className="text-md font-semibold text-slate-600 m-0 p-0"> Alison Alison
                        </p>
                        <p className="text-xs text-slate-400 -mt-0.5 font-semibold" x-text="user.email">Hello</p>
                    </div>
                </div>



                {/*  else */}


            </div>



        </div>
    );
}

export default MessageList;