describe('Launch New SRP', function() {
  it('Visit Premier Inn',function() {
    cy.visit('http://www.premierinn.com.goto-new-srp.ode.whitbread.digital/gb/en/search.html')
  })
})

describe('Cookie Notice', function() {
  it('click the link "I agree"',function() {
    cy.get('agree-toggled-button-srp').click();
  });
})

describe('Enter Location', function() {
  it("Gets, types and asserts", function() {
   
    // Get an input, type into it and verify that the value has been updated
      cy.get('.pi-search-input-container').find('input')
       .type('London', { force: true })
       .should('have.value', 'London')
       cy.get('li').find('span').first().click
  })
})

describe('Datepicker', function() {
  it('click on date picker "Today"',function() {
    cy.get('search-console-form-date-picker').find('button').first().click({ force: true });
  });
})

describe('Current month', function() {
  it('Current month from "Date Picker"',function() {
  cy.get('#date-picker-months').find('.date-box').first().click({ force: true });
  });
})

describe('Moved to Next month', function() {
  it('moved to next month from "Date Picker"',function() {
    cy.get('#date-picker-right-arrow').find('.wb-icon_arrow-right').click({ force: true });
  });
})


// describe('Select a date', function() {
//   it('select a date from "Date Picker"',function() {
//     cy.get('.month-container',{ force: true }).find('.date-box').last().click();
//   });
// })

describe('Search', function() {
  it('click on "Search"',function() {
    cy.get('#search-console-form-button').click({ force: true });
  });
})


describe('Click on Filters', function() {
  it('click the link "Filters"',function() {
    cy.contains('Filters').click({ force: true })
  })
})

describe('Facilities Filters', function() {
  it('click the checkbox "Air conditioning"',function() {
    cy.contains('Air conditioning').click({ force: true })
    
  });
})

describe('Apply Filters', function() {
  it('click on "Apply Filters"',function() {
    cy.contains('Apply filters').click({ force: true })
  });
})

// describe('Close Filters', function() {
//   it('close filters menu "Filters"',function() {
//    // cy.get('filters-slide').find('close-button').click();
//   });
// })

describe('Select Hotel Card', function() {
  it('click first hotel card "Hotel"',function() {
    cy.wait(5000)
    cy.get('#hotel-card-6').click({ force: true });
  });
})

describe('Back to Search Results', function() {
  it('click "Back to Search Results"',function() {
     cy.contains('Back to Search Results').click({ force: true })
     cy.get('agree-toggled-button-srp').click({ force: true })
  });
})

describe('Open Privacy Policy', function() {
  it('click the link "Privacy Policy"',function() {
  cy.contains('Privacy Policy').click()
  })
})




