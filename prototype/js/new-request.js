const categories = [
	"Transcript of Records",
	"Certifications",
	"Unclaimed",
	"CAV (CHED/DFA/WES/CES)"
];


const credentialCatalog = {
	undergraduate: {
		"24": "CAV-CHED (Commission on Higher Education) (The documents will be prepared by the Registrar in a sealed envelope, and the client will forward to CHED)",

		"1063": "CAV-DFA/Apostille - for UAE and Qatar (For NON-Graduate) ([TOR+Cert of Non SO+Cert of English Medium of Instruction] - The documents will be prepared by the Registrar in a sealed envelope, and the client will forward to DFA for CAV authentication (Red Ribbon). The client must provide photocopy of TOR & Diploma)",

		"48": "CAV-DFA/Apostille - Red Ribbon (For Undergrad) ([TOR+Cert of Non SO+Cert of English Medium of Instruction] - The documents will be prepared by the Registrar in a sealed envelope, and the client will forward to DFA for CAV authentication (Red Ribbon). The client must provide photocopy of TOR & Diploma)",

		"49": "Certificate of Grades (For Cross Enrollee)",

		"10": "Certificate of Transfer Credential (Honorable Dismissal) (LETTER OF REQUEST TO TRANSFER is required)",

		"1053": "Certificate of Units Earned",

		"1058": "Certification for NSTP Serial Number",

		"11": "Certification of English as Medium Of instruction",

		"1054": "Certification of English as Medium Of instruction for Australia",

		"1055": "Certification of English as Medium Of instruction for Japan",

		"15": "Certification of Enrollment/Attendance",

		"13": "Certification of Non-Issuance of Special Order (S.O.)",

		"23": "Certification of Subject Description (150 pesos per subject)",

		"27": "Certified True Copy of Transcript of Records (Photocopy of your Original TOR is REQUIRED - Must capture the whole page including the signatories)",

		"1056": "Informative Copy of Grades / Certified Copy of Grades (For transfer to other school or scholarship)",

		"1051": "Other Special Requests (DON'T CHOOSE - Unless suggested by the Registrar's Staff)",

		"50": "Re-print Credentials / Counter Checking (DON'T CHOOSE - Unless suggested by the Registrar's Staff)",

		"45": "Retrieval of Unclaimed Request",

		"21": "Special Certification required by Agency/gov't Offices",

		"32": "Transcript of Records - Copy for (Undergraduate) 1st Year (Must already have Cert. of Transfer Credential or Honorable Dismissal)",

		"33": "Transcript of Records - Copy for (Undergraduate) 2nd Year (Must already have Cert. of Transfer Credential or Honorable Dismissal)",

		"34": "Transcript of Records - Copy for (Undergraduate) 3rd and 4th Year (Must already have Cert. of Transfer Credential or Honorable Dismissal)",

		"35": "Transcript of Records - Copy for (Undergraduate) 5th Year (Must already have Cert. of Transfer Credential or Honorable Dismissal)",

		"3": "Transcript of Records - For evaluation/reference (Undergraduate) 1st Year",

		"4": "Transcript of Records - For evaluation/reference (Undergraduate) 2nd Year",

		"5": "Transcript of Records - For evaluation/reference (Undergraduate) 3rd and 4th Year",

		"6": "Transcript of Records - For evaluation/reference (Undergraduate) 5th Year",

		"25": "WES Form, ICES Form, IQAS Form (Form ONLY. Please request for other credentials to be included in WES/ICES/IQAS)"
	},

	graduate: {
		"1065": "(1st Copy) TOR (for board exam) + Certificate of Graduation. (If you already received your TOR before, don't choose this credential)",

		"1064": "(1st Copy) TOR + Certificate of Graduation. (If you already received your TOR before, don't choose this credential)",

		"24": "CAV-CHED (Commission on Higher Education) (The documents will be prepared by the Registrar in a sealed envelope, and the client will forward to CHED)",

		"1062": "CAV-DFA/Apostille - for UAE and Qatar (For Graduates) ([TOR+Diploma+Cert of Grad+Cert of Non SO+Cert of English Medium of Instruction] - The documents will be prepared by the Registrar in a sealed envelope, and the client will forward to DFA for CAV authentication (Red Ribbon). The client must provide photocopy of TOR & Diploma)",

		"22": "CAV-DFA/Apostille - Red Ribbon (For Graduates) ([TOR+Diploma+Cert of Grad+Cert of Non SO+Cert of English Medium of Instruction] - The documents will be prepared by the Registrar in a sealed envelope, and the client will forward to DFA for CAV authentication (Red Ribbon). The client must provide photocopy of TOR & Diploma)",

		"42": "CAV-DFA/Apostille - Red Ribbon (Fresh grad w/o diploma) ([TOR+Cert of Grad+Cert of Non SO+Cert of English Medium of Instruction] - The documents will be prepared by the Registrar in a sealed envelope, and the client will forward to DFA for CAV authentication (Red Ribbon). The client must provide photocopy of TOR & Diploma)",

		"1052": "CAV-PRC (Please provide Photocopy of TOR)",

		"10": "Certificate of Transfer Credential (Honorable Dismissal) (LETTER OF REQUEST TO TRANSFER is required)",

		"1053": "Certificate of Units Earned",

		"1058": "Certification for NSTP Serial Number",

		"11": "Certification of English as Medium Of instruction",

		"1054": "Certification of English as Medium Of instruction for Australia",

		"1055": "Certification of English as Medium Of instruction for Japan",

		"15": "Certification of Enrollment/Attendance",

		"14": "Certification of General Weighted Average (G.W.A.)",

		"12": "Certification of Graduation",

		"13": "Certification of Non-Issuance of Special Order (S.O.)",

		"23": "Certification of Subject Description (150 pesos per subject)",

		"28": "Certified True Copy of Diploma (Photocopy of your Original Diploma is REQUIRED)",

		"27": "Certified True Copy of Transcript of Records (Photocopy of your Original TOR is REQUIRED - Must capture the whole page including the signatories)",

		"1057": "Diploma - 1st Copy (intended for those who were never issued a diploma)",

		"9": "Diploma - 2nd Copy (Affidavit of Loss is required. Request for 3rd copy is NOT allowed.)",

		"29": "Diploma Replacement Copy (if the received Diploma is without signature or misspelled or with wrong degree / intended for those without signature/unreadable/altered/laminated (to surrender the old copy))",

		"1051": "Other Special Requests (DON'T CHOOSE - Unless suggested by the Registrar's Staff)",

		"50": "Re-print Credentials / Counter Checking (DON'T CHOOSE - Unless suggested by the Registrar's Staff)",

		"45": "Retrieval of Unclaimed Request",

		"21": "Special Certification required by Agency/gov't Offices",

		"30": "Transcript of Records - Copy for (Graduated, 4 Year Program) (Must already have Cert. of Transfer Credential or Honorable Dismissal)",

		"31": "Transcript of Records - Copy for (Graduated, 5 Year Program) (Must already have Cert. of Transfer Credential or Honorable Dismissal)",

		"36": "Transcript of Records - For board/licensure exam (Graduated, 4 Year Program)",

		"37": "Transcript of Records - For board/licensure exam (Graduated, 5 Year Program)",

		"1": "Transcript of Records - For evaluation/reference (Graduated, 4 Year Program)",

		"2": "Transcript of Records - For evaluation/reference (Graduated, 5 Year Program)",

		"25": "WES Form, ICES Form, IQAS Form (Form ONLY. Please request for other credentials to be included in WES/ICES/IQAS)"
	}
};

