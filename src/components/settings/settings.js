const Settings = ({ signOut }) => {
    return (
      <div className='flex justify-center'>
        <div className='rounded-xl bg-white md:w-[75%] lg:w-[85%] md:max-h-[calc(100vh-300px)] md:min-h-[calc(100vh-300px)] max-h-[calc(100vh-250px)] min-h-[calc(100vh-250px)] mx-3 md:m-[12px] customBorder w-full text-center p-4 !pr-0 overflow-auto overflow-x-hidden'>
            <div className="w-full px-3 mb-2 mt-6 md:mb-0">
                <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                >
                    &nbsp;
                </label>
                <button
                    type="button"
                    className="w-1/2 outline-auto text-white bg-gradient-to-br from-purple-600 to-violet-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-3.5 text-center mr-2 mb-2"
                >
                    Delete Account
                </button>
            </div>
            <div className="w-full px-3 mb-2 md:mb-0">
                <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                >
                    &nbsp;
                </label>
                <button
                    type="button"
                    onClick={signOut}
                    className="w-1/2 outline-auto text-white bg-gradient-to-br from-purple-600 to-violet-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-3.5 text-center mr-2 mb-2"
                >
                    Sign Out
                </button>
            </div>
        </div>
      </div>
    )
}

export default Settings;