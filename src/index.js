const AddressBook = require("./services/AddressBook");
const Contact = require("./models/Contacts");

const addressBook = new AddressBook();

try {
    // Add Contacts
    const contact1 = new Contact("Rahul", "Mehta", "Park Street", "Kolkata", "West Bengal", "700001", "9123456789", "rahul.mehta@example.com");
    console.log(addressBook.addContact(contact1));

    const contact2 = new Contact("Priya", "Kapoor", "MG Road", "Bangalore", "Karnataka", "560001", "9234567890", "priya.kapoor@example.com");
    console.log(addressBook.addContact(contact2));

    const contact3 = new Contact("Amit", "Shah", "Salt Lake", "Kolkata", "West Bengal", "700091", "9345678901", "amit.shah@example.com");
    console.log(addressBook.addContact(contact3));

    const contact4 = new Contact("Suman", "Verma", "Jayanagar", "Bangalore", "Karnataka", "560011", "9456789012", "suman.verma@example.com");
    console.log(addressBook.addContact(contact4));

    // View Persons Grouped by City
    console.log("\nPersons Grouped by City:", addressBook.viewPersonsByCity());

    // View Persons Grouped by State
    console.log("\nPersons Grouped by State:", addressBook.viewPersonsByState());

} catch (error) {
    console.error("Error:", error.message);
}