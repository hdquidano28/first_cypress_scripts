describe('Autenticación de Usuario', () => {
    before(() => {
        cy.fixture('user').as('userData');
    });

    it('Debe permitir que un usuario inicie sesión correctamente', function() {
        cy.visit('http://demowebshop.tricentis.com/login');

        cy.get('#Email').type(this.userData.email);
        cy.get('#Password').type(this.userData.password);
        cy.get('input[value="Log in"]').click();

        cy.get('.account').should('be.visible').and('contain', 'john.doe');
    });
});