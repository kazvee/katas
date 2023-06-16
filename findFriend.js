// Module 2: Week 5
// findFriend - Kata

/**
 * Build a function that will take in three parameters:
 *    First parameter is the contact data itself
 *    Second parameter is the name of a contact
 *    Third parameter will specify the field (property) of the friend we want back
 *
 * The function will take the parameters and return the name and specified field of the first friend listed in the contact's friends list
 *
 * Using example data provided, specifying "Laurel" as the first parameter, and "email" as the second parameter
 * would look at Laurel's list of friends, and return an object with Hardy's name and e-mail address.
 *
 * If the contact requested or if the field requested is not found, then return "Not found"
 */

const findFriend = (data, name, field) => {

  // Find contact that matches the provided name
  const contact = data.find((contact) => contact.name === name);

  // Check that the contact exists and they have friends
  if (contact && contact.friends.length > 0) {

    // Get name of the contact's first friend
    const friendName = contact.friends[0];

    // Get friend data for the name of contact's first friend
    const friend = data.find((contact) => contact.name === friendName);

    // Check that contact's first friend exists and they have the requested field
    if (friend && friend[field] !== undefined) {

      // Return an object containing the contact's first friend's name, and the value of the requested field
      return { name: friendName, [field]: friend[field] };
    }
  }

  // If the contact doesn't exist, or the contact's friend doesn't exist, or if the requested field is not found then return "Not found"
  return "Not found";
};

// EXAMPLE DATA
const contacts = [
  {
    name: "Laurel",
    phone: "123 456 7890",
    email: "laurel@comics.com",
    friends: ["Hardy", "Abbott", "Costello"]
  },
  {
    name: "Hardy",
    phone: "321 654 0987",
    email: "hardy@hardyharhar.com",
    friends: ["Laurel", "Buster"]
  },
  {
    name: "Buster",
    phone: "987 654 3210",
    email: "buster@keaton.ca",
    friends: ["Hardy"]
  },
  {
    name: "Abbott",
    phone: "888 123 4567",
    email: "abbott@whosonfirst.co",
    friends: ["Costello", "Laurel"],
    // Added for testing
    // birthday: "April 1st 1909"
  },
  {
    name: "Costello",
    phone: "767 676 7676",
    email: "costello@imonfirst.co",
    friends: ["Abbott", "Laurel"]
  }
];


// Test code
// findFriend(contacts, "Abbott", "phone") should return { name: "Costello", phone: "767 676 7676" }
console.log(findFriend(contacts, "Abbott", "phone"));
console.log(`Should return: { name: "Costello", phone: "767 676 7676" }`);

// findFriend(contacts, "Buster", "email") should return { name: "Hardy", email: "hardy@hardyharhar.com" }
console.log(findFriend(contacts, "Buster", "email"));
console.log(`Should return: { name: "Hardy", email: "hardy@hardyharhar.com" }`);

// findFriend(contacts, "Bob", "phone") should return "Not found"
console.log(findFriend(contacts, "Bob", "phone"));
console.log(`Should return: "Not found"`);

// findFriend(contacts, "Costello", "birthday") should return "Not found"
console.log(findFriend(contacts, "Costello", "birthday"));
console.log(`Should return:\n "Not found"`);

// But if Costello's first friend, Abbott, did have a birthday field, then it should work and return that their name and birthday information
// console.log(findFriend(contacts, "Costello", "birthday"));
// console.log(`Should return: { name: "Abbott", birthday: "April 1st 1909"}`);