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
import { getProfiles } from "../graphql/queries";
import { updateProfiles } from "../graphql/mutations";
export default function ProfilesUpdateForm(props) {
  const {
    id: idProp,
    profiles: profilesModelProp,
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
    resume: "",
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
  const [resume, setResume] = React.useState(initialValues.resume);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = profilesRecord
      ? { ...initialValues, ...profilesRecord }
      : initialValues;
    setFirstName(cleanValues.firstName);
    setLastName(cleanValues.lastName);
    setEmailAddress(cleanValues.emailAddress);
    setPhoneNumber(cleanValues.phoneNumber);
    setSkillSet(cleanValues.skillSet);
    setVisaStatus(cleanValues.visaStatus);
    setYearsOfExperienceInUs(cleanValues.yearsOfExperienceInUs);
    setYearsOfExperienceInternational(
      cleanValues.yearsOfExperienceInternational
    );
    setCurrentlyWorksAt(cleanValues.currentlyWorksAt);
    setLinkedInURL(cleanValues.linkedInURL);
    setCertifications(cleanValues.certifications);
    setCity(cleanValues.city);
    setState(cleanValues.state);
    setZip(cleanValues.zip);
    setResume(cleanValues.resume);
    setErrors({});
  };
  const [profilesRecord, setProfilesRecord] = React.useState(profilesModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getProfiles,
              variables: { id: idProp },
            })
          )?.data?.getProfiles
        : profilesModelProp;
      setProfilesRecord(record);
    };
    queryData();
  }, [idProp, profilesModelProp]);
  React.useEffect(resetStateValues, [profilesRecord]);
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
    resume: [],
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
          firstName: firstName ?? null,
          lastName: lastName ?? null,
          emailAddress: emailAddress ?? null,
          phoneNumber: phoneNumber ?? null,
          skillSet: skillSet ?? null,
          visaStatus: visaStatus ?? null,
          yearsOfExperienceInUs: yearsOfExperienceInUs ?? null,
          yearsOfExperienceInternational:
            yearsOfExperienceInternational ?? null,
          currentlyWorksAt: currentlyWorksAt ?? null,
          linkedInURL: linkedInURL ?? null,
          certifications: certifications ?? null,
          city: city ?? null,
          state: state ?? null,
          zip: zip ?? null,
          resume: resume ?? null,
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
            query: updateProfiles,
            variables: {
              input: {
                id: profilesRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "ProfilesUpdateForm")}
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
              resume,
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
              resume,
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
              resume,
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
              resume,
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
              resume,
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
              resume,
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
              resume,
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
              resume,
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
              resume,
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
              resume,
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
              resume,
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
              resume,
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
              resume,
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
              resume,
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
        label="Resume"
        isRequired={false}
        isReadOnly={false}
        value={resume}
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
              resume: value,
            };
            const result = onChange(modelFields);
            value = result?.resume ?? value;
          }
          if (errors.resume?.hasError) {
            runValidationTasks("resume", value);
          }
          setResume(value);
        }}
        onBlur={() => runValidationTasks("resume", resume)}
        errorMessage={errors.resume?.errorMessage}
        hasError={errors.resume?.hasError}
        {...getOverrideProps(overrides, "resume")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || profilesModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || profilesModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
