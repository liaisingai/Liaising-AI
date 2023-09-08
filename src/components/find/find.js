import "./find.css";
import { memo, useCallback, useState, useEffect } from "react";
import { API } from "aws-amplify";
import { listProfiles, listRequirements } from "../../graphql/queries";

const Find = () => {
  const [input, setInput] = useState('');

  const fetchProfiles = async () => {
    const apiData = await API.graphql({ query: listProfiles });
    const profilesFromAPI = apiData.data.listProfiles.items;
    console.log("profilesFromAPI", profilesFromAPI)
  }

  const fetchRequirements = async () => {
    const apiData = await API.graphql({ query: listRequirements });
    const requirementsFromAPI = apiData.data.listRequirements.items;
    console.log("requirementsFromAPI", requirementsFromAPI)
  }

  const handleTextChange = useCallback((e) => {
    setInput(e?.target?.value);
  }, [])

  const handleKeyDown = useCallback((e) => {
    if (e?.keyCode === 13) {
      e.preventDefault();
      setInput("");
    }
  }, []);

  const handleClick = useCallback(() => {
    setInput("");
  }, []);

  useEffect(() => {
    fetchProfiles();
    fetchRequirements();
  }, [])

  return (
    <div className="App !overflow-hidden !h-screen">
      <div className='px-2 w-full flex flex-col'>
        <div className='flex justify-center mt-[12px]'>
          <div className='rounded-xl bg-white md:w-[75%] lg:w-[85%] max-h-[calc(100vh-320px)] min-h-[calc(100vh-320px)] customBorder w-full text-center py-4 pl-4 overflow-auto'>
            <p className='truncate text-md font-medium md:pr-1.5 pr-1.5'>Loading Profiles...</p>
            <div className="border shadow rounded-md p-4 m-6 shadow-slate-100">
              <div className="animate-pulse flex space-x-4">
                <div className="rounded-full bg-slate-200 h-10 w-10"></div>
                <div className="flex-1 space-y-6 py-1">
                  <div className="h-2 bg-slate-200 rounded"></div>
                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                      <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                    </div>
                    <div className="h-2 bg-slate-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border shadow rounded-md p-4 m-6 shadow-slate-100">
              <div className="animate-pulse flex space-x-4">
                <div className="rounded-full bg-slate-200 h-10 w-10"></div>
                <div className="flex-1 space-y-6 py-1">
                  
                  <div className="h-2 bg-slate-200 rounded"></div>
                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                      <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                    </div>
                    <div className="h-2 bg-slate-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border shadow rounded-md p-4 m-6 shadow-slate-100">
              <div className="animate-pulse flex space-x-4">
                <div className="rounded-full bg-slate-200 h-10 w-10"></div>
                <div className="flex-1 space-y-6 py-1">
                  <div className="h-2 bg-slate-200 rounded"></div>
                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                      <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                    </div>
                    <div className="h-2 bg-slate-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border shadow rounded-md p-4 m-6 shadow-slate-100">
              <div className="animate-pulse flex space-x-4">
                <div className="rounded-full bg-slate-200 h-10 w-10"></div>
                <div className="flex-1 space-y-6 py-1">
                  <div className="h-2 bg-slate-200 rounded"></div>
                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                      <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                    </div>
                    <div className="h-2 bg-slate-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border shadow rounded-md p-4 m-6 shadow-slate-100">
              <div className="animate-pulse flex space-x-4">
                <div className="rounded-full bg-slate-200 h-10 w-10"></div>
                <div className="flex-1 space-y-6 py-1">
                  <div className="h-2 bg-slate-200 rounded"></div>
                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                      <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                    </div>
                    <div className="h-2 bg-slate-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center absolute top-[calc(100vh-122px)] w-full md:mt-8 mt-9 px-3'>
          <div className='absolute w-full md:w-[70%] lg:w-[80%] flex flex-col customBorder py-[10px] md:py-4 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-xl shadow-xs dark:shadow-xs'>
            <textarea className='overflow-y-hidden outline-none max-h-52 md:h-6 h-7 m-0 w-full resize-none border-0 bg-transparent p-0 pr-10 focus:ring-0 focus-visible:ring-0 dark:bg-transparent md:pr-12 pl-3 md:pl-0' placeholder="Send a message" onChange={handleTextChange} onKeyDown={handleKeyDown} value={input}></textarea>
            <button className={`absolute p-1 rounded-md md:bottom-3 md:p-2 md:right-3 dark:hover:bg-gray-900 dark:disabled:hover:bg-transparent right-2 disabled:text-gray-400 enabled:bg-brand-purple text-white bottom-1.5 transition-colors disabled:opacity-40 ${input !== "" && 'enableButton'}`} disabled={input === ""} onClick={handleClick} >
              <span data-state="closed"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className="h-4 w-4 m-1 md:m-0" strokeWidth="2"><path d="M.5 1.163A1 1 0 0 1 1.97.28l12.868 6.837a1 1 0 0 1 0 1.766L1.969 15.72A1 1 0 0 1 .5 14.836V10.33a1 1 0 0 1 .816-.983L8.5 8 1.316 6.653A1 1 0 0 1 .5 5.67V1.163Z" fill="currentColor"></path></svg></span>
            </button>
          </div>
      </div>
    </div>
  )
}

export default memo(Find);