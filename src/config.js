export default {
  STRIPE_KEY: "pk_test_51HNUNSKbNQwzxjHWF1NQzbAfuyxplHHbGYvPelvoa9cNZ7V6iT0PHRF8PVUQ57PrRKzIC161BqwwcwNSWQiBPz0P000kpafb8w",
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-uploads-cyberhoodie"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://ycwx8uvub4.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_UxUENaOkv",
    APP_CLIENT_ID: "1nt9d2pn98arbm951bmcue5u7g",
    IDENTITY_POOL_ID: "us-east-1:159f1920-bb8f-489a-a6f0-b540aab0d391"
  }
};