export type AmplifyDependentResourcesAttributes = {
  "analytics": {
    "liaisingaiKinesis": {
      "kinesisStreamArn": "string",
      "kinesisStreamId": "string",
      "kinesisStreamShardCount": "string"
    }
  },
  "api": {
    "liaisingai": {
      "GraphQLAPIEndpointOutput": "string",
      "GraphQLAPIIdOutput": "string",
      "GraphQLAPIKeyOutput": "string"
    }
  },
  "auth": {
    "liaisingai4f6cb61e": {
      "AppClientID": "string",
      "AppClientIDWeb": "string",
      "HostedUIDomain": "string",
      "IdentityPoolId": "string",
      "IdentityPoolName": "string",
      "OAuthMetadata": "string",
      "UserPoolArn": "string",
      "UserPoolId": "string",
      "UserPoolName": "string"
    }
  },
  "function": {
    "stripeLambdaFunction": {
      "Arn": "string",
      "LambdaExecutionRole": "string",
      "LambdaExecutionRoleArn": "string",
      "Name": "string",
      "Region": "string"
    }
  },
  "storage": {
    "imagestorage": {
      "BucketName": "string",
      "Region": "string"
    }
  }
}