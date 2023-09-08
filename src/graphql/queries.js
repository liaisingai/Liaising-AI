/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
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
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        image
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;

export const listProfiles = /* GraphQL */ `
  query ListProfiles(
    $filter: ModelProfilesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        __typename
      }
      nextToken
      __typename
    }
  }
`;

export const listRequirements = /* GraphQL */ `
  query ListRequirements(
    $filter: ModelRequirementsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRequirements(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
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
        requirements
        __typename
      }
      nextToken
      __typename
    }
  }
`;

