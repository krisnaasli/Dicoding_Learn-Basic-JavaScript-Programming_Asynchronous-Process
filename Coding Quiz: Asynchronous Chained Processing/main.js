 /* @TODO
 * Complete the code below to access the toll road.
 * Buy toll card (buyTollRoadCard) -> fill money argument with 25 -> return object { tollRoadCard: true, balance: 0 }.
 * Fill the toll card balance (topUpBalance) -> fill the card argument with the card object obtained from step 1 and fill the amount argument with 10 -> return object { tollRoadCard: true, balance: 10 }.
 * Use toll road access (useTollRoad) -> fill the card argument with the card object obtained from step 2.
 *
 * Notes:
 * - You can use async/await or .then() or .catch() or any combination of them.
 * - If there is an error, display the error (error.message) with console.log.
 * Each of the above steps must be executed sequentially.
 * Each step will print a message to the console.
 * - You can explore the functions provided in utils.js. However, you should not change the contents of utils.js.
 */

 const { buyTollRoadCard, topUpBalance, useTollRoad } = require('./utils');
 async function getTollAccess() {
   try {
     const card = await buyTollRoadCard(25);
     console.log('Purchased a toll card:', card);
     
     const updateCard = await topUpBalance(card, 10);
     console.log('Top up toll card balance:', updateCard);
 
     await useTollRoad(updateCard);
     console.log('Toll road access successful!');
   } catch (error) {
     console.log(error.message);
   }
 }
 
 // Don't delete the code below
 getTollAccess(); 