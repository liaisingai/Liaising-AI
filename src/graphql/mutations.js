/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createProfiles = /* GraphQL */ `
  mutation CreateProfiles(
    $input: CreateProfilesInput!
    $condition: ModelProfilesConditionInput
  ) {
    createProfiles(input: $input, condition: $condition) {
      id
      firstName
      lastName
      emailAddress
      phoneNumber
      skillSet
      visaStatus
      yearsOfExperienceInUs
      yearsOfExperienceInternational
      currentlyWorksAt
      linkedInURL
      certifications
      city
      state
      zip
      file
      createdAt
      updatedAt
      __typename
    }
  }
`;

export const createRequirements = /* GraphQL */ `
  mutation CreateRequirements(
    $input: CreateRequirementsInput!
    $condition: ModelRequirementsConditionInput
  ) {
    createRequirements(input: $input, condition: $condition) {
      recruitingCompany
      recruiterName
      recruiterPhoneNumber
      recruiterEmailAddress
      recruiterLinkedInUrl
      clientName
      clientCareersUrl
      typeOfJob
      clientRecruiterEmail
      clientRecruiterLinkedInUrl
      clientsCity
      clientsState
      clientsZip
      dateRequirementPosted
      jobTitle
      skillSet
      billingRate
      managerLinkedInUrl
      requirements
      file
      __typename
    }
  }
`;

export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
      __typename
    }
  }
`;
