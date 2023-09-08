const stripe = require('stripe')('sk_test_51NnT40C1ydQ7c7bB67JwDWFJadWNcsgIqk3tODk2E3RhLlHMaL7Ff521BV26cQItANHmOZZMNA2nlBejG1gUV0Z300cmoV6MhL');


exports.handler = async (event) => {
    // const stripe = await loadStripe(
    //     "pk_test_51NnT40C1ydQ7c7bBnAjzSyUpjbPvRxpSqoZeLTTcMVgMwdzVvld7ND8YzLYANnsaKGOKEwqxeB2moT8TYyivphaG00DNtgVbuj"
    //   );
    const subscription = await stripe.subscriptions.retrieve(
    'sub_1Nnu84C1ydQ7c7bBGP2vXDZS'
    );
    console.log("subscription", subscription)
    return subscription;
  };
  