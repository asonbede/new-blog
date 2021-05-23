require("dotenv").config();

require("dotenv").config();

const PORT = process.env.PORT || 8081;
let MONGODB_URI = process.env.MONGODB_URI;
if (process.env.NODE_ENV === "test") {
  MONGODB_URI = process.env.TEST_MONGODB_URI;
}
const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;
const localDatabaseUrl = process.env.MONGODB_URI_LOCAL;

module.exports = {
  MONGODB_URI,
  PORT,
  bucketName,
  region,
  accessKeyId,
  secretAccessKey,
  localDatabaseUrl,
};
