// Fixtures
import { login, common, menu } from '../fixtures/selectors.json';

 

const compareSnapshotCommand = require('cypress-visual-regression/dist/command');

compareSnapshotCommand();

 

Cypress.on('window:before:load', win => {
	delete win.fetch;
});

 

Cypress.Commands.add('login', (name, password) => {
	
	cy.get(login.username).type(name);
	cy.get(login.password).type(password);
	cy.get(login.button).click(); // 
});

Cypress.Commands.add('logout', () => {
	cy.get(menu.logout).click();
});



Cypress.on('uncaught:exception', (err, runnable) => {
	return false;
});

// Please add the date in this format: 4 March 2020
Cypress.Commands.add('fillCalendar', (field, dateOne, dateTwo) => {
	cy.get(field)
		.find('input')
		.last()
		.click();
	const splitDateOne = dateOne.split(' ');
	const splitDateTwo = dateTwo.split(' ');

	// go up to the top level year navigation
	cy.get(common.calendarNavButton).click();
	cy.get(common.calendarNavButton).click();

	// click passed in year from date split one
	cy.get(common.yearButton)
		.contains(splitDateOne[2])
		.click();
	// click passed in month from date split one
	cy.get(common.monthButton)
		.contains(splitDateOne[1])
		.click();
	// click passed in day from date split one
	cy.get(common.dayButton)
		.contains(splitDateOne[0])
		.click();

	// go up to the top level year navigation
	cy.get(common.calendarNavButton).click();
	cy.get(common.calendarNavButton).click();

	// click passed in year from date split two
	cy.get(common.yearButton)
		.contains(splitDateTwo[2])
		.click();
	// click passed in month from date split two
	cy.get(common.monthButton)
		.contains(splitDateTwo[1])
		.click();
	// click passed in day from date split two
	cy.get(common.dayButton)
		.contains(splitDateTwo[0])
		.click();
});
