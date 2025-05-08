describe('Navigation Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234');  
  });

  it('should navigate to the About page when clicking on "About"', () => {
    cy.get('[data-cy="nav-about"]').click();  
    cy.url().should('include', '/aboutPage');    
  });

  it('should navigate to the Home page when clicking on "Home"', () => {
    cy.get('[data-cy="nav-home"]').click();
    cy.url().should('include', '/homePage');
  });

  it('should navigate to the Contact page when clicking on "Contact"', () => {
    cy.get('[data-cy="nav-contact"]').click();
    cy.url().should('include', '/cardSetsPage');
  });
});