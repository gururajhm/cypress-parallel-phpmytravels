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
    
describe('Admin - General Setting', function() {
	it('Access General settings and then update', () => {
          
            cy.get(common.GeneralSettingLink).click();
            
     });
     
  
	 
});
