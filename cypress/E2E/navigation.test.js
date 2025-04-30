describe('Navigation Tests', () => {
    beforeEach(() => {
      cy.visit('/');  
    });
  
    it('should navigate to the About page when clicking on "About"', () => {
      cy.get('[data-cy="nav-about"]').click();  
      cy.url().should('include', '/about');    
    });
  
    it('should navigate to the Home page when clicking on "Home"', () => {
      cy.get('[data-cy="nav-home"]').click();
      cy.url().should('include', '/home');
    });
  
    it('should navigate to the Contact page when clicking on "Contact"', () => {
      cy.get('[data-cy="nav-contact"]').click();
      cy.url().should('include', '/contact');
    });
  });
  