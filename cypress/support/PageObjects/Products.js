class ProductsPage
{
    checkoutButton(){
        return cy.get('a[class="nav-link btn btn-primary"]')
    }

    checkoutButton2(){
        return cy.get('button.btn.btn-success')
    }

    contryDropdown(){
        return cy.get('#country')
    }

    countryResults(){
        return cy.get('.suggestions > ul > li > a')
    }
}
export default ProductsPage