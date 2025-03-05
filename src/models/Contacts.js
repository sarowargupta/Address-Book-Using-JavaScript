// UC-11  Ability to sort the entries in the address book alphabetically bu Person's name
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
        return `${this.firstName} ${this.lastName} - ${this.city}, ${this.state} (${this.phone})`;
    }
}

module.exports = Contact;
