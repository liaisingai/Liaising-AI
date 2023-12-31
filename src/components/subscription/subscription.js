import { memo, useCallback } from "react";
import { loadStripe } from '@stripe/stripe-js';
import { useAuthenticator } from '@aws-amplify/ui-react';

const Subscription = () => {
    const handlePayment = useCallback(async () => {
        const stripe = await loadStripe(
          "pk_test_51NnT40C1ydQ7c7bBnAjzSyUpjbPvRxpSqoZeLTTcMVgMwdzVvld7ND8YzLYANnsaKGOKEwqxeB2moT8TYyivphaG00DNtgVbuj"
        );
        const error = await stripe.redirectToCheckout({
          lineItems: [
            {
              price: "price_1NnT9iC1ydQ7c7bBEKZ3TgNc",
              quantity: 1,
            }
          ],
          mode: "subscription",
          successUrl: "https://liaisingai.com/find",
          cancelUrl: "https://liaisingai.com/subscriptions",
          
        });
        if (error) {
          console.warn("Error")
        }
    }, [])
    
    const { signOut } = useAuthenticator((context) => [
        context.route,
        context.signOut,
    ]);

    return (
      <div className='flex justify-center'>
        <div className='rounded-xl bg-white md:w-[75%] lg:w-[85%] md:max-h-[calc(100vh-300px)] md:min-h-[calc(100vh-300px)] max-h-[calc(100vh-250px)] min-h-[calc(100vh-250px)] mx-3 md:m-[12px] customBorder w-full text-center p-4 !pr-0 overflow-auto overflow-x-hidden'>
            <div className="w-full px-3 mb-2 mt-6 md:mb-0">
                <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                >
                    &nbsp;
                </label>
                <button
                    type="button"
                    onClick={handlePayment}
                    className="md:w-1/2 w-full outline-auto text-white bg-gradient-to-br from-purple-600 to-violet-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-3.5 text-center mr-2 mb-2"
                >
                    Buy Subscription
                </button>
            </div>
            <div className="w-full px-3 mb-2 md:mb-0">
                <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                >
                    &nbsp;
                </label>
                <button
                    type="button"
                    onClick={signOut}
                    className="md:w-1/2 w-full outline-auto text-white bg-gradient-to-br from-purple-600 to-violet-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-3.5 text-center mr-2 mb-2"
                >
                    Sign Out
                </button>
            </div>
        </div>
      </div>
    )
}

export default memo(Subscription);