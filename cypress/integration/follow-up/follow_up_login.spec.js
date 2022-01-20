/// <reference types="cypress" />



describe('Follow up login ', () => {

    let count = '0012'

  it('should go to / page ', () => {
    cy.visit('https://followup-dev.media.gov.sa/Account/logout')

    cy.get('#username').type('follow-up-manger1')

    cy.get('#password').type('000')

    cy.get('#btnLogin').click()

    cy.get('#main-menu-navigation > :nth-child(3) > a').click()

    /* ==== Generated with Cypress Studio ==== */

    cy.get('#TaskNo').type(count);
    cy.get('#TaskSubject').click().type(count);
    cy.get('#TaskDate').click();
    cy.get('[data-day="01/13/2022"]').click();
    cy.get('#select2-TaskPriorityId-container').click();
    cy.get('#NoOfDays').click();
    cy.get('#NoOfHours').clear();
    cy.get('#NoOfHours').type('3');
    cy.get('.form-horizontal > :nth-child(4)').click();
    cy.get('#TaskEndDate').click();
    cy.get('[data-day="01/17/2022"]').click();
    cy.get('.form-horizontal > :nth-child(5)').click();
    cy.get(':nth-child(5) > :nth-child(2) > .position-relative > .select2-container > .selection > .select2-selection > .select2-selection__rendered').click();
    cy.get('#select2-TaskTypeId-container').click();
    cy.get('#TaskNote').click();
    cy.get('#select2-TaskTypeId-container').click({force: true})

    cy.get('#SaveNewTask').click();

    /* ==== End Cypress Studio ==== */

    /* ==== Generated with Cypress Studio ==== */
    cy.get('#select2-TaskTypeId-container').click();
    /* ==== End Cypress Studio ==== */
  })

  

})