const credentialDetails = {
	undergraduate: {
		"24": { processingDays: 7, price: 620.00 },
		"1063": { processingDays: 7, price: 620.00 },
		"48": { processingDays: 7, price: 620.00 },
		"49": { processingDays: 7, price: 150.00 },
		"10": { processingDays: 5, price: 150.00 },
		"1053": { processingDays: 7, price: 150.00 },
		"1058": { processingDays: 7, price: 150.00 },
		"11": { processingDays: 5, price: 150.00 },
		"1054": { processingDays: 5, price: 150.00 },
		"1055": { processingDays: 5, price: 150.00 },
		"15": { processingDays: 7, price: 150.00 },
		"13": { processingDays: 5, price: 150.00 },
		"23": { processingDays: 7, price: 150.00 },
		"27": { processingDays: 5, price: 150.00 },
		"1056": { processingDays: 3, price: 150.00 },
		"1051": { processingDays: 7, price: 150.00 },
		"50": { processingDays: 7, price: 0.00 },
		"45": { processingDays: 7, price: 100.00 },
		"21": { processingDays: 7, price: 170.00 },
		"32": { processingDays: 12, price: 120.00 },
		"33": { processingDays: 12, price: 220.00 },
		"34": { processingDays: 12, price: 320.00 },
		"35": { processingDays: 12, price: 420.00 },
		"3": { processingDays: 20, price: 100.00 },
		"4": { processingDays: 20, price: 200.00 },
		"5": { processingDays: 20, price: 300.00 },
		"6": { processingDays: 20, price: 400.00 },
		"25": { processingDays: 7, price: 170.00 }
	},

	graduate: {
		"1065": { processingDays: 20, price: 0.00 },
		"1064": { processingDays: 20, price: 0.00 },
		"24": { processingDays: 7, price: 620.00 },
		"1062": { processingDays: 7, price: 920.00 },
		"22": { processingDays: 7, price: 920.00 },
		"42": { processingDays: 7, price: 770.00 },
		"1052": { processingDays: 7, price: 470.00 },
		"10": { processingDays: 5, price: 150.00 },
		"1053": { processingDays: 7, price: 150.00 },
		"1058": { processingDays: 7, price: 150.00 },
		"11": { processingDays: 5, price: 150.00 },
		"1054": { processingDays: 5, price: 150.00 },
		"1055": { processingDays: 5, price: 150.00 },
		"15": { processingDays: 7, price: 150.00 },
		"14": { processingDays: 7, price: 150.00 },
		"12": { processingDays: 5, price: 150.00 },
		"13": { processingDays: 5, price: 150.00 },
		"23": { processingDays: 7, price: 150.00 },
		"28": { processingDays: 5, price: 150.00 },
		"27": { processingDays: 5, price: 150.00 },
		"1057": { processingDays: 20, price: 0.00 },
		"9": { processingDays: 7, price: 200.00 },
		"29": { processingDays: 20, price: 200.00 },
		"1051": { processingDays: 7, price: 150.00 },
		"50": { processingDays: 7, price: 0.00 },
		"45": { processingDays: 7, price: 100.00 },
		"21": { processingDays: 7, price: 170.00 },
		"30": { processingDays: 12, price: 370.00 },
		"31": { processingDays: 12, price: 470.00 },
		"36": { processingDays: 12, price: 350.00 },
		"37": { processingDays: 12, price: 450.00 },
		"1": { processingDays: 12, price: 350.00 },
		"2": { processingDays: 12, price: 450.00 },
		"25": { processingDays: 7, price: 170.00 }
	}
};

