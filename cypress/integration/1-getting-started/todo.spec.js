/// <reference types="cypress" />



describe('example to-do app', () => {

  it('should go to / page ', () => {

    cy.visit('https://amer.media.gov.sa/assystnet/#homepage') 

    cy.get('#assyst_components_input_TextField_0').type('oemogthwai')

    cy.get('#assyst_components_input_TextField_1').type('yS3ReAgla{enter}')

    cy.wait(500)

    cy.get('.messages') 
                      .should('be.visible')
                      .should('have.text','Incorrect username or password')

    cy.get('#assyst_components_input_TextField_0').clear()
    cy.get('#assyst_components_input_TextField_1').clear()

  })

  it('should go to homepage', () => {

    cy.visit('https://amer.media.gov.sa/assystnet/#homepage')
  
    cy.get('#assyst_components_input_TextField_0').type('oemogthwai')
    cy.get('#assyst_components_input_TextField_1').type('yS3ReAglay')

    cy.wait(200)
  
    cy.get('.loginButton > .dijitButtonNode').click()
  
  
  
  })
  

})



