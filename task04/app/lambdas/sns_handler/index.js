exports.handler = async (event) => {
  console.log("Event received:", JSON.stringify(event, null, 2));

  event.Records.forEach((record) => {
    console.log("Message received from SNS:", record.Sns.Message);
  });

  const response = {
    statusCode: 200,
    body: JSON.stringify("SNS message processed successfully."),
  };

  return response;
};
