//UC-02 Ability to ensure valid contacts are added..

const AddressBook = require('./services/AddressBook');
const Contact = require('./models/Contacts');

try {
    const addressBook = new AddressBook();

    // Valid Contact
    let contact1 = new Contact(
        "Sarowar", "Gupta", "New Park City", "Bhopal", "Madhya Pradesh", "78701", "9876543210", "sro.user@example.com"
    );
    console.log(addressBook.addContact(contact1));

    // Invalid Contact (First Name too short)
    let contact2 = new Contact(
        "Sa", "Gupta", "New Park City", "Bho", "Madhya", "33101", "8364743333", "hello.world@email.com"
    );
    console.log(addressBook.addContact(contact2));  // This will throw an error

    console.log("\nTotal Contacts in Address Book:", addressBook.getAllContacts());
} catch (error) {
    console.error("Error:", error.message);
}