const Contact = require("../models/Contacts");
class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        if (!(contact instanceof Contact)) {
            throw new Error("Invalid contact object.");
        }

        // Duplicate check using `filter`
        const isDuplicate = this.contacts.filter(c => 
            c.firstName.toLowerCase() === contact.firstName.toLowerCase() && 
            c.lastName.toLowerCase() === contact.lastName.toLowerCase()
        ).length > 0;

        if (isDuplicate) {
            throw new Error("Duplicate Contact! A person with the same name already exists.");
        }

        this.contacts.push(contact);
        return "Contact added successfully!";
    }

    getAllContacts() {
        return this.contacts;
    }

    findContact(firstName, lastName) {
        return this.contacts.find(contact => 
            contact.firstName.toLowerCase() === firstName.toLowerCase() && 
            contact.lastName.toLowerCase() === lastName.toLowerCase()
        );
    }

    editContact(firstName, lastName, updatedDetails) {
        let contact = this.findContact(firstName, lastName);
        if (!contact) {
            throw new Error(`Contact with name '${firstName} ${lastName}' not found.`);
        }

        Object.assign(contact, updatedDetails);
        return `Contact '${firstName} ${lastName}' updated successfully!`;
    }

    deleteContact(firstName, lastName) {
        const index = this.contacts.findIndex(contact => 
            contact.firstName.toLowerCase() === firstName.toLowerCase() && 
            contact.lastName.toLowerCase() === lastName.toLowerCase()
        );

        if (index === -1) {
            throw new Error(`Contact with name '${firstName} ${lastName}' not found.`);
        }
        this.contacts.splice(index, 1);
        return `Contact '${firstName} ${lastName}' deleted successfully!`;
    }

    // Using `reduce` to count contacts
    getContactCount() {
        return this.contacts.reduce(count => count + 1, 0);
    }

    // Using `map` to list all full names
    getAllNames() {
        return this.contacts.map(contact => `${contact.firstName} ${contact.lastName}`);
    }
}

module.exports = AddressBook;
