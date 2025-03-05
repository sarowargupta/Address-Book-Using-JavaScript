// UC-11  Ability to sort the entries in the address book alphabetically bu Person's name

const Contact = require("../models/Contacts");

class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        if (!(contact instanceof Contact)) {
            throw new Error("Invalid contact object.");
        }

        if (this.contacts.some(c => c.firstName === contact.firstName && c.lastName === contact.lastName)) {
            throw new Error("Duplicate Contact! A person with the same name already exists.");
        }

        this.contacts.push(contact);
        return "Contact added successfully!";
    }

    getAllContacts() {
        return this.contacts;
    }

 // Sorting contacts alphabetically by first name
 sortContactsByName() {
    return this.contacts.sort((a, b) => a.firstName.localeCompare(b.firstName));
}

// Display contacts
displayContacts() {
    this.contacts.forEach(contact => console.log(contact.toString()));
}
}

module.exports = AddressBook;