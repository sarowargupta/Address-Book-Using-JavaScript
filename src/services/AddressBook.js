// UC-10  Ability to get number of contact person i.e. count by city or state

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

     // Get count of persons by city
    getCountByCity() {
        return this.contacts.reduce((result, contact) => {
            result[contact.city] = (result[contact.city] || 0) + 1;
            return result;
        }, {});
    }

    // Get count of persons by state
    getCountByState() {
        return this.contacts.reduce((result, contact) => {
            result[contact.state] = (result[contact.state] || 0) + 1;
            return result;
        }, {});
    }
}

module.exports = AddressBook;