//UC-03 Ability to create a new address book array and add new contacts to it

const AddressBook = require('./services/AddressBook');
const Contact = require('./models/Contacts');

const addressBook = new AddressBook();

try {
     // Adding Contacts to Friends Address Book
     const contact1 = new Contact(
        "Aman", "Sharma", "Green Street", "Mumbai", "Maharashtra", "400001", "9876543210", "aman.sharma@example.com"
    );
    console.log(addressBook.addContact(contact1));

    const contact2 = new Contact(
        "Neha", "Verma", "Lakeview Road", "Delhi", "Delhi", "110002", "8765432109", "neha.verma@example.com"
    );
    console.log(addressBook.addContact(contact2));
    console.log("All Contacts", addressBook.getAllContacts());
    
} catch (error) {
    console.error("Error:", error.message);
}

try {
    const invalidContact = new Contact(
        "pal","sin","In", "I", "100A01", "12345", "invalid-email"
    );
    console.log(addressBook.addContact(invalidContact));
} catch (error) {
    console.error("Error:", error.message);
}
