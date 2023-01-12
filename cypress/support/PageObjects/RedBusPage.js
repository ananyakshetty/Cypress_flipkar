class RedBusPage{
    fromInput(){
        return cy.get('input[data-message="Please enter a source city"]')
    }

    firstdropdown(){
        return cy.get('li[select-id="results[0]"]')
    }

    destinationInput(){
        return cy.get('input[data-message="Please enter a destination city"]')
    }

    todayOnwardDate(){
        return cy.get('td[class="current day"]').eq(1)
    }

    todayReturnDate(){
        return cy.get('td[class="current day"]').eq(0).next()
    }

    search(){
        return cy.get('#search_btn')
    }

    busesFound(){
        return cy.get('span[class="f-bold busFound"]')
    }
    
}
export default RedBusPage