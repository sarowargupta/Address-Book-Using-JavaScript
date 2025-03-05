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

     // View all persons by city
     viewPersonsByCity() {
        return this.contacts.reduce((result, contact) => {
            if (!result[contact.city]) {
                result[contact.city] = [];
            }
            result[contact.city].push(`${contact.firstName} ${contact.lastName}`);
            return result;
        }, {});
    }

    // View all persons by state
    viewPersonsByState() {
        return this.contacts.reduce((result, contact) => {
            if (!result[contact.state]) {
                result[contact.state] = [];
            }
            result[contact.state].push(`${contact.firstName} ${contact.lastName}`);
            return result;
        }, {});
    }
}

module.exports = AddressBook;