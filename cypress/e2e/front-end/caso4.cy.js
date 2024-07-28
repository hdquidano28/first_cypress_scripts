describe('Recuperación de Contraseña', () => {
    before(() => {
        cy.fixture('user').as('userData');
    });

    it('Debe permitir que un usuario recupere su contraseña', function() {
        cy.visit('http://demowebshop.tricentis.com/passwordrecovery');

        cy.get('#Email').type(this.userData.email);
        cy.get('input[value="Recover"]').click();

        cy.get('.result').should('contain', 'Email with instructions has been sent to you.');
    });
});