//----------------------------------------------------------------------------------------------------------------------------------------------
// Account Settings page
 
// Text shown on the page for each radio button value
const DISPLAY_TEXT = {
  status: { undergraduate: 'Undergrad', graduate: 'Graduate' },
  admittedAs: { freshman: 'New Freshman', transferee: 'Transferee' },
};

// Placeholder text in the name fields. The header keeps "NAME HERE" until a real name is saved.
const NAME_PLACEHOLDERS = ['LAST NAME', 'FIRST NAME', 'MIDDLE NAME'];

// Dropdown lists
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];

const LISTS = {
  months: MONTHS,
  days: Array.from({ length: 31 }, (_, i) => String(i + 1)),
  years: Array.from({ length: 67 }, (_, i) => String(2026 - i)), // 2026 back to 1960
};

document.querySelectorAll('select[data-list]').forEach((select) => {
  const options = LISTS[select.dataset.list].map((item) => `<option>${item}</option>`);
  select.innerHTML = `<option value="">${select.dataset.placeholder}</option>${options.join('')}`;
});

// Show course and year graduated only when Status is Graduate
const statusInputs = document.querySelectorAll('input[name="status"]');
const graduateFields = document.querySelectorAll('[data-graduate-only]');

function syncGraduateFields() {
  const checked = document.querySelector('input[name="status"]:checked');
  const isGraduate = checked !== null && checked.value === 'graduate';
  graduateFields.forEach((field) => {
    field.hidden = !isGraduate;
    field.querySelectorAll('select').forEach((select) => {
      select.disabled = !isGraduate; // disabled fields are skipped by form validation
    });
  });
}

statusInputs.forEach((input) => input.addEventListener('change', syncGraduateFields));
syncGraduateFields();

// Text currently shown on the page for a field name
function shownText(name) {
  const element = document.querySelector(`[data-field="${name}"]`);
  return element ? element.textContent.trim() : null;
}

// Update every place on the page that shows this field (for example, the Course row and the header)
function setText(name, value) {
  document.querySelectorAll(`[data-field="${name}"]`).forEach((element) => {
    element.textContent = value;
  });
}

// Copy the text on the page into a dialog's fields when it opens
function fillDialog(dialog) {
  dialog.querySelectorAll('input[name], select[name], textarea[name]').forEach((field) => {
    const shown = shownText(field.name);
    if (shown === null) return;

    if (field.type === 'radio') {
      field.checked = DISPLAY_TEXT[field.name]?.[field.value] === shown;
    } else {
      // Leave placeholder text out, so fields that were never filled stay empty
      field.value = shown === field.placeholder ? '' : shown;
    }
  });
}

// Copy the values from a dialog back onto the page when it is saved
function saveDialog(dialog) {
  dialog.querySelectorAll('input[name], select[name], textarea[name]').forEach((field) => {
    // Graduate-only fields have no matching text on the page, so skip them
    if (!document.querySelector(`[data-field="${field.name}"]`)) return;

    let value = '';
    if (field.type === 'radio') {
      if (!field.checked) return;
      value = DISPLAY_TEXT[field.name]?.[field.value] ?? field.value;
    } else if (field.tagName === 'SELECT') {
      if (field.selectedIndex <= 0) return; // placeholder, nothing chosen
      value = field.options[field.selectedIndex].text;
    } else {
      value = field.value.trim();
    }

    if (value) setText(field.name, value);
  });

  updateFullName();
}

// The header shows first, middle, and last name together, skipping any name still at its placeholder
function updateFullName() {
  const parts = ['firstName', 'middleName', 'lastName']
    .map((name) => shownText(name))
    .filter((text) => text && !NAME_PLACEHOLDERS.includes(text));

  if (parts.length > 0) setText('fullName', parts.join(' '));
}

// Open a dialog: fill it with the current values first
document.querySelectorAll('[data-open]').forEach((button) => {
  button.addEventListener('click', () => {
    const dialog = document.getElementById(button.dataset.open);
    fillDialog(dialog);
    syncGraduateFields();
    dialog.showModal();
  });
});

// Close buttons (X, Close, Cancel)
document.querySelectorAll('[data-close]').forEach((button) => {
  button.addEventListener('click', () => button.closest('dialog').close(''));
});

// Close when the user clicks the dimmed area outside a dialog
document.querySelectorAll('dialog').forEach((dialog) => {
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close('');
  });
});

// Save: when a dialog form is submitted, copy its values onto the page
document.querySelectorAll('dialog form').forEach((form) => {
  form.addEventListener('submit', () => saveDialog(form.closest('dialog')));
});

// Password change: check that the new passwords match, then ask for confirmation
const passwordForm = document.getElementById('password-form');
const confirmDialog = document.getElementById('confirm-password');
const successDialog = document.getElementById('password-success');

passwordForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const { newPassword, confirmPassword } = passwordForm.elements;
  confirmPassword.setCustomValidity(
    newPassword.value === confirmPassword.value ? '' : 'Passwords do not match.'
  );
  if (passwordForm.reportValidity()) {
    confirmDialog.showModal();
  }
});

// Show the success message only if the user pressed Confirm
confirmDialog.addEventListener('close', () => {
  if (confirmDialog.returnValue === 'confirm') {
    passwordForm.reset();
    successDialog.showModal();
  }
});
//----------------------------------------------------------------------------------------------------------------------------------------------