const studentLevel = document.getElementById("documentsFor");
const documentRows = document.getElementById("documentRows");
const searchInput = document.getElementById("documentSearch");
const filterMenu = document.getElementById("filterMenu");
const filterBtn = document.getElementById("filterBtn");
const showAllBtn = document.getElementById("showAllBtn");

const currentLevel = studentLevel.value;

const details = credentialDetails[currentLevel]?.[id];

const price = details?.price ?? 0;
const processingDays = details?.processingDays ?? 0;


function getCurrentLevel() {
	const selectedValue = studentLevel?.value?.trim();

	const levelMap = {
		"3": "undergraduate",
		"2": "graduate"
	};

	return levelMap[selectedValue] || null;
}

let activeCategory = null;
let allDocumentsVisible = false;

function getCategory(name) {
	const normalized = name.toLowerCase();

	if (
		normalized.includes("cav-") ||
		normalized.includes("apostille") ||
		normalized.includes("wes form") ||
		normalized.includes("ices form") ||
		normalized.includes("iqas form")
	) {
		return "CAV (CHED/DFA/WES/CES)";
	}

	if (normalized.includes("retrieval of unclaimed")) {
		return "Unclaimed";
	}

	if (
		normalized.includes("transcript of records") ||
		normalized.includes("tor (")
	) {
		return "Transcript of Records";
	}

	return "Certifications";
}

