// TestCase 4 to create / access Account page...
import { username, password, host} from '../fixtures/credentials';
import { login, common, cmsPages, menu } from '../fixtures/selectors.json';

beforeEach(() => {
    cy.visit(host);

    cy.login(username, password);
  })

  afterEach(() => {
    cy.get(menu.logout).click();
    })
    
describe('Test Case 4 - Accounts Test Cases', function() {
	it('Test Case 4 - Access Accounts Screen and update', () => {
          
            cy.get(common.AccountsLink).click();    
     });	 
});
