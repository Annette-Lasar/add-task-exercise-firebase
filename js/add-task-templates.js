export function generateContactOptionHTML(contact) {
  return /* html */ `
    <li>
      <div class="contact-list-wrapper">
        <label for="contact-checkbox_${contact.name}">
          <span class="initials" style="background-color: ${contact.shortcutColor}">
            ${contact.shortcut}
          </span>
          <span>${contact.name}</span>
        </label>
        <input
          class="contact-checkbox"
          id="contact-checkbox_${contact.name}"
          type="checkbox"
          value="${contact.name}"
          name="assignedTo"
        >
      </div>
    </li>
  `;
}
