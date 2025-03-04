const AddressBook = require('./services/AddressBook');
const Contact = require('./models/Contacts');

const addressBook = new AddressBook();

const contact1 = new Contact(
    "Sarowar", "Gupta", "Bhopal", "India",  "10001", "1203456789", "sarowar.user@gmail.com"
);
console.log(addressBook.addContact(contact1));
console.log(addressBook.getAllContacts());