/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ProfilesCreateFormInputValues = {
    firstName?: string;
    lastName?: string;
    emailAddress?: string;
    phoneNumber?: string;
    skillSet?: string;
    visaStatus?: string;
    yearsOfExperienceInUs?: string;
    yearsOfExperienceInternational?: string;
    currentlyWorksAt?: string;
    linkedInURL?: string;
    certifications?: string;
    city?: string;
    state?: string;
    zip?: string;
    file?: string;
};
export declare type ProfilesCreateFormValidationValues = {
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    emailAddress?: ValidationFunction<string>;
    phoneNumber?: ValidationFunction<string>;
    skillSet?: ValidationFunction<string>;
    visaStatus?: ValidationFunction<string>;
    yearsOfExperienceInUs?: ValidationFunction<string>;
    yearsOfExperienceInternational?: ValidationFunction<string>;
    currentlyWorksAt?: ValidationFunction<string>;
    linkedInURL?: ValidationFunction<string>;
    certifications?: ValidationFunction<string>;
    city?: ValidationFunction<string>;
    state?: ValidationFunction<string>;
    zip?: ValidationFunction<string>;
    file?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProfilesCreateFormOverridesProps = {
    ProfilesCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    emailAddress?: PrimitiveOverrideProps<TextFieldProps>;
    phoneNumber?: PrimitiveOverrideProps<TextFieldProps>;
    skillSet?: PrimitiveOverrideProps<TextFieldProps>;
    visaStatus?: PrimitiveOverrideProps<TextFieldProps>;
    yearsOfExperienceInUs?: PrimitiveOverrideProps<TextFieldProps>;
    yearsOfExperienceInternational?: PrimitiveOverrideProps<TextFieldProps>;
    currentlyWorksAt?: PrimitiveOverrideProps<TextFieldProps>;
    linkedInURL?: PrimitiveOverrideProps<TextFieldProps>;
    certifications?: PrimitiveOverrideProps<TextFieldProps>;
    city?: PrimitiveOverrideProps<TextFieldProps>;
    state?: PrimitiveOverrideProps<TextFieldProps>;
    zip?: PrimitiveOverrideProps<TextFieldProps>;
    file?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProfilesCreateFormProps = React.PropsWithChildren<{
    overrides?: ProfilesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ProfilesCreateFormInputValues) => ProfilesCreateFormInputValues;
    onSuccess?: (fields: ProfilesCreateFormInputValues) => void;
    onError?: (fields: ProfilesCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProfilesCreateFormInputValues) => ProfilesCreateFormInputValues;
    onValidate?: ProfilesCreateFormValidationValues;
} & React.CSSProperties>;
export default function ProfilesCreateForm(props: ProfilesCreateFormProps): React.ReactElement;
