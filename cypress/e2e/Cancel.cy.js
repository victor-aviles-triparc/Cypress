describe('ZoeFin Website Test', () => {
  it('Navigate to ZoeFin Portal  cancel ', () => {
    // Visit the URL
    cy.visit('https://portal-test.zoefin.com/reschedule/66965aa0-9c17-11ed-b52a-53af9ee871d5');
    // Validate that the calendar is visible
    cy.get('.schedule-dashboard__calendar', { timeout: 10000 }).should('be.visible');



    // Click on a button (cancel )
    cy.get('.schedule-dashboard__calendar-main-cta > [data-testid]').click();

    //Why do you want cancel the meeting 
    cy.get('#ZUIDropdown-label').should('be.visible');
    cy.get('.jsx-2434811024 > [data-testid] > .ZUIDropdown__wrapper > .ZUIDropdown__main-selector').click();
    cy.log('Dropdown opened');
    cy.get(':nth-child(3) > .ZUIDropdown__options_single-option_text').click();

    //confirmation cancel btn 
    cy.log('Haciendo clic en el botón de cancelar');
    cy.get('.ZUIButton--primary').click();
    cy.screenshot('Cancel test result');




  });
});
