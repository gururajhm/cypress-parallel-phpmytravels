// login test cases.
import { username, password, host} from '../fixtures/credentials';
import { login, common, menu } from '../fixtures/selectors.json';

afterEach(() => {
	cy.get(menu.logout).click();
  })

describe('Test Case 1 Login page', function() {
	it('Test Case 1 logs you to php admin travels page with valid credentials', () => {
		cy.visit(host);
		cy.login(username, password);

 	});
});

