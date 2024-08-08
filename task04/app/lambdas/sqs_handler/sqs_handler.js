exports.handler = async (event) => {
  console.log("SQS event:", JSON.stringify(event, null, 2));
  const messageBody = event.Records[0].body;
  console.log("Message body:", messageBody);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "SQS message processed successfully" }),
  };
};
