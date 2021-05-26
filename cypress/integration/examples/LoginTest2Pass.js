describe('Test for a Medium Screen',function(){
    it('Visit a web page', function(){
        cy.viewport(1024,768)
        cy.visit('https://login.llamas.omg.pub/?login_challenge=2ccd7ff8da0f4c09b20bbefc6ee2f3c2')
        //Button check
         //Button check
               //Button check
  //Input User
  cy.get('.css-1mtgxzc').eq(0).type(Cypress.env('user_name'))
  //Input Pass
  cy.get('.css-1mtgxzc').eq(1).type(Cypress.env('user_password'))
  //Click Login button
  cy.get('button').eq(1).click()


        








      
        
        

        
    })
})