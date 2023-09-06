import "./profiles.css";
import { Formik } from 'formik';
// import { API, Storage } from 'aws-amplify';
import { API } from 'aws-amplify';
import {
  createProfiles as createProfileMutation,
} from "../../graphql/mutations";

const Profile = () => {
    const createProfileMethod = async(event) => {
      event.preventDefault();
      // const form = new FormData(event.target);
      // const image = form.get("image");
      const modelFields = {
        firstName: "Sai",
        lastName: "Sai",
        emailAddress: "scr@test.com",
        phoneNumber: "571-524-2266",
        skillSet: "Sai",
        visaStatus: "Sai",
        yearsOfExperienceInUs: "Sai",
        yearsOfExperienceInternational: "Sai",
        currentlyWorksAt: "Sai",
        linkedInURL: "Sai",
        certifications: "Sai",
        city: "Sai",
        state: "Sai",
        zip: "Sai",
        resume: "Sai"
      };
      // if (!!data.resume) await Storage.put(data.name, resume);
      await API.graphql({
        query: createProfileMutation,
        variables: {
          input: {
            ...modelFields,
          },
        },
      });
      // event.target.reset();
    }
    
    return (
      <div className='flex justify-center'>
        <div className='rounded-xl bg-white md:w-[75%] lg:w-[85%] md:max-h-[calc(100vh-300px)] md:min-h-[calc(100vh-300px)] max-h-[calc(100vh-250px)] min-h-[calc(100vh-250px)] mx-3 md:m-[12px] customBorder w-full text-center p-4 !pr-0 overflow-auto overflow-x-hidden'>
            <Formik
              initialValues={{ 
                firstName: "",
                lastName: "",
                emailAddress: "",
                phoneNumber: "",
                skillSet: "",
                visaStatus: "",
                yearsOfExperienceInUs: "",
                yearsOfExperienceInternational: "",
                currentlyWorksAt: "",
                linkedInURL: "",
                certifications: "",
                city: "",
                state: "",
                zip: "",
                resume: "" 
              }}
              validate={values => {
                const errors = {};
                if (!values.email) {
                  errors.email = 'Required';
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = 'Invalid email address';
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <form className="w-full">
                  <div className="flex flex-col md:flex-row -mx-3 md:mb-4">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                        First Name
                      </label>
                      <input className="appearance-none block w-full bg-gray-200 text-gray-900 text-md border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" />
                     {/* {false && <p className="text-red-500 text-xs italic">Please fill out this field.</p>} */}
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                        Last Name
                      </label>
                      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="" />
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                        Email Address
                      </label>
                      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="" />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row -mx-3 md:mb-4">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                        Phone Number
                      </label>
                      <input className="appearance-none block w-full bg-gray-200 text-gray-900 text-md border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" />
                     {/* {false && <p className="text-red-500 text-xs italic">Please fill out this field.</p>} */}
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                        Skill Set
                      </label>
                      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="" />
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                        Visa Status
                      </label>
                      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="" />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row -mx-3 md:mb-4">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                        Years of Expr. in US
                      </label>
                      <input className="appearance-none block w-full bg-gray-200 text-gray-900 text-md border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" />
                     {/* {false && <p className="text-red-500 text-xs italic">Please fill out this field.</p>} */}
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                        International Experience
                      </label>
                      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="" />
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                        Currently works at
                      </label>
                      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="" />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row -mx-3 md:mb-4">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                        LinkedIn URL
                      </label>
                      <input className="appearance-none block w-full bg-gray-200 text-gray-900 text-md border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" />
                     {/* {false && <p className="text-red-500 text-xs italic">Please fill out this field.</p>} */}
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-first-name"
                        >
                            &nbsp;
                        </label>
                        <button
                            type="button"
                            className="w-full outline-auto text-white bg-gradient-to-br from-purple-600 to-violet-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-3.5 text-center mr-2 mb-2"
                        >
                            References
                        </button>
                        {/* {false && <p className="text-red-500 text-xs italic">Please fill out this field.</p>} */}
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                        Certifications
                      </label>
                      <input className="appearance-none block w-full bg-gray-200 text-gray-900 text-md border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" />
                     {/* {false && <p className="text-red-500 text-xs italic">Please fill out this field.</p>} */}
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row -mx-3 md:mb-[48px] mb-7">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                        City
                      </label>
                      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="" />
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                        State
                      </label>
                      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" type="text" placeholder="" />
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
                        Zip
                      </label>
                      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="" />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row  -mx-3 mb-0 mt-4">
                    <div className="w-full md:w-1/2 px-3 mb-6">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                        Upload Resume
                      </label>
                      <div className="flex items-center space-x-6 justify-center">
                        <label className="block">
                          <input type="file" className="block w-full text-sm text-slate-500
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full file:border-0
                            file:text-sm file:font-semibold
                            file:bg-violet-50 file:text-violet-700
                            hover:file:bg-violet-100
                          "/>
                        </label>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                        
                      </label>
                      <button type="button" className="w-1/2 outline-auto text-white bg-gradient-to-br from-purple-600 to-violet-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={createProfileMethod}>Submit</button>
                    </div>
                  </div>
                </form>
              )}
            </Formik>
        </div>
      </div>
    )
}

export default Profile;