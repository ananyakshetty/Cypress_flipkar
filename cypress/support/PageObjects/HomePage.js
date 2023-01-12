class Homepage
{
    getEditBox(){
        return  cy.get('input[name="name"]:nth-child(2)')
    }

    getTwoWayDataBinding(){
        return cy.get('input[class="ng-untouched ng-pristine ng-valid"]')
    }

    getGender(){
        return cy.get('select')
    }

    getEnterprunar(){
        return cy.get('#inlineRadio3')
    }

    getShopTab(){
        return cy.get('a[href="/angularpractice/shop"]')
    }
}
export default Homepage