import { getData } from "./communication-with-database.js";
import { generateContactsListHTML } from "./contacts-templates.js";
import { sendData } from "./communication-with-database.js";
import { getRandomContactColor } from "./helpers.js";
import { getInitials } from "./helpers.js";

let allContacts = [];

async function init() {
  allContacts = Object.values(await getData("contacts"));
  renderContacts();
}

function renderContacts() {
  const contactsList = document.getElementById("contacts_list");
  contactsList.innerHTML = "";

  for (let i = 0; i < allContacts.length; i++) {
    const contact = allContacts[i];
    contactsList.innerHTML += generateContactsListHTML(contact);
  }
}

async function createContact() {
  const form = document.querySelector("#contact_form");
  const formData = new FormData(form);

  const newContact = Object.fromEntries(formData);

  newContact.shortcut = getInitials(newContact.name); 
  newContact.shortcutColor = getRandomContactColor(); 

  console.log(newContact);

  await sendData("contacts", newContact);
}

/* Funktionen in JS-Modulen sind nicht automatisch global verfügbar.
Damit der Inline-Eventhandler onclick die Funktion aufrufen kann,
wird sie dem globalen window-Objekt zugewiesen.
Ohne () wird nur die Funktionsreferenz übergeben, die Funktion nicht aufgerufen.
Alternativ: einen EventListener einrichten!
*/
window.createContact = createContact;

init();
