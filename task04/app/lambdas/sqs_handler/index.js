const AWS = require("aws-sdk");

exports.handler = async (event) => {
  const sqs = new AWS.SQS();
  const params = {
    QueueUrl:
      "https://sqs.eu-central-1.amazonaws.com/196241772369/cmtr-60b8d96c-async_queue",
    MessageBody: "Test message",
  };

  try {
    const data = await sqs.sendMessage(params).promise();
    console.log("SQS Message Sent:", data.MessageId);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "SQS message sent successfully" }),
    };
  } catch (error) {
    console.error("Error sending SQS message:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Failed to send SQS message" }),
    };
  }
};
