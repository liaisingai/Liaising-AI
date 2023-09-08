

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    const stripe = require('stripe')('sk_test_51NnT40C1ydQ7c7bB67JwDWFJadWNcsgIqk3tODk2E3RhLlHMaL7Ff521BV26cQItANHmOZZMNA2nlBejG1gUV0Z300cmoV6MhL');

    const subscription = await stripe.subscriptions.retrieve(
    'sub_1Nnu84C1ydQ7c7bBGP2vXDZS'
    );
    console.log(`EVENT: ${JSON.stringify(event)}`);
    return {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  },
        body: `${JSON.stringify('Hello from Lambda!')} ${subscription}`,
    };
};
