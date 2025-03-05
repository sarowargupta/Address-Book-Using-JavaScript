// UC-12  Ability to sort the entries in the address book by city ,state, or zip
class Contact {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.email = email;
    }

    // Overriding toString() for readable output
    toString() {
        return `${this.firstName} ${this.lastName} - ${this.city}, ${this.state} (${this.zip})`;
    }
}

module.exports = Contact;