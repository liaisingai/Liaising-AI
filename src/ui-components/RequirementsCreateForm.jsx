/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { fetchByPath, validateField } from "./utils";
import { API } from "aws-amplify";
import { createRequirements } from "../graphql/mutations";
export default function RequirementsCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
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
    dateRequirementPosted: "",
    jobTitle: "",
    skillSet: "",
    billingRate: "",
    requirements: "",
  };
  const [recruitingCompany, setRecruitingCompany] = React.useState(
    initialValues.recruitingCompany
  );
  const [recruiterName, setRecruiterName] = React.useState(
    initialValues.recruiterName
  );
  const [recruiterPhoneNumber, setRecruiterPhoneNumber] = React.useState(
    initialValues.recruiterPhoneNumber
  );
  const [recruiterEmailAddress, setRecruiterEmailAddress] = React.useState(
    initialValues.recruiterEmailAddress
  );
  const [recruiterLinkedInUrl, setRecruiterLinkedInUrl] = React.useState(
    initialValues.recruiterLinkedInUrl
  );
  const [clientName, setClientName] = React.useState(initialValues.clientName);
  const [clientCareersUrl, setClientCareersUrl] = React.useState(
    initialValues.clientCareersUrl
  );
  const [typeOfJob, setTypeOfJob] = React.useState(initialValues.typeOfJob);
  const [clientRecruiterEmail, setClientRecruiterEmail] = React.useState(
    initialValues.clientRecruiterEmail
  );
  const [clientRecruiterLinkedInUrl, setClientRecruiterLinkedInUrl] =
    React.useState(initialValues.clientRecruiterLinkedInUrl);
  const [clientsCity, setClientsCity] = React.useState(
    initialValues.clientsCity
  );
  const [clientsState, setClientsState] = React.useState(
    initialValues.clientsState
  );
  const [clientsZip, setClientsZip] = React.useState(initialValues.clientsZip);
  const [dateRequirementPosted, setDateRequirementPosted] = React.useState(
    initialValues.dateRequirementPosted
  );
  const [jobTitle, setJobTitle] = React.useState(initialValues.jobTitle);
  const [skillSet, setSkillSet] = React.useState(initialValues.skillSet);
  const [billingRate, setBillingRate] = React.useState(
    initialValues.billingRate
  );
  const [requirements, setRequirements] = React.useState(
    initialValues.requirements
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setRecruitingCompany(initialValues.recruitingCompany);
    setRecruiterName(initialValues.recruiterName);
    setRecruiterPhoneNumber(initialValues.recruiterPhoneNumber);
    setRecruiterEmailAddress(initialValues.recruiterEmailAddress);
    setRecruiterLinkedInUrl(initialValues.recruiterLinkedInUrl);
    setClientName(initialValues.clientName);
    setClientCareersUrl(initialValues.clientCareersUrl);
    setTypeOfJob(initialValues.typeOfJob);
    setClientRecruiterEmail(initialValues.clientRecruiterEmail);
    setClientRecruiterLinkedInUrl(initialValues.clientRecruiterLinkedInUrl);
    setClientsCity(initialValues.clientsCity);
    setClientsState(initialValues.clientsState);
    setClientsZip(initialValues.clientsZip);
    setDateRequirementPosted(initialValues.dateRequirementPosted);
    setJobTitle(initialValues.jobTitle);
    setSkillSet(initialValues.skillSet);
    setBillingRate(initialValues.billingRate);
    setRequirements(initialValues.requirements);
    setErrors({});
  };
  const validations = {
    recruitingCompany: [],
    recruiterName: [],
    recruiterPhoneNumber: [{ type: "Phone" }],
    recruiterEmailAddress: [{ type: "Email" }],
    recruiterLinkedInUrl: [],
    clientName: [],
    clientCareersUrl: [],
    typeOfJob: [],
    clientRecruiterEmail: [],
    clientRecruiterLinkedInUrl: [],
    clientsCity: [],
    clientsState: [],
    clientsZip: [],
    dateRequirementPosted: [],
    jobTitle: [],
    skillSet: [],
    billingRate: [],
    requirements: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          recruitingCompany,
          recruiterName,
          recruiterPhoneNumber,
          recruiterEmailAddress,
          recruiterLinkedInUrl,
          clientName,
          clientCareersUrl,
          typeOfJob,
          clientRecruiterEmail,
          clientRecruiterLinkedInUrl,
          clientsCity,
          clientsState,
          clientsZip,
          dateRequirementPosted,
          jobTitle,
          skillSet,
          billingRate,
          requirements,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await API.graphql({
            query: createRequirements,
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "RequirementsCreateForm")}
      {...rest}
    >
      <TextField
        label="Recruiting company"
        isRequired={false}
        isReadOnly={false}
        value={recruitingCompany}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              recruitingCompany: value,
              recruiterName,
              recruiterPhoneNumber,
              recruiterEmailAddress,
              recruiterLinkedInUrl,
              clientName,
              clientCareersUrl,
              typeOfJob,
              clientRecruiterEmail,
              clientRecruiterLinkedInUrl,
              clientsCity,
              clientsState,
              clientsZip,
              dateRequirementPosted,
              jobTitle,
              skillSet,
              billingRate,
              requirements,
            };
            const result = onChange(modelFields);
            value = result?.recruitingCompany ?? value;
          }
          if (errors.recruitingCompany?.hasError) {
            runValidationTasks("recruitingCompany", value);
          }
          setRecruitingCompany(value);
        }}
        onBlur={() =>
          runValidationTasks("recruitingCompany", recruitingCompany)
        }
        errorMessage={errors.recruitingCompany?.errorMessage}
        hasError={errors.recruitingCompany?.hasError}
        {...getOverrideProps(overrides, "recruitingCompany")}
      ></TextField>
      <TextField
        label="Recruiter name"
        isRequired={false}
        isReadOnly={false}
        value={recruiterName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              recruitingCompany,
              recruiterName: value,
              recruiterPhoneNumber,
              recruiterEmailAddress,
              recruiterLinkedInUrl,
              clientName,
              clientCareersUrl,
              typeOfJob,
              clientRecruiterEmail,
              clientRecruiterLinkedInUrl,
              clientsCity,
              clientsState,
              clientsZip,
              dateRequirementPosted,
              jobTitle,
              skillSet,
              billingRate,
              requirements,
            };
            const result = onChange(modelFields);
            value = result?.recruiterName ?? value;
          }
          if (errors.recruiterName?.hasError) {
            runValidationTasks("recruiterName", value);
          }
          setRecruiterName(value);
        }}
        onBlur={() => runValidationTasks("recruiterName", recruiterName)}
        errorMessage={errors.recruiterName?.errorMessage}
        hasError={errors.recruiterName?.hasError}
        {...getOverrideProps(overrides, "recruiterName")}
      ></TextField>
      <TextField
        label="Recruiter phone number"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={recruiterPhoneNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              recruitingCompany,
              recruiterName,
              recruiterPhoneNumber: value,
              recruiterEmailAddress,
              recruiterLinkedInUrl,
              clientName,
              clientCareersUrl,
              typeOfJob,
              clientRecruiterEmail,
              clientRecruiterLinkedInUrl,
              clientsCity,
              clientsState,
              clientsZip,
              dateRequirementPosted,
              jobTitle,
              skillSet,
              billingRate,
              requirements,
            };
            const result = onChange(modelFields);
            value = result?.recruiterPhoneNumber ?? value;
          }
          if (errors.recruiterPhoneNumber?.hasError) {
            runValidationTasks("recruiterPhoneNumber", value);
          }
          setRecruiterPhoneNumber(value);
        }}
        onBlur={() =>
          runValidationTasks("recruiterPhoneNumber", recruiterPhoneNumber)
        }
        errorMessage={errors.recruiterPhoneNumber?.errorMessage}
        hasError={errors.recruiterPhoneNumber?.hasError}
        {...getOverrideProps(overrides, "recruiterPhoneNumber")}
      ></TextField>
      <TextField
        label="Recruiter email address"
        isRequired={false}
        isReadOnly={false}
        value={recruiterEmailAddress}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              recruitingCompany,
              recruiterName,
              recruiterPhoneNumber,
              recruiterEmailAddress: value,
              recruiterLinkedInUrl,
              clientName,
              clientCareersUrl,
              typeOfJob,
              clientRecruiterEmail,
              clientRecruiterLinkedInUrl,
              clientsCity,
              clientsState,
              clientsZip,
              dateRequirementPosted,
              jobTitle,
              skillSet,
              billingRate,
              requirements,
            };
            const result = onChange(modelFields);
            value = result?.recruiterEmailAddress ?? value;
          }
          if (errors.recruiterEmailAddress?.hasError) {
            runValidationTasks("recruiterEmailAddress", value);
          }
          setRecruiterEmailAddress(value);
        }}
        onBlur={() =>
          runValidationTasks("recruiterEmailAddress", recruiterEmailAddress)
        }
        errorMessage={errors.recruiterEmailAddress?.errorMessage}
        hasError={errors.recruiterEmailAddress?.hasError}
        {...getOverrideProps(overrides, "recruiterEmailAddress")}
      ></TextField>
      <TextField
        label="Recruiter linked in url"
        isRequired={false}
        isReadOnly={false}
        value={recruiterLinkedInUrl}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              recruitingCompany,
              recruiterName,
              recruiterPhoneNumber,
              recruiterEmailAddress,
              recruiterLinkedInUrl: value,
              clientName,
              clientCareersUrl,
              typeOfJob,
              clientRecruiterEmail,
              clientRecruiterLinkedInUrl,
              clientsCity,
              clientsState,
              clientsZip,
              dateRequirementPosted,
              jobTitle,
              skillSet,
              billingRate,
              requirements,
            };
            const result = onChange(modelFields);
            value = result?.recruiterLinkedInUrl ?? value;
          }
          if (errors.recruiterLinkedInUrl?.hasError) {
            runValidationTasks("recruiterLinkedInUrl", value);
          }
          setRecruiterLinkedInUrl(value);
        }}
        onBlur={() =>
          runValidationTasks("recruiterLinkedInUrl", recruiterLinkedInUrl)
        }
        errorMessage={errors.recruiterLinkedInUrl?.errorMessage}
        hasError={errors.recruiterLinkedInUrl?.hasError}
        {...getOverrideProps(overrides, "recruiterLinkedInUrl")}
      ></TextField>
      <TextField
        label="Client name"
        isRequired={false}
        isReadOnly={false}
        value={clientName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              recruitingCompany,
              recruiterName,
              recruiterPhoneNumber,
              recruiterEmailAddress,
              recruiterLinkedInUrl,
              clientName: value,
              clientCareersUrl,
              typeOfJob,
              clientRecruiterEmail,
              clientRecruiterLinkedInUrl,
              clientsCity,
              clientsState,
              clientsZip,
              dateRequirementPosted,
              jobTitle,
              skillSet,
              billingRate,
              requirements,
            };
            const result = onChange(modelFields);
            value = result?.clientName ?? value;
          }
          if (errors.clientName?.hasError) {
            runValidationTasks("clientName", value);
          }
          setClientName(value);
        }}
        onBlur={() => runValidationTasks("clientName", clientName)}
        errorMessage={errors.clientName?.errorMessage}
        hasError={errors.clientName?.hasError}
        {...getOverrideProps(overrides, "clientName")}
      ></TextField>
      <TextField
        label="Client careers url"
        isRequired={false}
        isReadOnly={false}
        value={clientCareersUrl}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              recruitingCompany,
              recruiterName,
              recruiterPhoneNumber,
              recruiterEmailAddress,
              recruiterLinkedInUrl,
              clientName,
              clientCareersUrl: value,
              typeOfJob,
              clientRecruiterEmail,
              clientRecruiterLinkedInUrl,
              clientsCity,
              clientsState,
              clientsZip,
              dateRequirementPosted,
              jobTitle,
              skillSet,
              billingRate,
              requirements,
            };
            const result = onChange(modelFields);
            value = result?.clientCareersUrl ?? value;
          }
          if (errors.clientCareersUrl?.hasError) {
            runValidationTasks("clientCareersUrl", value);
          }
          setClientCareersUrl(value);
        }}
        onBlur={() => runValidationTasks("clientCareersUrl", clientCareersUrl)}
        errorMessage={errors.clientCareersUrl?.errorMessage}
        hasError={errors.clientCareersUrl?.hasError}
        {...getOverrideProps(overrides, "clientCareersUrl")}
      ></TextField>
      <TextField
        label="Type of job"
        isRequired={false}
        isReadOnly={false}
        value={typeOfJob}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              recruitingCompany,
              recruiterName,
              recruiterPhoneNumber,
              recruiterEmailAddress,
              recruiterLinkedInUrl,
              clientName,
              clientCareersUrl,
              typeOfJob: value,
              clientRecruiterEmail,
              clientRecruiterLinkedInUrl,
              clientsCity,
              clientsState,
              clientsZip,
              dateRequirementPosted,
              jobTitle,
              skillSet,
              billingRate,
              requirements,
            };
            const result = onChange(modelFields);
            value = result?.typeOfJob ?? value;
          }
          if (errors.typeOfJob?.hasError) {
            runValidationTasks("typeOfJob", value);
          }
          setTypeOfJob(value);
        }}
        onBlur={() => runValidationTasks("typeOfJob", typeOfJob)}
        errorMessage={errors.typeOfJob?.errorMessage}
        hasError={errors.typeOfJob?.hasError}
        {...getOverrideProps(overrides, "typeOfJob")}
      ></TextField>
      <TextField
        label="Client recruiter email"
        isRequired={false}
        isReadOnly={false}
        value={clientRecruiterEmail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              recruitingCompany,
              recruiterName,
              recruiterPhoneNumber,
              recruiterEmailAddress,
              recruiterLinkedInUrl,
              clientName,
              clientCareersUrl,
              typeOfJob,
              clientRecruiterEmail: value,
              clientRecruiterLinkedInUrl,
              clientsCity,
              clientsState,
              clientsZip,
              dateRequirementPosted,
              jobTitle,
              skillSet,
              billingRate,
              requirements,
            };
            const result = onChange(modelFields);
            value = result?.clientRecruiterEmail ?? value;
          }
          if (errors.clientRecruiterEmail?.hasError) {
            runValidationTasks("clientRecruiterEmail", value);
          }
          setClientRecruiterEmail(value);
        }}
        onBlur={() =>
          runValidationTasks("clientRecruiterEmail", clientRecruiterEmail)
        }
        errorMessage={errors.clientRecruiterEmail?.errorMessage}
        hasError={errors.clientRecruiterEmail?.hasError}
        {...getOverrideProps(overrides, "clientRecruiterEmail")}
      ></TextField>
      <TextField
        label="Client recruiter linked in url"
        isRequired={false}
        isReadOnly={false}
        value={clientRecruiterLinkedInUrl}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              recruitingCompany,
              recruiterName,
              recruiterPhoneNumber,
              recruiterEmailAddress,
              recruiterLinkedInUrl,
              clientName,
              clientCareersUrl,
              typeOfJob,
              clientRecruiterEmail,
              clientRecruiterLinkedInUrl: value,
              clientsCity,
              clientsState,
              clientsZip,
              dateRequirementPosted,
              jobTitle,
              skillSet,
              billingRate,
              requirements,
            };
            const result = onChange(modelFields);
            value = result?.clientRecruiterLinkedInUrl ?? value;
          }
          if (errors.clientRecruiterLinkedInUrl?.hasError) {
            runValidationTasks("clientRecruiterLinkedInUrl", value);
          }
          setClientRecruiterLinkedInUrl(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "clientRecruiterLinkedInUrl",
            clientRecruiterLinkedInUrl
          )
        }
        errorMessage={errors.clientRecruiterLinkedInUrl?.errorMessage}
        hasError={errors.clientRecruiterLinkedInUrl?.hasError}
        {...getOverrideProps(overrides, "clientRecruiterLinkedInUrl")}
      ></TextField>
      <TextField
        label="Clients city"
        isRequired={false}
        isReadOnly={false}
        value={clientsCity}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              recruitingCompany,
              recruiterName,
              recruiterPhoneNumber,
              recruiterEmailAddress,
              recruiterLinkedInUrl,
              clientName,
              clientCareersUrl,
              typeOfJob,
              clientRecruiterEmail,
              clientRecruiterLinkedInUrl,
              clientsCity: value,
              clientsState,
              clientsZip,
              dateRequirementPosted,
              jobTitle,
              skillSet,
              billingRate,
              requirements,
            };
            const result = onChange(modelFields);
            value = result?.clientsCity ?? value;
          }
          if (errors.clientsCity?.hasError) {
            runValidationTasks("clientsCity", value);
          }
          setClientsCity(value);
        }}
        onBlur={() => runValidationTasks("clientsCity", clientsCity)}
        errorMessage={errors.clientsCity?.errorMessage}
        hasError={errors.clientsCity?.hasError}
        {...getOverrideProps(overrides, "clientsCity")}
      ></TextField>
      <TextField
        label="Clients state"
        isRequired={false}
        isReadOnly={false}
        value={clientsState}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              recruitingCompany,
              recruiterName,
              recruiterPhoneNumber,
              recruiterEmailAddress,
              recruiterLinkedInUrl,
              clientName,
              clientCareersUrl,
              typeOfJob,
              clientRecruiterEmail,
              clientRecruiterLinkedInUrl,
              clientsCity,
              clientsState: value,
              clientsZip,
              dateRequirementPosted,
              jobTitle,
              skillSet,
              billingRate,
              requirements,
            };
            const result = onChange(modelFields);
            value = result?.clientsState ?? value;
          }
          if (errors.clientsState?.hasError) {
            runValidationTasks("clientsState", value);
          }
          setClientsState(value);
        }}
        onBlur={() => runValidationTasks("clientsState", clientsState)}
        errorMessage={errors.clientsState?.errorMessage}
        hasError={errors.clientsState?.hasError}
        {...getOverrideProps(overrides, "clientsState")}
      ></TextField>
      <TextField
        label="Clients zip"
        isRequired={false}
        isReadOnly={false}
        value={clientsZip}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              recruitingCompany,
              recruiterName,
              recruiterPhoneNumber,
              recruiterEmailAddress,
              recruiterLinkedInUrl,
              clientName,
              clientCareersUrl,
              typeOfJob,
              clientRecruiterEmail,
              clientRecruiterLinkedInUrl,
              clientsCity,
              clientsState,
              clientsZip: value,
              dateRequirementPosted,
              jobTitle,
              skillSet,
              billingRate,
              requirements,
            };
            const result = onChange(modelFields);
            value = result?.clientsZip ?? value;
          }
          if (errors.clientsZip?.hasError) {
            runValidationTasks("clientsZip", value);
          }
          setClientsZip(value);
        }}
        onBlur={() => runValidationTasks("clientsZip", clientsZip)}
        errorMessage={errors.clientsZip?.errorMessage}
        hasError={errors.clientsZip?.hasError}
        {...getOverrideProps(overrides, "clientsZip")}
      ></TextField>
      <TextField
        label="Date requirement posted"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={dateRequirementPosted}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              recruitingCompany,
              recruiterName,
              recruiterPhoneNumber,
              recruiterEmailAddress,
              recruiterLinkedInUrl,
              clientName,
              clientCareersUrl,
              typeOfJob,
              clientRecruiterEmail,
              clientRecruiterLinkedInUrl,
              clientsCity,
              clientsState,
              clientsZip,
              dateRequirementPosted: value,
              jobTitle,
              skillSet,
              billingRate,
              requirements,
            };
            const result = onChange(modelFields);
            value = result?.dateRequirementPosted ?? value;
          }
          if (errors.dateRequirementPosted?.hasError) {
            runValidationTasks("dateRequirementPosted", value);
          }
          setDateRequirementPosted(value);
        }}
        onBlur={() =>
          runValidationTasks("dateRequirementPosted", dateRequirementPosted)
        }
        errorMessage={errors.dateRequirementPosted?.errorMessage}
        hasError={errors.dateRequirementPosted?.hasError}
        {...getOverrideProps(overrides, "dateRequirementPosted")}
      ></TextField>
      <TextField
        label="Job title"
        isRequired={false}
        isReadOnly={false}
        value={jobTitle}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              recruitingCompany,
              recruiterName,
              recruiterPhoneNumber,
              recruiterEmailAddress,
              recruiterLinkedInUrl,
              clientName,
              clientCareersUrl,
              typeOfJob,
              clientRecruiterEmail,
              clientRecruiterLinkedInUrl,
              clientsCity,
              clientsState,
              clientsZip,
              dateRequirementPosted,
              jobTitle: value,
              skillSet,
              billingRate,
              requirements,
            };
            const result = onChange(modelFields);
            value = result?.jobTitle ?? value;
          }
          if (errors.jobTitle?.hasError) {
            runValidationTasks("jobTitle", value);
          }
          setJobTitle(value);
        }}
        onBlur={() => runValidationTasks("jobTitle", jobTitle)}
        errorMessage={errors.jobTitle?.errorMessage}
        hasError={errors.jobTitle?.hasError}
        {...getOverrideProps(overrides, "jobTitle")}
      ></TextField>
      <TextField
        label="Skill set"
        isRequired={false}
        isReadOnly={false}
        value={skillSet}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              recruitingCompany,
              recruiterName,
              recruiterPhoneNumber,
              recruiterEmailAddress,
              recruiterLinkedInUrl,
              clientName,
              clientCareersUrl,
              typeOfJob,
              clientRecruiterEmail,
              clientRecruiterLinkedInUrl,
              clientsCity,
              clientsState,
              clientsZip,
              dateRequirementPosted,
              jobTitle,
              skillSet: value,
              billingRate,
              requirements,
            };
            const result = onChange(modelFields);
            value = result?.skillSet ?? value;
          }
          if (errors.skillSet?.hasError) {
            runValidationTasks("skillSet", value);
          }
          setSkillSet(value);
        }}
        onBlur={() => runValidationTasks("skillSet", skillSet)}
        errorMessage={errors.skillSet?.errorMessage}
        hasError={errors.skillSet?.hasError}
        {...getOverrideProps(overrides, "skillSet")}
      ></TextField>
      <TextField
        label="Billing rate"
        isRequired={false}
        isReadOnly={false}
        value={billingRate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              recruitingCompany,
              recruiterName,
              recruiterPhoneNumber,
              recruiterEmailAddress,
              recruiterLinkedInUrl,
              clientName,
              clientCareersUrl,
              typeOfJob,
              clientRecruiterEmail,
              clientRecruiterLinkedInUrl,
              clientsCity,
              clientsState,
              clientsZip,
              dateRequirementPosted,
              jobTitle,
              skillSet,
              billingRate: value,
              requirements,
            };
            const result = onChange(modelFields);
            value = result?.billingRate ?? value;
          }
          if (errors.billingRate?.hasError) {
            runValidationTasks("billingRate", value);
          }
          setBillingRate(value);
        }}
        onBlur={() => runValidationTasks("billingRate", billingRate)}
        errorMessage={errors.billingRate?.errorMessage}
        hasError={errors.billingRate?.hasError}
        {...getOverrideProps(overrides, "billingRate")}
      ></TextField>
      <TextField
        label="Requirements"
        isRequired={false}
        isReadOnly={false}
        value={requirements}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              recruitingCompany,
              recruiterName,
              recruiterPhoneNumber,
              recruiterEmailAddress,
              recruiterLinkedInUrl,
              clientName,
              clientCareersUrl,
              typeOfJob,
              clientRecruiterEmail,
              clientRecruiterLinkedInUrl,
              clientsCity,
              clientsState,
              clientsZip,
              dateRequirementPosted,
              jobTitle,
              skillSet,
              billingRate,
              requirements: value,
            };
            const result = onChange(modelFields);
            value = result?.requirements ?? value;
          }
          if (errors.requirements?.hasError) {
            runValidationTasks("requirements", value);
          }
          setRequirements(value);
        }}
        onBlur={() => runValidationTasks("requirements", requirements)}
        errorMessage={errors.requirements?.errorMessage}
        hasError={errors.requirements?.hasError}
        {...getOverrideProps(overrides, "requirements")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
