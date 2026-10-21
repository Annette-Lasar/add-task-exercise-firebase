/* import { getData } from "./communication-with-database.js";
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

init();  */

import { getData } from "./communication-with-database.js";
import { generateContactOptionHTML } from "./add-task-templates.js";

let allContacts = [];

async function init() {
  document.addEventListener("click", closeContactDropdown);
  allContacts = Object.values(await getData("contacts"));
  renderContactOptions();

  const searchInput = document.getElementById("assigned-to");

  searchInput.addEventListener("focus", openContactDropdown);
  searchInput.addEventListener("input", filterContacts);
}

function openContactDropdown() {
  const contactList = document.getElementById("contact_list");
  const searchInput = document.getElementById("assigned-to");

  contactList.hidden = false;
  searchInput.setAttribute("aria-expanded", "true");
}

function filterContacts(event) {
  const searchTerm = event.target.value.toLowerCase().trim();

  const filteredContacts = allContacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm),
  );

  renderContactOptions(filteredContacts);
  openContactDropdown();
}

function renderContactOptions(contacts = allContacts) {
  const contactList = document.getElementById("contact_list");
  contactList.innerHTML = "";

  for (let i = 0; i < contacts.length; i++) {
    const contact = contacts[i];
    contactList.innerHTML += generateContactOptionHTML(contact);
  }
}

function closeContactDropdown(event) {
  const dropdown = document.querySelector(".contact-dropdown");
  const contactList = document.getElementById("contact_list");
  const searchInput = document.getElementById("assigned-to");

  if (
    event.key === "Escape" ||
    (event.type === "click" && !dropdown.contains(event.target))
  ) {
    contactList.hidden = true;
    searchInput.setAttribute("aria-expanded", "false");
  }
}

init();
