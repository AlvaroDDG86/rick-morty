
describe('Characters tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080/');
    })
    it('should render the list', () => {
        cy.get('.list')
            .children()
            .should('have.length', 20)
    });
    it('shoul search', () => {
        cy.get('input').type('Rick Sanchez{enter}');
        cy.get('.list')
            .children()
            .should('have.length', 4)
    })
    it('should filter by status', () => {
        cy.get('.item').last().should('have.text','unknown').click()
    });
})