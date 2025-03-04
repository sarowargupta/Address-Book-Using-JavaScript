const AddressBook = require("./services/AddressBook");
const Contact = require("./models/Contacts");

try {
    // Create Address Book
    const myBook = new AddressBook();

    // Add Contacts
    const contact1 = new Contact(
        "Aman", "Sharma", "Green Street", "Mumbai", "Maharashtra", "400001", "9876543210", "aman.sharma@example.com"
    );
    console.log(myBook.addContact(contact1));

    const contact2 = new Contact(
        "Neha", "Verma", "Lakeview Road", "Delhi", "Delhi", "110002", "8765432109", "neha.verma@example.com"
    );
    console.log(myBook.addContact(contact2));

    console.log("\nAll Contacts Before Deletion:", myBook.getAllContacts());

    // Finding a Contact
    console.log("\nFinding Contact 'Aman':", myBook.findContact("Aman"));

    // Editing Contact
    console.log(myBook.editContact("Aman", { address: "Sunset Avenue", city: "Bangalore", phone: "9998887776" }));

    console.log("\nAll Contacts After Editing:", myBook.getAllContacts());

    // Deleting a Contact
    console.log(myBook.deleteContact("Neha"));

    console.log("\nAll Contacts After Deletion:", myBook.getAllContacts());

} catch (error) {
    console.error("Error:", error.message);
}
