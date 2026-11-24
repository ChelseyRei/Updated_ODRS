// ========== Account Settings page behavior ===========

// Open a dialog from any element with data-open="dialog-id"
document.querySelectorAll('[data-open]').forEach((el) => {
  el.addEventListener('click', () => {
    document.getElementById(el.dataset.open).showModal();
  });
});

// Close a dialog from any element with data-close (X, Close, Cancel)
document.querySelectorAll('[data-close]').forEach((el) => {
  el.addEventListener('click', () => el.closest('dialog').close(''));
});

// Close a dialog when the user clicks the dimmed area outside it
document.querySelectorAll('dialog').forEach((dialog) => {
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close('');
  });
});

// Fill the Month, Day, and Year dropdowns
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];

const LISTS = {
  months: MONTHS,
  days: Array.from({ length: 31 }, (_, i) => i + 1),
  years: Array.from({ length: 67 }, (_, i) => 2026 - i), // 2026 back to 1960
};

document.querySelectorAll('select[data-list]').forEach((select) => {
  const options = LISTS[select.dataset.list].map((item) => `<option>${item}</option>`);
  select.innerHTML = `<option value="">${select.dataset.placeholder}</option>${options.join('')}`;
});

// Show course and year graduated only when Status is Graduate
const statusInputs = document.querySelectorAll('input[name="status"]');
const graduateFields = document.querySelectorAll('[data-graduate-only]');

function syncGraduateFields() {
  const isGraduate = document.querySelector('input[name="status"]:checked').value === 'graduate';
  graduateFields.forEach((field) => {
    field.hidden = !isGraduate;
    field.querySelectorAll('select').forEach((select) => {
      select.disabled = !isGraduate; // disabled fields are skipped by form validation
    });
  });
}

statusInputs.forEach((input) => input.addEventListener('change', syncGraduateFields));
syncGraduateFields();

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