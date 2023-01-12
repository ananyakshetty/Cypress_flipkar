describe('Flipkart', () => {
    let bookName='Meditations'
    it('Flipkart Book Purchase: Pass', { retries: 2 }, () => {
        cy.visit('https://www.flipkart.com/')//load url
        cy.get('input[title="Search for products, brands and more"]').type('Books to Read')//type book
        cy.get('ul li div a div').contains('books to read').click()//select "books to read" from dropdoen
        cy.get('a[title*="Meditations"]').invoke('removeAttr', 'target').click()//open the book
        cy.contains('Add to cart').realClick()
        cy.wait(3000)
        cy.contains(bookName).should('be.visible')//verify if the book is same
        cy.contains('Place Order').realClick()
        cy.wait(3000)
        cy.contains('Enter Email/Mobile number').parent('div').children('input').type('abcd@xyz.com')
        cy.contains('CONTINUE').realClick()
    });

    it('Flipkart Book Purchase: Fail', { retries: 0 }, () => {
        cy.visit('https://www.flipkart.com/')//load url
        cy.get('input[title="Search for products, brands and more"]').type('Books to Read')//type book
        cy.get('ul li div a div').contains('books to read').click()//select "books to read" from dropdoen
        cy.get('a[title*="Meditations"]').invoke('removeAttr', 'target').click()//open the book
        cy.contains('Add to cart').realClick()
        cy.wait(3000)
        cy.contains('Atomic Habits').should('be.visible')//verify if the book is same
        cy.contains('Place Order').realClick()
        cy.wait(3000)
        cy.contains('Enter Email/Mobile number').parent('div').children('input').type('abcd@xyz.com')
        cy.contains('CONTINUE').realClick()
    });
})