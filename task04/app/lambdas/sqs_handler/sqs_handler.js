exports.handler = async (event) => {
  console.log("SQS event:", JSON.stringify(event, null, 2));
  const messageBody = event.Records[0].body;
  return `Successfully processed ${event.Records.length} messages.`;
};
// @SqsTriggerEventSource(targetQueue = 'async_queue', batchSize=10)
// @LambdaHandler(lambdaName = 'sqs_handler', roleName='sqs_handler-role', isPublichVersion = false, logsExpiration = RetentionSetting.SYNDICATE_ALIASES_SPECIFIED)
