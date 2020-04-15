// TestCase 3 to create / access Adming General setting page..  
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
    
describe('Test Case 3 Admin - General Setting', function() {
	it('Test Case 3 Access General settings and then update', () => {
          
            cy.get(common.GeneralSettingLink).click();    
     });	 
});
