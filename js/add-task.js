import { getData } from "./communication-with-database.js";
import { generateContactOptionHTML } from "./add-task-templates.js";


let allContacts = [];

async function init() {
  allContacts = Object.values(await getData("contacts"));
  console.log("Alle Kontakte: ", allContacts); 
  renderContactOptions();
}



function renderContactOptions() {
    const contactList = document.getElementById("contact_list");
    contactList.innerHTML = ""; 


    for (let i = 0; i < allContacts.length; i++) {
        const contact = allContacts[i];
        contactList.innerHTML += generateContactOptionHTML(contact);
    }
}

init(); 