// import React, { useState, useEffect, useCallback, lazy, Suspense } from "react";
import React, { useState, useCallback, lazy, Suspense } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
// import { API, Storage } from 'aws-amplify';
import {
  Button,
  Heading,
  Text,
  View,
  useTheme,
  useAuthenticator,
  Authenticator,
} from '@aws-amplify/ui-react';
// import { listNotes } from "./graphql/queries";
// import {
//   createNote as createNoteMutation,
//   deleteNote as deleteNoteMutation,
// } from "./graphql/mutations";
const Profiles = lazy(() =>  import("./components/profiles/profiles"));
const Requirements = lazy(() =>  import("./components/requirements/requirements"));
const Settings = lazy(() =>  import("./components/settings/settings"));

const components = {
  Header() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <h1 className='companyName py-6 text-gray-600 hover:text-gray-900 cursor-pointer'>LIAISING AI</h1>
      </View>
    );
  },

  Footer() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Text color={tokens.colors.neutral[80]}>
          &copy; All Rights Reserved
        </Text>
      </View>
    );
  },

  SignIn: {
    Header() {
      const { tokens } = useTheme();

      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Sign in to your account
        </Heading>
      );
    },
    Footer() {
      const { toResetPassword } = useAuthenticator();

      return (
        <View textAlign="center">
          <Button
            fontWeight="normal"
            onClick={toResetPassword}
            size="small"
            variation="link"
          >
            Reset Password
          </Button>
        </View>
      );
    },
  },

  SignUp: {
    Header() {
      const { tokens } = useTheme();

      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Create a new account
        </Heading>
      );
    },
    Footer() {
      const { toSignIn } = useAuthenticator();

      return (
        <View textAlign="center">
          <Button
            fontWeight="normal"
            onClick={toSignIn}
            size="small"
            variation="link"
          >
            Back to Sign In
          </Button>
        </View>
      );
    },
  },
  ConfirmSignUp: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  SetupTOTP: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  ConfirmSignIn: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  ResetPassword: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  ConfirmResetPassword: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
};

const formFields = {
  signIn: {
    username: {
      placeholder: 'Enter your email',
    },
  },
  signUp: {
    password: {
      label: 'Password:',
      placeholder: 'Enter your Password:',
      isRequired: false,
      order: 2,
    },
    confirm_password: {
      label: 'Confirm Password:',
      order: 1,
    },
  },
  forceNewPassword: {
    password: {
      placeholder: 'Enter your Password:',
    },
  },
  resetPassword: {
    username: {
      placeholder: 'Enter your email:',
    },
  },
  confirmResetPassword: {
    confirmation_code: {
      placeholder: 'Enter your Confirmation Code:',
      label: 'New Label',
      isRequired: false,
    },
    confirm_password: {
      placeholder: 'Enter your Password Please:',
    },
  },
  setupTOTP: {
    QR: {
      totpIssuer: 'test issuer',
      totpUsername: 'amplify_qr_test_user',
    },
    confirmation_code: {
      label: 'New Label',
      placeholder: 'Enter your Confirmation Code:',
      isRequired: false,
    },
  },
  confirmSignIn: {
    confirmation_code: {
      label: 'New Label',
      placeholder: 'Enter your Confirmation Code:',
      isRequired: false,
    },
  },
};



