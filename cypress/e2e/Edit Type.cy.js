describe('ZoeFin Website Test', () => {
  it('Navigate to ZoeFin Portal and Perform Re-schedule', () => {
    // Visit the URL
    cy.visit('https://portal-test.zoefin.com/reschedule/66965aa0-9c17-11ed-b52a-53af9ee871d5');

    // Maximizar la ventana
    cy.viewport(1920, 1080); // change screen size  

    // Validate that the calendar is visible
    cy.get('.schedule-dashboard__calendar', { timeout: 10000 }).should('be.visible');
    
    //Actions
    cy.get('.meeting__schedule-edit > .jsx-2536202604').click();
    cy.get(':nth-child(2) > .sc-iGgWBj > .ZUICard__container').click();
    cy.get('.styles_modalDashboard__meeting__RIkZZ > [data-testid]').click();
    cy.get('.styles_modalDashboard__message__F3iou > span').should('be.visible');

    // Tomar una captura de pantalla
    cy.screenshot('Type Communication test result');
  });
});
