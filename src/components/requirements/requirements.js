import { useState } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import { API, Storage } from "aws-amplify";
import { requirementsValidationSchema } from "../../helpers/util.js";
import { createRequirements as createRequirementsMutation } from "../../graphql/mutations";

const Requirements = () => {
    const [formEvent, setFormEvent] = useState(null);
    const [formSuccess, setFormSuccess] = useState(false);
    const initialValues = {
        recruitingCompany: "",
        recruiterName: "",
        recruiterPhoneNumber: "",
        recruiterEmailAddress: "",
        recruiterLinkedInUrl: "",
        clientName: "",
        clientCareersUrl: "",
        typeOfJob: "",
        clientRecruiterEmail: "",
        clientRecruiterLinkedInUrl: "",
        clientsCity: "",
        clientsState: "",
        clientsZip: "",
        dateRequirementPosted: null, // You can initialize this with a default date if needed
        jobTitle: "",
        skillSet: "",
        billingRate: "",
        requirements: "",
        file: ""
    };

    const handleSubmit = async  (values, { setSubmitting, resetForm }) => {
        console.log('formEvent &&&', formEvent)
        const form = new FormData(formEvent.target);
        const file = form.get("file");
        await API.graphql({
          query: createRequirementsMutation,
          variables: {
              input: {
                  ...values,
              },
          },
        });
        if (!!values.file) await Storage.put(`Requirements/${values.file.substr(12, values.file.length)}`, file);
        setFormSuccess(true);
        setSubmitting(false);
        resetForm();
    };

    const handleFormSubmit = (submitForm) =>
    (e) => {
      e.preventDefault()
      e.persist()
      setFormEvent(e)
      submitForm()
    }

    return (
        <div className="flex justify-center">
            <div className="rounded-xl bg-white md:w-[75%] lg:w-[85%] md:max-h-[calc(100vh-250px)] md:min-h-[calc(100vh-250px)] lg:max-h-[calc(100vh-250px)] lg:min-h-[calc(100vh-250px)] xl:max-h-[calc(100vh-240px)] xl:min-h-[calc(100vh-240px)] max-h-[calc(100vh-250px)] min-h-[calc(100vh-250px)] mx-3 md:m-[12px] customBorder w-full text-center p-4 !pr-0 overflow-auto overflow-x-hidden">
                <Formik
                    initialValues={initialValues}
                    validationSchema={requirementsValidationSchema}
                    onSubmit={handleSubmit}
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
                        <form className="w-full" onSubmit={handleFormSubmit(handleSubmit)}>
                            {formSuccess && <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
                                <span className="font-medium">Success!</span> Your requirement has been submitted.
                            </div>}
                            <div className="flex flex-col md:flex-row -mx-3 md:mb-4 lg:mb-3">
                                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label
                                        className="required block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="grid-first-name"
                                    >
                                        Recruiter Name
                                    </label>
                                    <Field
                                        type="text"
                                        id="recruiterName"
                                        name="recruiterName"
                                        placeholder=""
                                        className="appearance-none block w-full bg-gray-200 text-gray-900 text-md border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                    />
                                    <ErrorMessage
                                        name="recruiterName"
                                        component="div"
                                        className="text-red-400 text-sm pl-4 pt-1 justify-left text-left"
                                    />
                                </div>
                                <div className="w-full md:w-1/3 px-3 mb-6">
                                    <label
                                        className="required block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="grid-last-name"
                                    >
                                        Recruiting Company
                                    </label>
                                    <Field
                                        type="text"
                                        id="recruitingCompany"
                                        name="recruitingCompany"
                                        placeholder=""
                                        className="appearance-none block w-full bg-gray-200 text-gray-900 text-md border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                    />
                                    <ErrorMessage
                                        name="recruitingCompany"
                                        component="div"
                                        className="text-red-400 text-sm pl-4 pt-1 justify-left text-left"
                                    />
                                </div>
                                <div className="w-full md:w-1/3 px-3 mb-6">
                                    <label
                                        className="required block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="grid-last-name"
                                    >
                                        Recruiter Phone Number
                                    </label>
                                    <Field
                                        type="text"
                                        id="recruiterPhoneNumber"
                                        name="recruiterPhoneNumber"
                                        placeholder=""
                                        className="appearance-none block w-full bg-gray-200 text-gray-900 text-md border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                    />
                                    <ErrorMessage
                                        name="recruiterPhoneNumber"
                                        component="div"
                                        className="text-red-400 text-sm pl-4 pt-1 justify-left text-left"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row -mx-3 md:mb-4 lg:mb-3">
                                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label
                                        className="required block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="grid-first-name"
                                    >
                                        Recruiter Email Address
                                    </label>
                                    <Field
                                        type="text"
                                        id="recruiterEmailAddress"
                                        name="recruiterEmailAddress"
                                        placeholder=""
                                        className="appearance-none block w-full bg-gray-200 text-gray-900 text-md border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                    />
                                    <ErrorMessage
                                        name="recruiterEmailAddress"
                                        component="div"
                                        className="text-red-400 text-sm pl-4 pt-1 justify-left text-left"
                                    />
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
                                        disabled
                                        className="cursor-not-allowed disabled:opacity-75 w-full outline-auto text-white bg-gradient-to-br from-purple-600 to-violet-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-3.5 text-center mr-2 mb-2"
                                    >
                                        Add a Impl. Partner
                                    </button>
                                </div>
                                <div className="w-full md:w-1/3 px-3 mb-6">
                                    <label
                                        className="required block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="grid-last-name"
                                    >
                                        Client Name
                                    </label>
                                    <Field
                                        type="text"
                                        id="clientName"
                                        name="clientName"
                                        placeholder=""
                                        className="appearance-none block w-full bg-gray-200 text-gray-900 text-md border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                    />
                                    <ErrorMessage
                                        name="clientName"
                                        component="div"
                                        className="text-red-400 text-sm pl-4 pt-1 justify-left text-left"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row -mx-3 md:mb-4 lg:mb-3">
                                <div className="w-full md:w-1/3 px-3 mb-6">
                                    <label
                                        className="required block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="grid-last-name"
                                    >
                                        Client Careers URL
                                    </label>
                                    <Field
                                        type="text"
                                        id="clientCareersUrl"
                                        name="clientCareersUrl"
                                        placeholder=""
                                        className="appearance-none block w-full bg-gray-200 text-gray-900 text-md border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                    />
                                    <ErrorMessage
                                        name="clientCareersUrl"
                                        component="div"
                                        className="text-red-400 text-sm pl-4 pt-1 justify-left text-left"
                                    />
                                </div>
                                <div className="w-full md:w-1/3 px-3 mb-6">
                                    <label
                                        className="required block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="grid-last-name"
                                    >
                                        Type of Job (Ct/Ft)
                                    </label>
                                    <Field
                                        type="text"
                                        id="typeOfJob"
                                        name="typeOfJob"
                                        placeholder=""
                                        className="appearance-none block w-full bg-gray-200 text-gray-900 text-md border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                    />
                                    <ErrorMessage
                                        name="typeOfJob"
                                        component="div"
                                        className="text-red-400 text-sm pl-4 pt-1 justify-left text-left"
                                    />
                                </div>
                                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label
                                        className="required block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="grid-first-name"
                                    >
                                        Recruiter LinkedIn URL
                                    </label>
                                    <Field
                                        type="text"
                                        id="recruiterLinkedInUrl"
                                        name="recruiterLinkedInUrl"
                                        placeholder=""
                                        className="appearance-none block w-full bg-gray-200 text-gray-900 text-md border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                    />
                                    <ErrorMessage
                                        name="recruiterLinkedInUrl"
                                        component="div"
                                        className="text-red-400 text-sm pl-4 pt-1 justify-left text-left"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row -mx-3 md:mb-4 lg:mb-3">
                                <div className="w-full md:w-1/3 px-3 mb-6">
                                    <label
                                        className="required block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="grid-last-name"
                                    >
                                        Client's Recruiter Email
                                    </label>
                                    <Field
                                        type="text"
                                        id="clientRecruiterEmail"
                                        name="clientRecruiterEmail"
                                        placeholder=""
                                        className="appearance-none block w-full bg-gray-200 text-gray-900 text-md border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                    />
                                    <ErrorMessage
                                        name="clientRecruiterEmail"
                                        component="div"
                                        className="text-red-400 text-sm pl-4 pt-1 justify-left text-left"
                                    />
                                </div>
                                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label
                                        className="required block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="grid-first-name"
                                    >
                                        Client's Re. LinkedIn URL
                                    </label>
                                    <Field
                                        type="text"
                                        id="clientRecruiterLinkedInUrl"
                                        name="clientRecruiterLinkedInUrl"
                                        placeholder=""
                                        className="appearance-none block w-full bg-gray-200 text-gray-900 text-md border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                    />
                                    <ErrorMessage
                                        name="clientRecruiterLinkedInUrl"
                                        component="div"
                                        className="text-red-400 text-sm pl-4 pt-1 justify-left text-left"
                                    />
                                </div>
                                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label
                                        className="required block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="grid-city"
                                    >
                                        Client's City
                                    </label>
                                    <Field
                                        type="text"
                                        id="clientsCity"
                                        name="clientsCity"
                                        placeholder=""
                                        className="appearance-none block w-full bg-gray-200 text-gray-900 text-md border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                    />
                                    <ErrorMessage
                                        name="clientsCity"
                                        component="div"
                                        className="text-red-400 text-sm pl-4 pt-1 justify-left text-left"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row -mx-3 md:mb-[48px] lg:mb-3 mb-7">
                                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label
                                        className="required block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="grid-state"
                                    >
                                        Client's State
                                    </label>
                                    <Field
                                        type="text"
                                        id="clientsState"
                                        name="clientsState"
                                        placeholder=""
                                        className="appearance-none block w-full bg-gray-200 text-gray-900 text-md border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                    />
                                    <ErrorMessage
                                        name="clientsState"
                                        component="div"
                                        className="text-red-400 text-sm pl-4 pt-1 justify-left text-left"
                                    />
                                </div>
                                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label
                                        className="required block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="grid-zip"
                                    >
                                        Client's Zip
                                    </label>
                                    <Field
                                        type="text"
                                        id="clientsZip"
                                        name="clientsZip"
                                        placeholder=""
                                        className="appearance-none block w-full bg-gray-200 text-gray-900 text-md border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                    />
                                    <ErrorMessage
                                        name="clientsZip"
                                        component="div"
                                        className="text-red-400 text-sm pl-4 pt-1 justify-left text-left"
                                    />
                                </div>
                                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label
                                        className="required block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="grid-first-name"
                                    >
                                        Date Requirement Posted
                                    </label>
                                    <Field
                                        type="text"
                                        id="dateRequirementPosted"
                                        name="dateRequirementPosted"
                                        placeholder="YYYY-MM-DD"
                                        className="appearance-none block w-full bg-gray-200 text-gray-900 text-md border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                    />
                                    <ErrorMessage
                                        name="dateRequirementPosted"
                                        component="div"
                                        className="text-red-400 text-sm pl-4 pt-1 justify-left text-left"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row -mx-3 md:mb-4 lg:mb-3">
                                <div className="w-full md:w-1/3 px-3 mb-6">
                                    <label
                                        className="required block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="grid-last-name"
                                    >
                                        Job Title
                                    </label>
                                    <Field
                                        type="text"
                                        id="jobTitle"
                                        name="jobTitle"
                                        placeholder=""
                                        className="appearance-none block w-full bg-gray-200 text-gray-900 text-md border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                    />
                                    <ErrorMessage
                                        name="jobTitle"
                                        component="div"
                                        className="text-red-400 text-sm pl-4 pt-1 justify-left text-left"
                                    />
                                </div>
                                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label
                                        className="required block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="grid-first-name"
                                    >
                                        Skill Set
                                    </label>
                                    <Field
                                        type="text"
                                        id="skillSet"
                                        name="skillSet"
                                        placeholder=""
                                        className="appearance-none block w-full bg-gray-200 text-gray-900 text-md border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                    />
                                    <ErrorMessage
                                        name="skillSet"
                                        component="div"
                                        className="text-red-400 text-sm pl-4 pt-1 justify-left text-left"
                                    />
                                </div>
                                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label
                                        className="required block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="grid-first-name"
                                    >
                                        Billing Rate (Hour or Salary)
                                    </label>
                                    <Field
                                        type="text"
                                        id="billingRate"
                                        name="billingRate"
                                        placeholder=""
                                        className="appearance-none block w-full bg-gray-200 text-gray-900 text-md border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                    />
                                    <ErrorMessage
                                        name="billingRate"
                                        component="div"
                                        className="text-red-400 text-sm pl-4 pt-1 justify-left text-left"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row -mx-3 md:mb-4 lg:mb-3">
                                <div className="w-full md:w-1/3 px-3 mb-6">
                                    <label
                                        className="required block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="grid-last-name"
                                    >
                                        LinkedIn URL of Manager (Client)
                                    </label>
                                    <Field
                                        type="text"
                                        id="managerLinkedInUrl"
                                        name="managerLinkedInUrl"
                                        placeholder=""
                                        className="appearance-none block w-full bg-gray-200 text-gray-900 text-md border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                    />
                                    <ErrorMessage
                                        name="managerLinkedInUrl"
                                        component="div"
                                        className="text-red-400 text-sm pl-4 pt-1 justify-left text-left"
                                    />
                                </div>
                                <div className="w-full px-3 mb-6">
                                    <label
                                        className="required block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="grid-last-name"
                                    >
                                        Enter Requirements
                                    </label>
                                    <Field
                                        as="textarea"
                                        id="requirements"
                                        name="requirements"
                                        placeholder=""
                                        className="appearance-none h-[46px] block w-full bg-gray-200 text-gray-900 text-md border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                    />
                                </div>
                                <div className="w-full md:w-1/3 px-3 mb-6">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="grid-last-name"
                                    >
                                        Upload Requirements
                                    </label>
                                    <div className="flex items-center space-x-6 justify-center mb-6">
                                        <label className="block">
                                        <Field
                                            type="file"
                                            id="file"
                                            name="file"
                                            placeholder=""
                                            value={values.file}
                                            className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:text-sm file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
                                        />
                                        <ErrorMessage
                                            name="file"
                                            component="div"
                                            className="text-red-400 text-sm pl-4 pt-1  justify-left text-left"
                                        />{" "}
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row -mx-3 md:mb-4 lg:mb-3 justify-center">
                                <div className="w-full md:w-1/2 px-3 mb-6">
                                    <button
                                        type="submit"
                                        className="w-1/2 outline-auto text-white bg-gradient-to-br from-purple-600 to-violet-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default Requirements;
