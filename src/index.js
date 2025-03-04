//UC-07 Ability to ensure there is no duplicate entry of the same person
const AddressBook = require("./services/AddressBook");
const Contact = require("./models/Contacts");

const addressBook = new AddressBook();

try {
    // Add Contacts
    const contact1 = new Contact("Rahul", "Mehta", "Park Street", "Kolkata", "West Bengal", "700001", "9123456789", "rahul.mehta@example.com");
    console.log(addressBook.addContact(contact1));

    const contact2 = new Contact("Priya", "Kapoor", "MG Road", "Bangalore", "Karnataka", "560001", "9234567890", "priya.kapoor@example.com");
    console.log(addressBook.addContact(contact2));


       // Attempt to add duplicate contact
       const duplicateContact = new Contact("Rahul", "Mehta", "Bangalore", "India", "Karnataka", "560001", "9998887776", "aman.duplicate@example.com");
       console.log(addressBook.addContact(duplicateContact)); // This should throw an error
   
    
} catch (error) {
    console.error("Error:", error.message);
}

// Display all contacts
console.log("\nAll Contacts:",  addressBook.getAllContacts());

// Display total contact count
console.log("\nTotal Contacts in Address Book:", addressBook.getContactCount());

// Display all contact names
console.log("\nAll Contact Names:", addressBook.getAllNames());

