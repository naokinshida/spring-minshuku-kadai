const stripe = Stripe('pk_test_51PhnYHENjJ7uZX1a07tUIvjuc3JcAnqKwnidR05fT26pKeWdhAJkhYx1B2pqzJePI3kGkFQHZPqDWbJbv6BYg9TJ00i5lsB3fH');
 const paymentButton = document.querySelector('#paymentButton');
 
 paymentButton.addEventListener('click', () => {
   stripe.redirectToCheckout({
     sessionId: sessionId
   })
 });