it('renders the home page', () => {
  cy.visit('/');
  cy.findByTestId('app').within(() => {
    cy.findByTestId('route-home').should('exist');
  });
});
