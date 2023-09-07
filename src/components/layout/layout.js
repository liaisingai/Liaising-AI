import React from "react";
import "@aws-amplify/ui-react/styles.css";
import { useAuthenticator } from '@aws-amplify/ui-react';
import { Outlet, useNavigate, useLocation } from "react-router-dom";

const Layout = () => {
    const { route } = useAuthenticator((context) => [
        context.route,
        context.signOut,
    ]);
    const navigate = useNavigate();
    const location = useLocation();
    const selectedStateClasses = 'p-2 group/button relative flex w-full items-center justify-center gap-1 rounded-lg border py-3 outline-none transition-opacity duration-100 sm:w-auto sm:min-w-[148px] md:gap-2 md:py-2.5 border-black/10 bg-white text-gray-900 shadow-[0_1px_7px_0px_rgba(0,0,0,0.06)] hover:!opacity-100 dark:border-[#4E4F60] dark:bg-gray-700 dark:text-gray-100 bg-gradient-to-br from-purple-600 to-violet-500 !text-white';
    const defaultClass = 'p-2 group/button relative flex w-full items-center justify-center gap-1 rounded-lg border py-3 outline-none transition-opacity duration-100 sm:w-auto sm:min-w-[148px] md:gap-2 md:py-2.5 border-transparent text-gray-500 hover:text-gray-800 hover:dark:text-gray-100';
    return (
        <div className="App !overflow-hidden !h-screen">
            <h1 className="companyName py-6 text-gray-600 hover:text-gray-900 cursor-pointer">
                LIAISING AI
            </h1>
            <div className="px-2 w-full flex flex-col">
                <div className="relative flex flex-col items-stretch justify-center gap-2 sm:items-center mb-6 overflow-hidden">
                    <div className="relative flex rounded-xl p-[12px] text-gray-900 bg-white shadow-slate-100 border customBorder">
                        <ul className="flex w-full list-none gap-1 sm:w-auto overflow-auto">
                            <li className="group/toggle w-full  h-full">
                                <button
                                    className="w-full cursor-pointer"
                                    onClick={() => navigate("/find")}
                                    disabled={route !== 'authenticated' || location.pathname === "/subscriptions"}
                                >
                                    <div className={`${location.pathname === "/find" ? selectedStateClasses : defaultClass} ${(route !== 'authenticated' || location.pathname === "/subscriptions") && "!cursor-not-allowed !disabled:opacity-75 hover:bg-gray-100"}`}>
                                        <span className="truncate text-md font-medium md:pr-1.5 pr-1.5">
                                            Find GPT
                                        </span>
                                    </div>
                                </button>
                            </li>
                            <li className="group/toggle w-full h-full">
                                <button
                                    className="w-full cursor-pointer"
                                    onClick={() => navigate("/profiles")}
                                    disabled={route !== 'authenticated' || location.pathname === "/subscriptions"}
                                >
                                    <div className={`${location.pathname === "/profiles" ? selectedStateClasses : defaultClass} ${(route !== 'authenticated' || location.pathname === "/subscriptions") && "!cursor-not-allowed !disabled:opacity-75 hover:bg-gray-100"}`}>
                                        <span className="truncate text-md font-medium md:pr-1.5 pr-1.5">
                                            Profiles
                                        </span>
                                    </div>
                                </button>
                            </li>
                            <li className="group/toggle w-full">
                                <button
                                    className="w-full cursor-pointer h-full"
                                    onClick={() => navigate("/requirements")}
                                    disabled={route !== 'authenticated' || location.pathname === "/subscriptions"}
                                >
                                    <div className={`${location.pathname === "/requirements" ? selectedStateClasses : defaultClass} ${(route !== 'authenticated' || location.pathname === "/subscriptions") && "!cursor-not-allowed !disabled:opacity-75 hover:bg-gray-100"}`}>
                                        <span className="truncate text-md font-medium md:pr-1.5 pr-1.5">
                                            Requirements
                                        </span>
                                    </div>
                                </button>
                            </li>
                            <li className="group/toggle w-full">
                                <button
                                    className="w-full cursor-pointer h-full"
                                    onClick={() => navigate("/settings")}
                                    disabled={route !== 'authenticated' || location.pathname === "/subscriptions"}
                                >
                                    <div className={`${["/", "/settings", "/login", "/subscriptions"].indexOf(location.pathname) > -1 ? selectedStateClasses : defaultClass} ${(route !== 'authenticated' || location.pathname === "/subscriptions") && "!cursor-not-allowed !disabled:opacity-75 hover:bg-gray-100"}`}>
                                        <span className="truncate text-md font-medium md:pr-1.5 pr-1.5">
                                            Account Settings
                                        </span>
                                    </div>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    );
};

export default Layout;
