describe('Forms Tests', () => {
    beforeEach(() => {
      cy.visit('/create-set');  
    });
  
    it('should show an error message if the form is submitted with an empty field', () => {
      cy.get('input[name="setName"]').clear();  
      cy.get('form').submit();  
      cy.get('.error-message').should('be.visible').and('contain', 'This field is required');  
    });
  
    it('should successfully submit the form with valid input', () => {
      cy.get('input[name="setName"]').type('My Set');  
      cy.get('form').submit();  
      cy.url().should('include', '/sets');  
    });
  });
  