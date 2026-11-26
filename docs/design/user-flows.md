# User Flow: Requesting a Document

This flow follows the stages in the project scope: open the portal, choose a registrar, create an account, request a document, pay online, and check status.

## Flow

1. **Open the portal.** The user lands on the ODRS portal.
2. **Choose registrar or campus.** The user selects from the list of registrars.
3. **Has an account?**
   - **No:** Register with email and password, verify the email, then enter profile information.
   - **Yes:** Log in. If the account or password is invalid, return to the login step.
4. **New Request tab.** The user opens the New Request tab.
5. **Enter academic year information.** Program, year, and semester or term.
6. **Search for documents.** The user finds the needed document(s). *(Redesign: add a search box.)*
7. **Enter or confirm quantity.**
8. **Enter request details.** Purpose and classification.
9. **Submit.**
10. **Pay online.**
11. **Request submitted.** The system issues a reference number and a claiming voucher.
12. **Check status.** The user opens the Requests tab to see the processing status, tentative release date, and next steps.

## Points Where Users May Get Stuck

- Step 2: Registrar options marked "Launching Soon" look clickable.
- Step 3: Users who forget their password need a clear recovery path.
- Step 6: Long document lists without search.
- Step 10: Payment must clearly show what has been paid and what is still due.
- Step 12: Status must be easy to find without the hamburger menu.

## Notes

- The flow in the initial proposal (Figure 11) does not include the status check at step 12. Add it here.
- Create a separate page for step 10 (Pay online) in the prototype, since the repo does not have one yet.