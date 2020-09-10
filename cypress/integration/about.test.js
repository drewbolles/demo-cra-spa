it('renders the about page', () => {
  cy.visit('/about');
  cy.findByTestId('app').within(() => {
    cy.findByTestId('route-about').should('exist');
  });
});
