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
export declare type RequirementsCreateFormInputValues = {
    recruitingCompany?: string;
    recruiterName?: string;
    recruiterPhoneNumber?: string;
    recruiterEmailAddress?: string;
    recruiterLinkedInUrl?: string;
    clientName?: string;
    clientCareersUrl?: string;
    typeOfJob?: string;
    clientRecruiterEmail?: string;
    clientRecruiterLinkedInUrl?: string;
    clientsCity?: string;
    clientsState?: string;
    clientsZip?: string;
    dateRequirementPosted?: string;
    jobTitle?: string;
    skillSet?: string;
    billingRate?: string;
    requirements?: string;
};
export declare type RequirementsCreateFormValidationValues = {
    recruitingCompany?: ValidationFunction<string>;
    recruiterName?: ValidationFunction<string>;
    recruiterPhoneNumber?: ValidationFunction<string>;
    recruiterEmailAddress?: ValidationFunction<string>;
    recruiterLinkedInUrl?: ValidationFunction<string>;
    clientName?: ValidationFunction<string>;
    clientCareersUrl?: ValidationFunction<string>;
    typeOfJob?: ValidationFunction<string>;
    clientRecruiterEmail?: ValidationFunction<string>;
    clientRecruiterLinkedInUrl?: ValidationFunction<string>;
    clientsCity?: ValidationFunction<string>;
    clientsState?: ValidationFunction<string>;
    clientsZip?: ValidationFunction<string>;
    dateRequirementPosted?: ValidationFunction<string>;
    jobTitle?: ValidationFunction<string>;
    skillSet?: ValidationFunction<string>;
    billingRate?: ValidationFunction<string>;
    requirements?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RequirementsCreateFormOverridesProps = {
    RequirementsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    recruitingCompany?: PrimitiveOverrideProps<TextFieldProps>;
    recruiterName?: PrimitiveOverrideProps<TextFieldProps>;
    recruiterPhoneNumber?: PrimitiveOverrideProps<TextFieldProps>;
    recruiterEmailAddress?: PrimitiveOverrideProps<TextFieldProps>;
    recruiterLinkedInUrl?: PrimitiveOverrideProps<TextFieldProps>;
    clientName?: PrimitiveOverrideProps<TextFieldProps>;
    clientCareersUrl?: PrimitiveOverrideProps<TextFieldProps>;
    typeOfJob?: PrimitiveOverrideProps<TextFieldProps>;
    clientRecruiterEmail?: PrimitiveOverrideProps<TextFieldProps>;
    clientRecruiterLinkedInUrl?: PrimitiveOverrideProps<TextFieldProps>;
    clientsCity?: PrimitiveOverrideProps<TextFieldProps>;
    clientsState?: PrimitiveOverrideProps<TextFieldProps>;
    clientsZip?: PrimitiveOverrideProps<TextFieldProps>;
    dateRequirementPosted?: PrimitiveOverrideProps<TextFieldProps>;
    jobTitle?: PrimitiveOverrideProps<TextFieldProps>;
    skillSet?: PrimitiveOverrideProps<TextFieldProps>;
    billingRate?: PrimitiveOverrideProps<TextFieldProps>;
    requirements?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RequirementsCreateFormProps = React.PropsWithChildren<{
    overrides?: RequirementsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RequirementsCreateFormInputValues) => RequirementsCreateFormInputValues;
    onSuccess?: (fields: RequirementsCreateFormInputValues) => void;
    onError?: (fields: RequirementsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RequirementsCreateFormInputValues) => RequirementsCreateFormInputValues;
    onValidate?: RequirementsCreateFormValidationValues;
} & React.CSSProperties>;
export default function RequirementsCreateForm(props: RequirementsCreateFormProps): React.ReactElement;
