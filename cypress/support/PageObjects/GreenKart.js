class GreenKart{
    searchbar(){
        return cy.get('.search-keyword')
    }

    productResults(){
        return cy.get('.product')
    }

    visibleProductResults(){
        return cy.get('.product:visible')
    }

    products(){
        return cy.get('.products')
    }

    cart(){
        return cy.get('.cart-icon > img')
    }

    checkout(){
        return cy.get('button').contains('PROCEED TO CHECKOUT')
    }

    placeOrder(){
        return cy.contains('Place Order')
    }
}

export default GreenKart