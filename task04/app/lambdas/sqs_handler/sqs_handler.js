exports.handler = async (event) => {
  try {
    console.log("SQS event:", JSON.stringify(event, null, 2));

    if (!event.Records || event.Records.length === 0) {
      console.error("No records found in the event.");
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "No records found in the event." }),
      };
    }

    const record = event.Records[0];
    let messageBody;
    try {
      messageBody = JSON.parse(record.body);
    } catch (parseError) {
      console.error("Error parsing message body:", parseError);
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Invalid message body format" }),
      };
    }

    console.log("Message body:", messageBody);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "SQS message processed successfully" }),
    };
  } catch (error) {
    console.error("Error processing SQS message:", error, error.stack);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Internal server error",
        error: error.message,
      }),
    };
  }
};
