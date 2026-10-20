export function generateContactOptionHTML(contact) {
  return /* html */ `
        <li value="${contact.name}">
            <div class="contact-list-wrapper">
                <label for="contact-checkbox_${contact.name}">
                    <span class="initials" style="background-color: ${contact.shortcutColor}">${contact.shortcut}</span>
                    <span>${contact.name}</span>
                </label>
                <input id="contact-checkbox_${contact.name}" type="checkbox">
            </div>
        </li>
    `;
}
