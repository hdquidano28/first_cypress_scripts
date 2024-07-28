describe('Añadir un Libro al Carrito', () => {
    before(() => {
        cy.fixture('user').as('userData');
    });

    it('Debe permitir que un usuario añada un libro al carrito', function() {
        // Paso 1: Iniciar sesión
        cy.visit('http://demowebshop.tricentis.com/login');
        cy.get('#Email').type(this.userData.email);
        cy.get('#Password').type(this.userData.password);
        cy.get('input[value="Log in"]').click();

        // Paso 2: Navegar a la página de libros
        cy.visit('http://demowebshop.tricentis.com/books');

        // Paso 3: Seleccionar un libro específico (por ejemplo, el primero)
        cy.get('.item-box').first().find('.product-title').invoke('text').then((bookTitle) => {
            cy.log(`Añadiendo al carrito: ${bookTitle}`);
            cy.get('.item-box').first().find('.product-title a').click();
        });

        // Paso 4: Añadir el libro al carrito
        cy.get('#add-to-cart-button-13').should('be.visible').click();
        cy.get('.bar-notification').should('contain', 'The product has been added to your shopping cart');

        // Paso 5: Verificar que el carrito tiene productos
        cy.visit('http://demowebshop.tricentis.com/cart');

        // Verificar que la clase .product no esté vacía
        cy.get('.product').should('have.length.greaterThan', 0);
    });
});