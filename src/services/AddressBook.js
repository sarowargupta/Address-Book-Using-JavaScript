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

    // Search contacts by city
    findContactsByCity(city) {
        return this.contacts.filter(contact => contact.city.toLowerCase() === city.toLowerCase());
    }

    // Search contacts by state
    findContactsByState(state) {
        return this.contacts.filter(contact => contact.state.toLowerCase() === state.toLowerCase());
    }

    // Get all names of people in a particular city
    getNamesByCity(city) {
        return this.contacts
            .filter(contact => contact.city.toLowerCase() === city.toLowerCase())
            .map(contact => `${contact.firstName} ${contact.lastName}`);
    }

    // Get total count of people in a particular state
    getCountByState(state) {
        return this.contacts
            .filter(contact => contact.state.toLowerCase() === state.toLowerCase())
            .reduce((count) => count + 1, 0);
    }
}

module.exports = AddressBook;