function escapeHTML(value) {
	return String(value).replace(/[&<>"']/g, character => ({
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		'"': "&quot;",
		"'": "&#039;"
	})[character]);
}

function getDocuments() {
	const level = getCurrentLevel();

	if (!level) return [];

	const documents = credentialCatalog[level];

	if (!documents) return [];

	return Object.entries(documents).map(([id, name]) => ({
		id,
		name,
		category: getCategory(name)
	}));
}

function renderRows() {
	const level = getCurrentLevel();
	const searchValue = searchInput.value.trim().toLowerCase();

	// Default state: no level selected
	if (!level) {
		documentRows.innerHTML = `
            <tr class="empty-row">
                <td colspan="4">
                    Choose a document category or select “Show all Documents”.
                </td>
            </tr>
        `;
		return;
	}

	let documents = getDocuments();

	// Apply category filter
	if (activeCategory) {
		documents = documents.filter(doc =>
			doc.category === activeCategory
		);
	}

	// Apply search filter
	if (searchValue) {
		documents = documents.filter(doc =>
			doc.name.toLowerCase().includes(searchValue)
		);
	}

	// Default state: no filter, no search, and Show All is OFF
	if (!activeCategory && !searchValue && !allDocumentsVisible) {
		documentRows.innerHTML = `
            <tr class="empty-row">
                <td colspan="4">
                    Choose a document category or select “Show all Documents”.
                </td>
            </tr>
        `;
		return;
	}

	// No matching documents
	if (documents.length === 0) {
		documentRows.innerHTML = `
            <tr class="empty-row">
                <td colspan="4">No documents found.</td>
            </tr>
        `;
		return;
	}

	documentRows.innerHTML = documents.map(doc => {
		const details = credentialDetails[level]?.[doc.id] || {};

		const processingDays = details.processingDays ?? 0;
		const price = Number(details.price ?? 0);

		return `
            <tr>
			<td>
                <label class="document-choice">
                    <input
                        type="checkbox"
                        class="document-check"
                        data-id="${escapeHTML(doc.id)}"
						id="document-${escapeHTML(doc.id)}"
                    >
                    <span>${escapeHTML(doc.name)}</span>
                </label>
            </td>

                <td>
                    <input
                        type="number"
                        class="quantity-input"
                        min="1"
                        value="1"
                        data-id="${doc.id}"
						data-price="${price}"
						disabled
						aria-label="Quantity for ${escapeHTML(doc.name)}"
                    >
                </td>

                <td>${processingDays} days</td>

                <td>₱${price.toFixed(2)}</td>
            </tr>
        `;
	}).join("");

	documentRows.querySelectorAll(".document-check").forEach(
		checkbox => {
			checkbox.addEventListener("change", () => {
				const quantity = checkbox.closest("tr")
					.querySelector(".quantity-input");

				quantity.disabled = !checkbox.checked;

				if (!checkbox.checked) {
					quantity.value = 1;
				}

				updateTotals();
			});
		}
	);

	documentRows.querySelectorAll(".quantity-input").forEach(
		input => input.addEventListener("input", updateTotals)
	);

	updateTotals();
}

// CATEGORY FILTER BUTTONS
if (filterMenu) {
	filterMenu.querySelectorAll("button").forEach(button => {
		button.addEventListener("click", () => {
			activeCategory = button.dataset.category;

			filterMenu.querySelectorAll("button").forEach(item => {
				item.classList.toggle("selected", item === button);
			});

			filterMenu.hidden = true;

			filterBtn?.setAttribute("aria-expanded", "false");

			renderRows();
		});
	});
}

