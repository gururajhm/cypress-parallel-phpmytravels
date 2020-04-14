// TestCase 2 to create CMS Pages 
import { username, password, host} from '../fixtures/credentials';
import { login, common, cmsPages, menu } from '../fixtures/selectors.json';
import pagesData from '../fixtures/data.js';
beforeEach(() => {
    cy.visit(host);

    cy.login(username, password);
  })

  afterEach(() => {
    cy.get(menu.logout).click();
    })
    
describe('Accounts Test Cases', function() {
	it('Access Accounts Screen and update', () => {
          
            cy.get(common.AccountsLink).click();
            
     });
     
  
	 
});
