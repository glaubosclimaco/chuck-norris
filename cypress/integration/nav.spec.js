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

  describe('When you visit random jokes page', () => {
    it('Test button "One more"', () => {
      cy.visit(baseUrl)
      cy.get('[data-cy=random-joke-btn]').click()
      cy.get('[data-cy=one-more-btn]')
      cy.go('back')
    })
  })




})

// describe('When you visit the random joke Page', () => {
//     it('Find buttons', () => {
//       cy.visit(baseUrl)
//       cy.get('[data-cy=random-joke-btn').click()
//     //   cy.contains('Random Joke').click()
//       cy.get('data-cy=submit').click()
//     })
//   })


//   describe('Visits the Random Page', () => {
//     it('Find text', () => {
//       cy.visit('http://localhost:3000/')
//       cy.contains('Random').click()
//       cy.contains('Random Joke')
//     //   cy.get('.back')
//     })
//   })

      


// context('iphone-5 resolution', () => {
//   beforeEach(() => {
//     /**
//      * Run these tests as if in a desktop browser,
//      * with a 720p monitor
//      */
//     cy.viewport('iphone-5')
//   })
// })
