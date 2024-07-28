describe('Consulta de Historial de Pedidos', () => {
    before(() => {
        cy.fixture('user').as('userData');
    });

    it('Debe permitir que un usuario vea su historial de pedidos', function() {
        // Paso 1: Iniciar sesión
        cy.visit('http://demowebshop.tricentis.com/login');
        cy.get('#Email').type(this.userData.email);
        cy.get('#Password').type(this.userData.password);
        cy.get('input[value="Log in"]').click();

        // Paso 2: Navegar a la página de historial de pedidos
        cy.visit('http://demowebshop.tricentis.com/orders/history', { failOnStatusCode: false });

        // Paso 3: Verificar que se muestren todos los pedidos realizados por el usuario
        cy.get('.order-list').should('exist');
        cy.get('.order-list').children().should('have.length.greaterThan', 0);
    });
});