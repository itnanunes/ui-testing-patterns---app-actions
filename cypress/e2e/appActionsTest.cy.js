/// <reference types="cypress" />

const { email, senha } = require('../fixtures/data.json')
const { profilePage } = require("../support/pages/profile.page")

describe('Teste de Autenticação', () => {


  it('deve fazer o login com sucesso', () => {
    cy.login(email, senha)
    profilePage.customerName().should('have.text', 'Santana nunes Itna')
  })
})