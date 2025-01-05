// <reference types='Cypress' />

describe('Test suite of calender', function(){
   it('redirect to offers page and test calender', function(){
      cy.visit(Cypress.env('url')+'/seleniumPractise/#/');
      const month = "October 2027";
      const monthNumber = "10";
      const date = "22";
      const year = "2027";
       cy.get('a[href="#/offers"].cart-header-navlink').invoke('removeAttr', 'target').click();
      //cy.get('a[href="#/offers"].cart-header-navlink').then((el) => {
          //const url = el.prop('href');
          //cy.visit(url);
          cy.get('.react-date-picker__inputGroup').click();
          cy.get('.react-calendar__navigation__label').click();
          cy.get('button.react-calendar__navigation__label').click();
          cy.get('button.react-calendar__tile.react-calendar__decade-view__years__year').contains(year).click();
          cy.get(`button.react-calendar__tile.react-calendar__year-view__months__month > abbr[aria-label="${month}"]`).click();
          cy.get('button.react-calendar__tile.react-calendar__month-view__days__day').contains(date).click();

          // Assertions
          cy.get('input[name="month"]').should('have.value', monthNumber);
          cy.get('input[name="day"]').should('have.value', date);
          cy.get('input[name="year"]').should('have.value', year);
     // });
   });
});

// describe('Calendar test',()=>
// {
//     it('Verify date selection',()=>{
//         const monthNumber = "6";
//         const date = "15";
//         const year = "2027";
//         const expectedList = [monthNumber,date,year];
//
//         cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/offers");
//         cy.wait(5000)
//         cy.get(".react-date-picker__inputGroup").click();
//
//         cy.get(".react-calendar__navigation__label").click();
//         cy.get(".react-calendar__navigation__label").click();
//         cy.contains("button",year).click();
//         cy.get(".react-calendar__year-view__months__month").eq(Number(monthNumber)-1).click();
//         cy.contains("abbr",date).click();
//
//         //Assertion
//         cy.get(".react-date-picker__inputGroup__input").each(($el,index)=>
//             {
//                 cy.wrap($el).invoke('val').should('eq',expectedList[index]);
//             }
//         )
//     })
// })
