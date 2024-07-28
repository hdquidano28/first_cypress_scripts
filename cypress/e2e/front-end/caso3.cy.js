describe('Actualizar Información de la Cuenta', () => {
    before(() => {
        cy.fixture('user').as('userData');
    });

    it('Debe permitir que un usuario actualice su información de cuenta', function() {
        // Paso 1: Iniciar sesión
        cy.visit('http://demowebshop.tricentis.com/login');
        cy.get('#Email').type(this.userData.email);
        cy.get('#Password').type(this.userData.password);
        cy.get('input[value="Log in"]').click();

        // Paso 2: Navegar a la página de información de cuenta
        cy.visit('http://demowebshop.tricentis.com/customer/info');
        cy.wait(2000); // Esperar 2 segundos para asegurar que la página se ha cargado completamente

        // Paso 3: Actualizar la información de cuenta
        cy.get('#FirstName').clear().type('John');
        cy.get('#LastName').clear().type('Doe');

        // Usar el atributo value del input para seleccionarlo y hacer clic
        cy.get('input[value="Save"]').should('be.visible').and('be.enabled').click();

        // Paso 4: Verificar que la información se ha actualizado correctamente
        cy.get('.result').should('contain', 'Your account has been updated');
    });
});