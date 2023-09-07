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
export declare type ProfilesUpdateFormInputValues = {
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
export declare type ProfilesUpdateFormValidationValues = {
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
export declare type ProfilesUpdateFormOverridesProps = {
    ProfilesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type ProfilesUpdateFormProps = React.PropsWithChildren<{
    overrides?: ProfilesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    profiles?: any;
    onSubmit?: (fields: ProfilesUpdateFormInputValues) => ProfilesUpdateFormInputValues;
    onSuccess?: (fields: ProfilesUpdateFormInputValues) => void;
    onError?: (fields: ProfilesUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProfilesUpdateFormInputValues) => ProfilesUpdateFormInputValues;
    onValidate?: ProfilesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ProfilesUpdateForm(props: ProfilesUpdateFormProps): React.ReactElement;
