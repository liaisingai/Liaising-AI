import * as Yup from 'yup';

export const profileValidationSchema = Yup.object().shape({
    firstName: Yup.string()
      .matches(/^[A-Za-z]+$/, 'First name should only contain letters')
      .required('First name is required'),

    lastName: Yup.string()
      .matches(/^[A-Za-z]+$/, 'Last name should only contain letters')
      .required('Last name is required'),

    emailAddress: Yup.string()
      .email('Invalid email address')
      .required('Email address is required'),

    phoneNumber: Yup.string()
      .matches(
        /^\d{3}-\d{3}-\d{4}$/,
        'Phone number should be in the format: xxx-xxx-xxxx'
      )
      .required('Phone number is required'),

    skillSet: Yup.string().required('Skill set is required'),

    visaStatus: Yup.string().required('Visa status is required'),

    yearsOfExperienceInUs: Yup.number()
      .typeError('Years of expr must be a number')
      .required('Years of expr in the US is required'),

    yearsOfExperienceInternational: Yup.number()
      .typeError('Years of int. exp must be a number')
      .required('Years of int. exp  is required'),

    currentlyWorksAt: Yup.string().required('Currently works at is required'),

    linkedInURL: Yup.string()
      .url('Invalid LinkedIn URL')
      .required('LinkedIn URL is required'),

    certifications: Yup.string().required('Certifications are required'),

    city: Yup.string().required('City is required'),

    state: Yup.string().required('State is required'),

    zip: Yup.string()
      .matches(/^\d{5}$/, 'Zip code should be a 5-digit number')
      .required('Zip code is required'),

    file: Yup.string().required('Resume is required'),
});


export const requirementsValidationSchema = Yup.object().shape({
  recruitingCompany: Yup.string()
    .required('Recruiting Company is required'),
  recruiterName: Yup.string()
    .required('Recruiter Name is required'),
  recruiterPhoneNumber: Yup.string()
    .matches(
      /^\d{3}-\d{3}-\d{4}$/,
      'Phone number should be in the format: xxx-xxx-xxxx'
    )
    .required('Recruiter Phone Number is required'),
  recruiterEmailAddress: Yup.string()
    .email('Invalid email address')
    .required('Recruiter Email Address is required'),
  recruiterLinkedInUrl: Yup.string()
    .url('Invalid LinkedIn URL format')
    .required('Recruiter LinkedIn URL is required'),
  managerLinkedInUrl: Yup.string()
    .url('Invalid LinkedIn URL format')
    .optional('Manager LinkedIn URL is required'),
  clientName: Yup.string()
    .required('Client Name is required'),
  clientCareersUrl: Yup.string()
    .url('Invalid URL format for Client Careers URL')
    .required('Client Careers URL is required'),
  typeOfJob: Yup.string()
    .required('Type of Job is required'),
  clientRecruiterEmail: Yup.string()
    .email('Invalid email address')
    .required('Client Recruiter Email is required'),
  clientRecruiterLinkedInUrl: Yup.string()
    .url('Invalid LinkedIn URL format')
    .required('LinkedIn URL is required'),
  clientsCity: Yup.string()
    .required('Client City is required'),
  clientsState: Yup.string()
    .required('Client State is required'),
  clientsZip: Yup.string()
    .matches(/^\d{5}$/, 'Zip code should be a 5-digit number')
    .required('Zip code is required'),
  dateRequirementPosted: Yup.string()
    .matches(/^\d{4}-\d{2}-\d{2}$/, 'Date format should be in YYYY-MM-DD')
    .required('Date Req Posted is required'),
  jobTitle: Yup.string()
    .required('Job Title is required'),
  skillSet: Yup.string()
    .required('Skill Set is required'),
  billingRate: Yup.string()
    .required('Billing Rate is required'),
  requirements: Yup.string()
    .required('Requirements are required'),
  file: Yup.string().optional('Requirement file is required'),
});
