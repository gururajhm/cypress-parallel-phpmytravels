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
    
describe('CMS page Create new records', function() {
	it('to create cms pages TestCase1 and validate', () => {
          
            cy.get(common.cmsLink).click();
            cy.get(common.cmsPagesLink).click();
            cy.get(cmsPages.addBtn).click();
            cy.get(cmsPages.title).type(pagesData.pages.testCases.testdataone.title);
            cy.get(cmsPages.permlink).type(pagesData.pages.testCases.testdataone.permlink);
    
             cy.get(cmsPages.keywords).type(pagesData.pages.testCases.testdataone.keywords);
             cy.get(cmsPages.desc).type(pagesData.pages.testCases.testdataone.desc);
             cy.get(cmsPages.saveBtn).click();
     });
	 
});
