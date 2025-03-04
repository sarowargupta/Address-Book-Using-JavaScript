const Contact = require("../models/Contacts");

class AddressBook {
    constructor(name) {
        this.name = name;
        this.contacts = [];
    }

    addContact(contact) {
        if (!(contact instanceof Contact)) {
            throw new Error("Invalid contact object.");
        }

        if (this.contacts.some(c => c.phone === contact.phone || c.email === contact.email)) {
            throw new Error("Duplicate Contact! Phone number or Email exists already.");
        }

        this.contacts.push(contact);
        return "Contact added successfully !";
    }

    getAllContacts() {
        return this.contacts;
    }

    findContact(firstName) {
        return this.contacts.find(contact => contact.firstName.toLowerCase() === firstName.toLowerCase());
    }

    editContact(firstName, updatedDetails) {
        let contact = this.findContact(firstName);
        if (!contact) {
            throw new Error(`Contact with name '${firstName}' not found.`);
        }

        Object.assign(contact, updatedDetails);
        return `Contact '${firstName}' updated successfully!`;
    }
}

module.exports = AddressBook;
