describe('ZoeFin Website Test reschedule', () => {
  it('Navigate to ZoeFin Portal and Perform Re-schedule', () => {
    // Visit the URL
    cy.visit('https://portal-test.zoefin.com/reschedule/66965aa0-9c17-11ed-b52a-53af9ee871d5');
    
    
    // Validate that the calendar is visible
    cy.get('.schedule-dashboard__calendar', { timeout: 10000 }).should('be.visible');
    

    //re---schedule

    //select date note day should mod befer run to the next date

    cy.get('[data-testid="calendar-day-30"] > span').click();
    
    cy.get('.styles-module_timesContainer__0JX0d').should('be.visible');
    cy.get('.ZUIDropdown__main-selector').click();
    //change to pacific time
    cy.get(':nth-child(4) > .ZUIDropdown__options_single-option_text').click();
    // select date and re-schedule
    cy.get('[data-testid="2-availability"]').click();
    cy.get('.ZUIButton--primary').click();


    //current meeting Time Visible

    cy.get('.styles_modalDashboard__container__ZCOKO > .meeting > .meeting__title').should('be.visible');

    // fill data
    cy.wait (3000);
    cy.get('#name').should('be.visible').clear().type("Victor The Best");
    cy.get('#last_name').should('be.visible').clear().type("QA");
    cy.get('#email').should('be.visible').clear().type("v@aviles.com");
    cy.get('#phone_number').should('be.visible').clear().type("3219972900");
    cy.get('.styles_confirmationSchedule__cta__sRqTe > .ZUIButton--primary').should('be.visible').click();
    

// test result 

cy.get('.styles_modalDashboard__message__F3iou > span').should('be.visible');
cy.screenshot('Re-Schedule  test result');
    

   



   


  });
});
