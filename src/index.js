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

    // Search Contacts by City
    console.log("\nPeople in Kolkata:", addressBook.findContactsByCity("Kolkata"));

    // Search Contacts by State
    console.log("\nPeople in West Bengal:", addressBook.findContactsByState("West Bengal"));

    // Get all names in a city
    console.log("\nNames of people in Kolkata:", addressBook.getNamesByCity("Kolkata"));

    // Get total count in a state
    console.log("\nNumber of people in West Bengal:", addressBook.getCountByState("West Bengal"));

} catch (error) {
    console.error("Error:", error.message);
}
