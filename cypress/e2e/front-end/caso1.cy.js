describe('Verificación de Registro de Usuario', () => {
    const generateEmail = () => `john.doe.${Date.now()}@example.com`;

    it('Debe permitir que un usuario se registre correctamente', () => {
        const email = generateEmail();

        cy.visit('http://demowebshop.tricentis.com/register');

        cy.get('#gender-male').click();
        cy.get('#FirstName').type('John');
        cy.get('#LastName').type('Doe');
        cy.get('#Email').type(email);
        cy.get('#Password').type('Password123');
        cy.get('#ConfirmPassword').type('Password123');
        cy.get('#register-button').click();

        cy.get('.result').should('contain', 'Your registration completed');
        cy.log(`Nuevo usuario registrado con correo: ${email}`);

        // Guardar el email en el archivo de fixtures
        cy.writeFile('cypress/fixtures/user.json', { email: email, password: 'Password123' });
    });
});