describe('Forms Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234/cardSetsPage');

    
    cy.get('[data-cy="set_form"]', { timeout: 2000 }).should('exist');
  });

  it('should show an error message if the form is submitted with an empty field', () => {
    
    cy.get('input[name="titleInput"]').clear();

    
    cy.get('[data-cy="set_form"]').submit();

    
    cy.get('.error-message')
      .should('be.visible')
      .and('contain', 'TITLE CANNOT BE EMPTY');
  });

  it('should successfully submit the form with valid input', () => {
    
    cy.get('input[name="titleInput"]').type('My Set');

    
    cy.get('[data-cy="set_form"]').submit();

    
    cy.contains('My Set').should('exist'); 
  });
});
