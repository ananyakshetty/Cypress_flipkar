class LoginPage
{
    visit()
    {
        cy.visit('https://www.nopcommerce.com/en/login')
    }

    fillEmail(value){
       var field=cy.get('#Username')
       field.clear()
       field.type(value)
       return this
    }

    fillPassword(value){
        var field=cy.get('#Password')
        field.clear()
        field.type(value)
        return this
    }

    submit(){
        var button=cy.get('input[value="Log in"]')
        button.click()
    }

}

export default LoginPage