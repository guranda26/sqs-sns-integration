exports.handler = async (event) => {
  console.log("SQS Message:", event.Records[0].body);
  return {
    statusCode: 200,
    body: JSON.stringify("SQS message processed successfully"),
  };
};
