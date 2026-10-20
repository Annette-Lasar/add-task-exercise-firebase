export function generateContactsListHTML(contact) {
  return /* html */ `
        <li class="contact-element">
            <h3>${contact.name}</h3>
            <p><span>E-mail:</span><span>${contact.email}</span></p>
            <p><span>Phone:</span><span>${contact.phone}</span></p>
        </li>
    `;
}
