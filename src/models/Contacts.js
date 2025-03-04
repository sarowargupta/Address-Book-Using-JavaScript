//UC-02 Ability to ensure valid contacts are added..

//Contact class
class Contact {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
        this.firstName = this.validateName(firstName, "First Name");
        this.lastName = this.validateName(lastName, "Last Name");
        this.address = this.validateMinLength(address, "Address", 4);
        this.city = this.validateMinLength(city, "City", 4);
        this.state = this.validateMinLength(state, "State", 4);
        this.zip = this.validateZip(zip);
        this.phone = this.validatePhone(phone);
        this.email = this.validateEmail(email);
    }

    validateName(name, field) {
        const nameRegex = /^[A-Z][a-zA-Z]{2,}$/;
        if (!nameRegex.test(name)) {
            throw new Error(`${field} must start with a capital letter and have at least 3 characters.`);
        }
        return name;
    }

    validateMinLength(value, field, minLength) {
        if (value.length < minLength) {
            throw new Error(`${field} must be at least ${minLength} characters long.`);
        }
        return value;
    }

    validateZip(zip) {
        const zipRegex = /^[0-9]{5,6}$/;
        if (!zipRegex.test(zip)) {
            throw new Error("Zip code must be 5 or 6 digits.");
        }
        return zip;
    }

    validatePhone(phone) {
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phone)) {
            throw new Error("Phone number must be 10 digits.");
        }
        return phone;
    }

    validateEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            throw new Error("Invalid email format.");
        }
        return email;
    }
}

module.exports = Contact;