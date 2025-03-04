//UC-02 Ability to ensure valid contacts are added..

const Contact = require('../models/Contacts');

//address book class
class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        if (!(contact instanceof Contact)) {
            throw new Error("Invalid contact object.");
        }

        // Prevent duplicate entries based on phone/email
        if (this.contacts.some(c => c.phone === contact.phone || c.email === contact.email)) {
            throw new Error("Contact with the same phone or email already exists.");
        }

        this.contacts.push(contact);
        return "Contact added successfully!";
    }

    getAllContacts() {
        return this.contacts;
    }
}

module.exports = AddressBook;