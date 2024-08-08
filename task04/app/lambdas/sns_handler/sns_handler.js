const AWS = require("aws-sdk");

exports.handler = async (event) => {
  try {
    console.log("SNS Event:", JSON.stringify(event, null, 2));

    event.Records.forEach((record) => {
      const snsMessage = record.Sns.Message;
      console.log("SNS Message:", snsMessage);
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "SNS message processed successfully" }),
    };
  } catch (error) {
    console.error("Error processing SNS message:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error processing SNS message" }),
    };
  }
};
