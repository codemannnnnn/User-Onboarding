import { v4 as uuid} from 'uuid'



const preexistingFriend = 'Form'
const username = uuid().slice(0, 10)
const email = `${username}@cody.com`
const password = uuid().slice(0, 10)
const terms = 'agree'


describe('UserForm', () => {
  it('can navigate to the site', () => {
    cy.visit('')
    cy.url().should('include', 'localhost')
  })

  it('has friend from the get go', () => {
    cy.contains(preexistingFriend)
      .then(element => {
        debugger
      })
  })

  it('can submit a name', () => {
    cy.get('[data-cy_username_input="cy_username_input"]')
      .type(username)
      .should('have.value', username)

  })

  it('can input an email', () =>{
    cy.get('input[name="email"]')
      .type(email)
      .should('have.value', email)
  })

  it('can input a password', () =>{
    cy.get('input[name="password"]')
      .type(password)
      .should('have.value', password)
  })

  it('can check the terms box', () =>{
    cy.get(`input[name="${terms}"]`)
    .check()
    .should('have.checked')
  })

  // it('form is validated',() => {
  //   cy.get('.form-class')
  //     .contains(password)
  // })

  it('can submit form', () => {
    cy.contains('SUBMIT')
        .click()
  })






})
