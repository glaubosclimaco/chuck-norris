import { baseUrl } from '../../cypress.json'

// For desktop view
context('720p resolution', () => {
  beforeEach(() => {
    /**
     * Run these tests as if in a desktop browser,
     * with a 720p monitor
     */
    cy.viewport(1280, 720)
  })

  describe('When you visit home', () => {
    it('Find buttons', () => {
      cy.visit(baseUrl)
      cy.get('[data-cy=random-joke-btn]')
      cy.get('[data-cy=joke-by-category-btn]')
      cy.get('[data-cy=joke-by-search-btn]')
    })
  })

  describe("When you visit random jokes' page", () => {
    it('Test button "One more"', () => {
      cy.visit(baseUrl)
      cy.get('[data-cy=random-joke-btn]').click()
      cy.get('[data-cy=one-more-btn]')
      cy.go('back') //going back home
    })
  })

  describe("When you visit joke by category's  page", () => {
    it('Test joke selector', () => {
      cy.visit(baseUrl)
      cy.get('[data-cy=joke-by-category-btn]').click()
      //   setting sigle value
      cy.get('[data-cy=category-selector]').select('animal')
      // confirm the selected value
      cy.get('[data-cy=category-selector]').should('have.value', 'animal')
      cy.go('back')
    })
  })
})

describe("When you visit joke by search's", () => {
  it('Test button "Search joke"', () => {
    cy.visit(baseUrl)
    cy.get('[data-cy=joke-by-search-btn]').click()
    cy.get('[data-cy=search-joke-btn]')
    cy.go('back') //going back home
  })
})

// context('iphone-5 resolution', () => {
//   beforeEach(() => {
//     /**
//      * Run these tests as if in a desktop browser,
//      * with a 720p monitor
//      */
//     cy.viewport('iphone-5')
//   })
// })
