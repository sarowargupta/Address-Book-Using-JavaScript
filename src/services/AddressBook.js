// UC-12  Ability to sort the entries in the address book by city ,state, or zip

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

  // Sorting by City
  sortByCity() {
    return this.contacts.sort((a, b) => a.city.localeCompare(b.city));
}

// Sorting by State
sortByState() {
    return this.contacts.sort((a, b) => a.state.localeCompare(b.state));
}

// Sorting by Zip Code
sortByZip() {
    return this.contacts.sort((a, b) => a.zip - b.zip);
}

// Display Contacts
displayContacts() {
    this.contacts.forEach(contact => console.log(contact.toString()));
}
}

module.exports = AddressBook;