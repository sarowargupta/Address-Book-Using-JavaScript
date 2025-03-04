const AddressBook = require("./services/AddressBook");
const Contact = require("./models/Contacts");

const addressBook = new AddressBook();

try {
    // Add Contacts
    const contact1 = new Contact("Aman", "Sharma", "Mumbai", "India", "Maharashtra", "400001", "9876543210", "aman@example.com");
    console.log(addressBook.addContact(contact1));

    const contact2 = new Contact("Neha", "Verma", "Delhi", "India", "Delhi", "110002", "8765432109", "neha@example.com");
    console.log(addressBook.addContact(contact2));

    // Get Number of Contacts
    console.log("\nTotal Contacts in Address Book:", addressBook.getContactCount());

    // Delete a Contact
    console.log(addressBook.deleteContact("Neha"));

    // Get Updated Contact Count After Deletion
    console.log("\nTotal Contacts After Deletion:", addressBook.getContactCount());
} catch (error) {
    console.error("Error:", error.message);
}
