const AWS = require("aws-sdk");

exports.handler = async (event) => {
  console.log("SNS Event:", JSON.stringify(event));
  const message = event.Records[0].Sns.Message;
  console.log("SNS Message:", message);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "SNS message processed successfully" }),
  };
};
