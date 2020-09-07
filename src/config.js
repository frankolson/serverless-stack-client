const dev = {
  STRIPE_KEY: "pk_test_51HNUNSKbNQwzxjHWF1NQzbAfuyxplHHbGYvPelvoa9cNZ7V6iT0PHRF8PVUQ57PrRKzIC161BqwwcwNSWQiBPz0P000kpafb8w",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-1f4p2909otxje"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "api-dev.hackerform.com"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_UAwTnD2C6",
    APP_CLIENT_ID: "us-east-1_UAwTnD2C6",
    IDENTITY_POOL_ID: "us-east-1:7537042a-ec29-466c-a56b-0ce5da9bf514"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_51HNUNSKbNQwzxjHWF1NQzbAfuyxplHHbGYvPelvoa9cNZ7V6iT0PHRF8PVUQ57PrRKzIC161BqwwcwNSWQiBPz0P000kpafb8w",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-1gb7hhckyjsmv"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "api.hackerform.com"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_PY7iIBC3b",
    APP_CLIENT_ID: "prnhrnv9lbrm16k14pt0ihokg",
    IDENTITY_POOL_ID: "us-east-1:663dde52-d82c-4db4-8099-32aa4eb84487"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};