// SHOW ALL BUTTON
showAllBtn.addEventListener("click", () => {
	allDocumentsVisible = !allDocumentsVisible;
	activeCategory = null;

	showAllBtn.classList.toggle("selected", allDocumentsVisible);
	showAllBtn.setAttribute("aria-pressed", String(allDocumentsVisible));

	filterMenu.querySelectorAll("button").forEach(item => {
		item.classList.remove("selected");
	});

	renderRows();
});

// STUDENT LEVEL CHANGE
studentLevel?.addEventListener("change", () => {
	activeCategory = null;

	searchInput.value = "";

	filterMenu?.querySelectorAll("button").forEach(item => {
		item.classList.remove("selected");
	});

	renderRows();
});

// SEARCH
searchInput?.addEventListener("input", renderRows);

// FILTER DROPDOWN
filterBtn?.addEventListener("click", () => {
	const willOpen = filterMenu.hidden;

	filterMenu.hidden = !willOpen;

	filterBtn.setAttribute(
		"aria-expanded",
		String(willOpen)
	);
});

// INITIAL STATE: EMPTY TABLE
if (documentRows) {
	documentRows.innerHTML = "";
}

if (filterMenu) {
	filterMenu.hidden = true;
}

filterBtn?.setAttribute("aria-expanded", "false");

const documentStampFees = {
    graduate: {
        1: 30,
        2: 30,
        9: 30,
        10: 30,
        11: 30,
        12: 30,
        13: 30,
        14: 30,
        15: 30,
        21: 30,
        22: 30,
        23: 0,
        24: 30,
        25: 30,
        27: 30,
        28: 30,
        29: 30,
        30: 30,
        31: 30,
        36: 30,
        37: 30,
        42: 30,
        45: 0,
        50: 30,
        1051: 30,
        1052: 30,
        1053: 30,
        1054: 30,
        1055: 30,
        1057: 30,
        1058: 30,
        1062: 30,
        1064: 60,
        1065: 60
    },

    undergraduate: {
        3: 30,
        4: 30,
        5: 30,
        6: 30,
        10: 30,
        11: 30,
        13: 30,
        15: 30,
        21: 30,
        23: 0,
        24: 30,
        25: 30,
        27: 30,
        32: 30,
        33: 30,
        34: 30,
        35: 30,
        45: 0,
        48: 30,
        49: 30,
        50: 30,
        1051: 30,
        1053: 30,
        1054: 30,
        1055: 30,
        1056: 0,
        1058: 30,
        1063: 30
    }
};

function updateTotals() {
	const checkedIDs = [...document.querySelectorAll(
		".document-check:checked"
	)].map(checkbox => checkbox.dataset.id);
	const submitButton = document.getElementById('submissionArea');

	if(checkedIDs.length) {
		submitButton.hidden = false;
	} else {
		submitButton.hidden = true;
	}

	const level = getCurrentLevel();
	
	let stampTotal = 0;
	let documentTotal = 0;

	for (const docId of checkedIDs) {
		const details = credentialDetails[level]?.[docId] || {};
		
		const stampPrice =
			documentStampFees[level]?.[docId] ?? 0;

		const quantityInput = document.querySelector(
        `.quantity-input[data-id="${docId}"]`
    );

		stampTotal += stampPrice * quantityInput.valueAsNumber;
		documentTotal += details.price * quantityInput.valueAsNumber;
	}

	const stampTotalElement = document.getElementById("stampTotal");
	const documentTotalElement = document.getElementById("documentTotal");
	const grandTotalElement = document.getElementById("grandTotal");

	stampTotalElement.textContent = stampTotal.toFixed(2);
	documentTotalElement.textContent = documentTotal.toFixed(2);
	grandTotalElement.textContent = (stampTotal + documentTotal).toFixed(2);
}

// Display the default empty-row message when the page loads
document.addEventListener("DOMContentLoaded", () => {
	allDocumentsVisible = false;
	activeCategory = null;

	renderRows();
});

document.getElementById('requestForm').addEventListener('submit', function(event) {
    // Prevent the default form reload
    event.preventDefault(); 
    
    // This code ONLY runs if all 'required' fields are valid
    window.location.href = './requests.html';
  });