import { useState, memo } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import { API, Storage } from "aws-amplify";
import { createProfiles as createProfileMutation } from "../../graphql/mutations";
import { profileValidationSchema } from "../../helpers/util.js";

const Profile = () => {
    const [formEvent, setFormEvent] = useState(null);
    const [formSuccess, setFormSuccess] = useState(false);
    const initialValues = {
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
        file: "",
    };

    const handleSubmit = async  (values, { setSubmitting, resetForm }) => {
        const form = new FormData(formEvent.target);
        const file = form.get("file");
        await API.graphql({
          query: createProfileMutation,
          variables: {
              input: {
                  ...values,
              },
          },
        });
        await Storage.put(`Profiles/${values.file.substr(12, values.file.length)}`, file);
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
        <div className="rounded-xl bg-white md:w-[75%] lg:w-[85%] md:max-h-[calc(100vh-300px)] md:min-h-[calc(100vh-300px)] max-h-[calc(100vh-250px)] min-h-[calc(100vh-250px)] mx-3 md:m-[12px] customBorder w-full text-center p-4 !pr-0 overflow-auto overflow-x-hidden">
          <Formik
              initialValues={initialValues}
              validationSchema={profileValidationSchema}
              onSubmit={handleSubmit}
          >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                isSubmitting,
                handleSubmit,
                /* and other goodies */
            }) => (
              <form className="w-full" onSubmit={handleFormSubmit(handleSubmit)}>
                {formSuccess && <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
                    <span className="font-medium">Success!</span> Your profile has been submitted.
                </div>}
                <div className="flex flex-col md:flex-row -mx-3 md:mb-4">
                  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                      <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 required"
                          htmlFor="grid-first-name"
                      >
                          First Name
                      </label>
                      <Field
                          type="text"
                          id="firstName"
                          name="firstName"
                          placeholder=""
                          className="appearance-none block w-full bg-gray-100 text-gray-900 text-md border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                      />
                      <ErrorMessage
                          name="firstName"
                          component="div"
                          className="text-red-400 text-sm pl-4 pt-1 justify-left text-left"
                      />
                  </div>
                  <div className="w-full md:w-1/3 px-3 mb-6">
                      <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 required"
                          htmlFor="grid-last-name"
                      >
                          Last Name
                      </label>
                      <Field
                          type="text"
                          id="lastName"
                          name="lastName"
                          placeholder=""
                          className="appearance-none block w-full bg-gray-100 text-gray-900 text-md border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                      />
                      <ErrorMessage
                          name="lastName"
                          component="div"
                          className="text-red-400 text-sm pl-4 pt-1 justify-left text-left"
                      />
                  </div>
                  <div className="w-full md:w-1/3 px-3 mb-6">
                      <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 required"
                          htmlFor="grid-last-name"
                      >
                          Email Address
                      </label>
                      <Field
                          type="text"
                          id="emailAddress"
                          name="emailAddress"
                          placeholder=""
                          className="appearance-none block w-full bg-gray-100 text-gray-900 text-md border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                      />
                      <ErrorMessage
                          name="emailAddress"
                          component="div"
                          className="text-red-400 text-sm pl-4 pt-1 justify-left text-left"
                      />{" "}
                  </div>
                </div>
                <div className="flex flex-col md:flex-row -mx-3 md:mb-4">
                  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                      <label
                          className="required block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-first-name"
                      >
                          Phone Number
                      </label>
                      <Field
                          type="text"
                          id="phoneNumber"
                          name="phoneNumber"
                          placeholder=""
                          className="appearance-none block w-full bg-gray-100 text-gray-900 text-md border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                      />
                      <ErrorMessage
                          name="phoneNumber"
                          component="div"
                          className="text-red-400 text-sm pl-4 pt-1 justify-left text-left"
                      />{" "}
                  </div>
                  <div className="w-full md:w-1/3 px-3 mb-6">
                      <label
                          className="required block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-last-name"
                      >
                          Skill Set
                      </label>
                      <Field
                          type="text"
                          id="skillSet"
                          name="skillSet"
                          placeholder=""
                          className="appearance-none block w-full bg-gray-100 text-gray-900 text-md border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                      />
                      <ErrorMessage
                          name="skillSet"
                          component="div"
                          className="text-red-400 text-sm pl-4 pt-1 justify-left text-left"
                      />{" "}
                  </div>
                  <div className="w-full md:w-1/3 px-3 mb-6">
                      <label
                          className="required block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-last-name"
                      >
                          Visa Status
                      </label>
                      <Field
                          type="text"
                          id="visaStatus"
                          name="visaStatus"
                          placeholder=""
                          className="appearance-none block w-full bg-gray-100 text-gray-900 text-md border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                      />
                      <ErrorMessage
                          name="visaStatus"
                          component="div"
                          className="text-red-400 text-sm pl-4 pt-1 justify-left text-left"
                      />{" "}
                  </div>
                </div>
                <div className="flex flex-col md:flex-row -mx-3 md:mb-4">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label
                            className="required block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-first-name"
                        >
                            Years of Expr. in US
                        </label>
                        <Field
                            type="text"
                            id="yearsOfExperienceInUs"
                            name="yearsOfExperienceInUs"
                            placeholder=""
                            className="appearance-none block w-full bg-gray-100 text-gray-900 text-md border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        />
                        <ErrorMessage
                            name="yearsOfExperienceInUs"
                            component="div"
                            className="text-red-400 text-sm pl-4 pt-1 justify-left text-left"
                        />{" "}
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6">
                        <label
                            className="required block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-last-name"
                        >
                            International Experience
                        </label>
                        <Field
                            type="text"
                            id="yearsOfExperienceInternational"
                            name="yearsOfExperienceInternational"
                            placeholder=""
                            className="appearance-none block w-full bg-gray-100 text-gray-900 text-md border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        />
                        <ErrorMessage
                            name="yearsOfExperienceInternational"
                            component="div"
                            className="text-red-400 text-sm pl-4 pt-1 justify-left text-left"
                        />{" "}
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6">
                        <label
                            className="required block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-last-name"
                        >
                            Currently works at
                        </label>
                        <Field
                            type="text"
                            id="currentlyWorksAt"
                            name="currentlyWorksAt"
                            placeholder=""
                            className="appearance-none block w-full bg-gray-100 text-gray-900 text-md border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        />
                        <ErrorMessage
                            name="currentlyWorksAt"
                            component="div"
                            className="text-red-400 text-sm pl-4 pt-1 justify-left text-left"
                        />{" "}
                    </div>
                </div>
                <div className="flex flex-col md:flex-row -mx-3 md:mb-4">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label
                            className="required block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-first-name"
                        >
                            LinkedIn URL
                        </label>
                        <Field
                            type="text"
                            id="linkedInURL"
                            name="linkedInURL"
                            placeholder=""
                            className="appearance-none block w-full bg-gray-100 text-gray-900 text-md border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        />
                        <ErrorMessage
                            name="linkedInURL"
                            component="div"
                            className="text-red-400 text-sm pl-4 pt-1 justify-left text-left"
                        />{" "}
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
                            References
                        </button>
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label
                            className="required block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-first-name"
                        >
                            Certifications
                        </label>
                        <Field
                            type="text"
                            id="certifications"
                            name="certifications"
                            placeholder=""
                            className="appearance-none block w-full bg-gray-100 text-gray-900 text-md border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        />
                        <ErrorMessage
                            name="certifications"
                            component="div"
                            className="text-red-400 text-sm pl-4 pt-1 justify-left text-left"
                        />{" "}
                    </div>
                </div>
                <div className="flex flex-col md:flex-row -mx-3 md:mb-[48px] mb-7">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label
                            className="required block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-city"
                        >
                            City
                        </label>
                        <Field
                            type="text"
                            id="city"
                            name="city"
                            placeholder=""
                            className="appearance-none block w-full bg-gray-100 text-gray-900 text-md border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        />
                        <ErrorMessage
                            name="city"
                            component="div"
                            className="text-red-400 text-sm pl-4 pt-1 justify-left text-left"
                        />{" "}
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label
                            className="required block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-state"
                        >
                            State
                        </label>
                        <Field
                            type="text"
                            id="state"
                            name="state"
                            placeholder=""
                            className="appearance-none block w-full bg-gray-100 text-gray-900 text-md border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        />
                        <ErrorMessage
                            name="state"
                            component="div"
                            className="text-red-400 text-sm pl-4 pt-1 justify-left text-left"
                        />{" "}
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label
                            className="required block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-zip"
                        >
                            Zip
                        </label>
                        <Field
                            type="text"
                            id="zip"
                            name="zip"
                            placeholder=""
                            className="appearance-none block w-full bg-gray-100 text-gray-900 text-md border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        />
                        <ErrorMessage
                            name="zip"
                            component="div"
                            className="text-red-400 text-sm pl-4 pt-1 justify-left text-left"
                        />{" "}
                    </div>
                </div>
                <div className="flex flex-col md:flex-row  -mx-3 mb-0 mt-4">
                    <div className="w-full md:w-1/2 px-3 mb-6">
                        <label
                            className="required block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-last-name"
                        >
                            Upload Resume
                        </label>
                        <div className="flex items-center space-x-6 justify-center">
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
                    <div className="w-full md:w-1/2 px-3 mb-6">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-last-name"
                        ></label>
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

export default memo(Profile);