const App = ({ signOut }) => {
  // const [notes, setNotes] = useState([]);
  const [buttonIndex, setButtonIndex] = useState(0);
  const [input, setInput] = useState('');
  const selectedStateClasses = 'p-2 group/button relative flex w-full items-center justify-center gap-1 rounded-lg border py-3 outline-none transition-opacity duration-100 sm:w-auto sm:min-w-[148px] md:gap-2 md:py-2.5 border-black/10 bg-white text-gray-900 shadow-[0_1px_7px_0px_rgba(0,0,0,0.06)] hover:!opacity-100 dark:border-[#4E4F60] dark:bg-gray-700 dark:text-gray-100 bg-gradient-to-br from-purple-600 to-violet-500 text-white';
  const defaultClass = 'p-2 group/button relative flex w-full items-center justify-center gap-1 rounded-lg border py-3 outline-none transition-opacity duration-100 sm:w-auto sm:min-w-[148px] md:gap-2 md:py-2.5 border-transparent text-gray-500 hover:text-gray-800 hover:dark:text-gray-100';
  const handleButtonClick = useCallback((id) => {
    setButtonIndex(id);
  }, [])
  
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


  // useEffect(() => {
  //   fetchNotes();
  // }, []);

  // async function fetchNotes() {
  //   const apiData = await API.graphql({ query: listNotes });
  //   const notesFromAPI = apiData.data.listNotes.items;
  //   await Promise.all(
  //     notesFromAPI.map(async (note) => {
  //       if (note.image) {
  //         const url = await Storage.get(note.name);
  //         note.image = url;
  //       }
  //       return note;
  //     })
  //   );
  //   setNotes(notesFromAPI);
  // }

  // async function createNote(event) {
  //   event.preventDefault();
  //   const form = new FormData(event.target);
  //   const image = form.get("image");
  //   const data = {
  //     name: form.get("name"),
  //     description: form.get("description"),
  //     image: image.name,
  //   };
  //   if (!!data.image) await Storage.put(data.name, image);
  //   await API.graphql({
  //     query: createNoteMutation,
  //     variables: { input: data },
  //   });
  //   fetchNotes();
  //   event.target.reset();
  // }
  
  // async function deleteNote({ id, name }) {
  //   const newNotes = notes.filter((note) => note.id !== id);
  //   setNotes(newNotes);
  //   await Storage.remove(name);
  //   await API.graphql({
  //     query: deleteNoteMutation,
  //     variables: { input: { id } },
  //   });
  // }
  

  return (
    <Authenticator formFields={formFields} components={components} socialProviders={['amazon', 'apple', 'facebook', 'google']}>
      {({ signOut }) => {
        return (
          <div className="App !overflow-hidden !h-screen">
            <h1 className='companyName py-6 text-gray-600 hover:text-gray-900 cursor-pointer'>LIAISING AI</h1>
            <div className='px-2 w-full flex flex-col'>
              <div className='relative flex flex-col items-stretch justify-center gap-2 sm:items-center mb-6 overflow-hidden'>
                <div className='relative flex rounded-xl p-[12px] text-gray-900 bg-white shadow-slate-100 border customBorder'>
                  <ul className="flex w-full list-none gap-1 sm:w-auto">
                    <li className='group/toggle w-full  h-full'>
                      <button className='w-full cursor-pointer' onClick={() => handleButtonClick(0)}>
                        <div className={buttonIndex === 0 ? selectedStateClasses : defaultClass}>
                          <span className='truncate text-md font-medium md:pr-1.5 pr-1.5'>Find GPT</span>
                        </div>
                      </button>
                    </li>
                    <li className='group/toggle w-full h-full'>
                      <button className='w-full cursor-pointer'  onClick={() => handleButtonClick(1)}>
                        <div className={buttonIndex === 1 ? selectedStateClasses : defaultClass}>
                          <span className='truncate text-md font-medium md:pr-1.5 pr-1.5'>Profiles</span>
                        </div>
                      </button>
                    </li>
                    <li className='group/toggle w-full'>
                      <button className='w-full cursor-pointer h-full'  onClick={() => handleButtonClick(2)}>
                        <div className={buttonIndex === 2 ? selectedStateClasses : defaultClass}>
                          <span className='truncate text-md font-medium md:pr-1.5 pr-1.5'>Requirements</span>
                        </div>
                      </button>
                    </li>
                    <li className='group/toggle w-full'>
                      <button className='w-full cursor-pointer h-full'  onClick={() => handleButtonClick(3)}>
                        <div className={buttonIndex === 3 ? selectedStateClasses : defaultClass}>
                          <span className='truncate text-md font-medium md:pr-1.5 pr-1.5'>Account Settings</span>
                        </div>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              {buttonIndex === 0 && <div className='flex justify-center mt-[12px]'>
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
              </div>}
            </div>
            {buttonIndex === 0 && <div className='flex justify-center absolute top-[calc(100vh-122px)] w-full md:mt-8 mt-9 px-3'>
                <div className='absolute w-full md:w-[70%] lg:w-[80%] flex flex-col customBorder py-[10px] md:py-4 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-xl shadow-xs dark:shadow-xs'>
                  <textarea className='overflow-y-hidden outline-none max-h-52 md:h-6 h-7 m-0 w-full resize-none border-0 bg-transparent p-0 pr-10 focus:ring-0 focus-visible:ring-0 dark:bg-transparent md:pr-12 pl-3 md:pl-0' placeholder="Send a message" onChange={handleTextChange} onKeyDown={handleKeyDown} value={input}></textarea>
                  <button className={`absolute p-1 rounded-md md:bottom-3 md:p-2 md:right-3 dark:hover:bg-gray-900 dark:disabled:hover:bg-transparent right-2 disabled:text-gray-400 enabled:bg-brand-purple text-white bottom-1.5 transition-colors disabled:opacity-40 ${input !== "" && 'enableButton'}`} disabled={input === ""} onClick={handleClick} >
                    <span data-state="closed"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className="h-4 w-4 m-1 md:m-0" strokeWidth="2"><path d="M.5 1.163A1 1 0 0 1 1.97.28l12.868 6.837a1 1 0 0 1 0 1.766L1.969 15.72A1 1 0 0 1 .5 14.836V10.33a1 1 0 0 1 .816-.983L8.5 8 1.316 6.653A1 1 0 0 1 .5 5.67V1.163Z" fill="currentColor"></path></svg></span>
                  </button>
                </div>
            </div>}
            {buttonIndex === 1 && <Suspense fallback="Upload Profiles..."><Profiles /></Suspense>}
            {buttonIndex === 2 && <Suspense fallback="Upload Requirements..."><Requirements /></Suspense>}
            {buttonIndex === 3 && <Suspense fallback="Loading Settings..."><Settings signOut={signOut} /></Suspense>}
          </div>
        )
      }}
    </Authenticator>
  );
};

export default App;