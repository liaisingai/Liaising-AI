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
import { createProfiles } from "../graphql/mutations";
export default function ProfilesCreateForm(props) {
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
  const [firstName, setFirstName] = React.useState(initialValues.firstName);
  const [lastName, setLastName] = React.useState(initialValues.lastName);
  const [emailAddress, setEmailAddress] = React.useState(
    initialValues.emailAddress
  );
  const [phoneNumber, setPhoneNumber] = React.useState(
    initialValues.phoneNumber
  );
  const [skillSet, setSkillSet] = React.useState(initialValues.skillSet);
  const [visaStatus, setVisaStatus] = React.useState(initialValues.visaStatus);
  const [yearsOfExperienceInUs, setYearsOfExperienceInUs] = React.useState(
    initialValues.yearsOfExperienceInUs
  );
  const [yearsOfExperienceInternational, setYearsOfExperienceInternational] =
    React.useState(initialValues.yearsOfExperienceInternational);
  const [currentlyWorksAt, setCurrentlyWorksAt] = React.useState(
    initialValues.currentlyWorksAt
  );
  const [linkedInURL, setLinkedInURL] = React.useState(
    initialValues.linkedInURL
  );
  const [certifications, setCertifications] = React.useState(
    initialValues.certifications
  );
  const [city, setCity] = React.useState(initialValues.city);
  const [state, setState] = React.useState(initialValues.state);
  const [zip, setZip] = React.useState(initialValues.zip);
  const [file, setFile] = React.useState(initialValues.file);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setFirstName(initialValues.firstName);
    setLastName(initialValues.lastName);
    setEmailAddress(initialValues.emailAddress);
    setPhoneNumber(initialValues.phoneNumber);
    setSkillSet(initialValues.skillSet);
    setVisaStatus(initialValues.visaStatus);
    setYearsOfExperienceInUs(initialValues.yearsOfExperienceInUs);
    setYearsOfExperienceInternational(
      initialValues.yearsOfExperienceInternational
    );
    setCurrentlyWorksAt(initialValues.currentlyWorksAt);
    setLinkedInURL(initialValues.linkedInURL);
    setCertifications(initialValues.certifications);
    setCity(initialValues.city);
    setState(initialValues.state);
    setZip(initialValues.zip);
    setFile(initialValues.file);
    setErrors({});
  };
  const validations = {
    firstName: [],
    lastName: [],
    emailAddress: [{ type: "Email" }],
    phoneNumber: [{ type: "Phone" }],
    skillSet: [],
    visaStatus: [],
    yearsOfExperienceInUs: [],
    yearsOfExperienceInternational: [],
    currentlyWorksAt: [],
    linkedInURL: [],
    certifications: [],
    city: [],
    state: [],
    zip: [],
    file: [],
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
          firstName,
          lastName,
          emailAddress,
          phoneNumber,
          skillSet,
          visaStatus,
          yearsOfExperienceInUs,
          yearsOfExperienceInternational,
          currentlyWorksAt,
          linkedInURL,
          certifications,
          city,
          state,
          zip,
          file,
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
            query: createProfiles,
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
      {...getOverrideProps(overrides, "ProfilesCreateForm")}
      {...rest}
    >
      <TextField
        label="First name"
        isRequired={false}
        isReadOnly={false}
        value={firstName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName: value,
              lastName,
              emailAddress,
              phoneNumber,
              skillSet,
              visaStatus,
              yearsOfExperienceInUs,
              yearsOfExperienceInternational,
              currentlyWorksAt,
              linkedInURL,
              certifications,
              city,
              state,
              zip,
              file,
            };
            const result = onChange(modelFields);
            value = result?.firstName ?? value;
          }
          if (errors.firstName?.hasError) {
            runValidationTasks("firstName", value);
          }
          setFirstName(value);
        }}
        onBlur={() => runValidationTasks("firstName", firstName)}
        errorMessage={errors.firstName?.errorMessage}
        hasError={errors.firstName?.hasError}
        {...getOverrideProps(overrides, "firstName")}
      ></TextField>
      <TextField
        label="Last name"
        isRequired={false}
        isReadOnly={false}
        value={lastName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName: value,
              emailAddress,
              phoneNumber,
              skillSet,
              visaStatus,
              yearsOfExperienceInUs,
              yearsOfExperienceInternational,
              currentlyWorksAt,
              linkedInURL,
              certifications,
              city,
              state,
              zip,
              file,
            };
            const result = onChange(modelFields);
            value = result?.lastName ?? value;
          }
          if (errors.lastName?.hasError) {
            runValidationTasks("lastName", value);
          }
          setLastName(value);
        }}
        onBlur={() => runValidationTasks("lastName", lastName)}
        errorMessage={errors.lastName?.errorMessage}
        hasError={errors.lastName?.hasError}
        {...getOverrideProps(overrides, "lastName")}
      ></TextField>
      <TextField
        label="Email address"
        isRequired={false}
        isReadOnly={false}
        value={emailAddress}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              emailAddress: value,
              phoneNumber,
              skillSet,
              visaStatus,
              yearsOfExperienceInUs,
              yearsOfExperienceInternational,
              currentlyWorksAt,
              linkedInURL,
              certifications,
              city,
              state,
              zip,
              file,
            };
            const result = onChange(modelFields);
            value = result?.emailAddress ?? value;
          }
          if (errors.emailAddress?.hasError) {
            runValidationTasks("emailAddress", value);
          }
          setEmailAddress(value);
        }}
        onBlur={() => runValidationTasks("emailAddress", emailAddress)}
        errorMessage={errors.emailAddress?.errorMessage}
        hasError={errors.emailAddress?.hasError}
        {...getOverrideProps(overrides, "emailAddress")}
      ></TextField>
      <TextField
        label="Phone number"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={phoneNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              emailAddress,
              phoneNumber: value,
              skillSet,
              visaStatus,
              yearsOfExperienceInUs,
              yearsOfExperienceInternational,
              currentlyWorksAt,
              linkedInURL,
              certifications,
              city,
              state,
              zip,
              file,
            };
            const result = onChange(modelFields);
            value = result?.phoneNumber ?? value;
          }
          if (errors.phoneNumber?.hasError) {
            runValidationTasks("phoneNumber", value);
          }
          setPhoneNumber(value);
        }}
        onBlur={() => runValidationTasks("phoneNumber", phoneNumber)}
        errorMessage={errors.phoneNumber?.errorMessage}
        hasError={errors.phoneNumber?.hasError}
        {...getOverrideProps(overrides, "phoneNumber")}
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
              firstName,
              lastName,
              emailAddress,
              phoneNumber,
              skillSet: value,
              visaStatus,
              yearsOfExperienceInUs,
              yearsOfExperienceInternational,
              currentlyWorksAt,
              linkedInURL,
              certifications,
              city,
              state,
              zip,
              file,
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
        label="Visa status"
        isRequired={false}
        isReadOnly={false}
        value={visaStatus}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              emailAddress,
              phoneNumber,
              skillSet,
              visaStatus: value,
              yearsOfExperienceInUs,
              yearsOfExperienceInternational,
              currentlyWorksAt,
              linkedInURL,
              certifications,
              city,
              state,
              zip,
              file,
            };
            const result = onChange(modelFields);
            value = result?.visaStatus ?? value;
          }
          if (errors.visaStatus?.hasError) {
            runValidationTasks("visaStatus", value);
          }
          setVisaStatus(value);
        }}
        onBlur={() => runValidationTasks("visaStatus", visaStatus)}
        errorMessage={errors.visaStatus?.errorMessage}
        hasError={errors.visaStatus?.hasError}
        {...getOverrideProps(overrides, "visaStatus")}
      ></TextField>
      <TextField
        label="Years of experience in us"
        isRequired={false}
        isReadOnly={false}
        value={yearsOfExperienceInUs}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              emailAddress,
              phoneNumber,
              skillSet,
              visaStatus,
              yearsOfExperienceInUs: value,
              yearsOfExperienceInternational,
              currentlyWorksAt,
              linkedInURL,
              certifications,
              city,
              state,
              zip,
              file,
            };
            const result = onChange(modelFields);
            value = result?.yearsOfExperienceInUs ?? value;
          }
          if (errors.yearsOfExperienceInUs?.hasError) {
            runValidationTasks("yearsOfExperienceInUs", value);
          }
          setYearsOfExperienceInUs(value);
        }}
        onBlur={() =>
          runValidationTasks("yearsOfExperienceInUs", yearsOfExperienceInUs)
        }
        errorMessage={errors.yearsOfExperienceInUs?.errorMessage}
        hasError={errors.yearsOfExperienceInUs?.hasError}
        {...getOverrideProps(overrides, "yearsOfExperienceInUs")}
      ></TextField>
      <TextField
        label="Years of experience international"
        isRequired={false}
        isReadOnly={false}
        value={yearsOfExperienceInternational}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              emailAddress,
              phoneNumber,
              skillSet,
              visaStatus,
              yearsOfExperienceInUs,
              yearsOfExperienceInternational: value,
              currentlyWorksAt,
              linkedInURL,
              certifications,
              city,
              state,
              zip,
              file,
            };
            const result = onChange(modelFields);
            value = result?.yearsOfExperienceInternational ?? value;
          }
          if (errors.yearsOfExperienceInternational?.hasError) {
            runValidationTasks("yearsOfExperienceInternational", value);
          }
          setYearsOfExperienceInternational(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "yearsOfExperienceInternational",
            yearsOfExperienceInternational
          )
        }
        errorMessage={errors.yearsOfExperienceInternational?.errorMessage}
        hasError={errors.yearsOfExperienceInternational?.hasError}
        {...getOverrideProps(overrides, "yearsOfExperienceInternational")}
      ></TextField>
      <TextField
        label="Currently works at"
        isRequired={false}
        isReadOnly={false}
        value={currentlyWorksAt}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              emailAddress,
              phoneNumber,
              skillSet,
              visaStatus,
              yearsOfExperienceInUs,
              yearsOfExperienceInternational,
              currentlyWorksAt: value,
              linkedInURL,
              certifications,
              city,
              state,
              zip,
              file,
            };
            const result = onChange(modelFields);
            value = result?.currentlyWorksAt ?? value;
          }
          if (errors.currentlyWorksAt?.hasError) {
            runValidationTasks("currentlyWorksAt", value);
          }
          setCurrentlyWorksAt(value);
        }}
        onBlur={() => runValidationTasks("currentlyWorksAt", currentlyWorksAt)}
        errorMessage={errors.currentlyWorksAt?.errorMessage}
        hasError={errors.currentlyWorksAt?.hasError}
        {...getOverrideProps(overrides, "currentlyWorksAt")}
      ></TextField>
      <TextField
        label="Linked in url"
        isRequired={false}
        isReadOnly={false}
        value={linkedInURL}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              emailAddress,
              phoneNumber,
              skillSet,
              visaStatus,
              yearsOfExperienceInUs,
              yearsOfExperienceInternational,
              currentlyWorksAt,
              linkedInURL: value,
              certifications,
              city,
              state,
              zip,
              file,
            };
            const result = onChange(modelFields);
            value = result?.linkedInURL ?? value;
          }
          if (errors.linkedInURL?.hasError) {
            runValidationTasks("linkedInURL", value);
          }
          setLinkedInURL(value);
        }}
        onBlur={() => runValidationTasks("linkedInURL", linkedInURL)}
        errorMessage={errors.linkedInURL?.errorMessage}
        hasError={errors.linkedInURL?.hasError}
        {...getOverrideProps(overrides, "linkedInURL")}
      ></TextField>
      <TextField
        label="Certifications"
        isRequired={false}
        isReadOnly={false}
        value={certifications}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              emailAddress,
              phoneNumber,
              skillSet,
              visaStatus,
              yearsOfExperienceInUs,
              yearsOfExperienceInternational,
              currentlyWorksAt,
              linkedInURL,
              certifications: value,
              city,
              state,
              zip,
              file,
            };
            const result = onChange(modelFields);
            value = result?.certifications ?? value;
          }
          if (errors.certifications?.hasError) {
            runValidationTasks("certifications", value);
          }
          setCertifications(value);
        }}
        onBlur={() => runValidationTasks("certifications", certifications)}
        errorMessage={errors.certifications?.errorMessage}
        hasError={errors.certifications?.hasError}
        {...getOverrideProps(overrides, "certifications")}
      ></TextField>
      <TextField
        label="City"
        isRequired={false}
        isReadOnly={false}
        value={city}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              emailAddress,
              phoneNumber,
              skillSet,
              visaStatus,
              yearsOfExperienceInUs,
              yearsOfExperienceInternational,
              currentlyWorksAt,
              linkedInURL,
              certifications,
              city: value,
              state,
              zip,
              file,
            };
            const result = onChange(modelFields);
            value = result?.city ?? value;
          }
          if (errors.city?.hasError) {
            runValidationTasks("city", value);
          }
          setCity(value);
        }}
        onBlur={() => runValidationTasks("city", city)}
        errorMessage={errors.city?.errorMessage}
        hasError={errors.city?.hasError}
        {...getOverrideProps(overrides, "city")}
      ></TextField>
      <TextField
        label="State"
        isRequired={false}
        isReadOnly={false}
        value={state}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              emailAddress,
              phoneNumber,
              skillSet,
              visaStatus,
              yearsOfExperienceInUs,
              yearsOfExperienceInternational,
              currentlyWorksAt,
              linkedInURL,
              certifications,
              city,
              state: value,
              zip,
              file,
            };
            const result = onChange(modelFields);
            value = result?.state ?? value;
          }
          if (errors.state?.hasError) {
            runValidationTasks("state", value);
          }
          setState(value);
        }}
        onBlur={() => runValidationTasks("state", state)}
        errorMessage={errors.state?.errorMessage}
        hasError={errors.state?.hasError}
        {...getOverrideProps(overrides, "state")}
      ></TextField>
      <TextField
        label="Zip"
        isRequired={false}
        isReadOnly={false}
        value={zip}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              emailAddress,
              phoneNumber,
              skillSet,
              visaStatus,
              yearsOfExperienceInUs,
              yearsOfExperienceInternational,
              currentlyWorksAt,
              linkedInURL,
              certifications,
              city,
              state,
              zip: value,
              file,
            };
            const result = onChange(modelFields);
            value = result?.zip ?? value;
          }
          if (errors.zip?.hasError) {
            runValidationTasks("zip", value);
          }
          setZip(value);
        }}
        onBlur={() => runValidationTasks("zip", zip)}
        errorMessage={errors.zip?.errorMessage}
        hasError={errors.zip?.hasError}
        {...getOverrideProps(overrides, "zip")}
      ></TextField>
      <TextField
        label="File"
        isRequired={false}
        isReadOnly={false}
        value={file}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              emailAddress,
              phoneNumber,
              skillSet,
              visaStatus,
              yearsOfExperienceInUs,
              yearsOfExperienceInternational,
              currentlyWorksAt,
              linkedInURL,
              certifications,
              city,
              state,
              zip,
              file: value,
            };
            const result = onChange(modelFields);
            value = result?.file ?? value;
          }
          if (errors.file?.hasError) {
            runValidationTasks("file", value);
          }
          setFile(value);
        }}
        onBlur={() => runValidationTasks("file", file)}
        errorMessage={errors.file?.errorMessage}
        hasError={errors.file?.hasError}
        {...getOverrideProps(overrides, "file")}
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
