describe('Soustraction de deux éléments', () => {
    it("clic sur un élément", () => {
        cy.visit('http://localhost:3000') 
        cy.get(".touch[data-value='9']")
           .click();
    }); 

    it("clic sur soustraction", () =>{
        cy.get(".touch[data-value='-']")
        .click();
    })

    it("clic sur deuxieme element", () =>{
        cy.get(".touch[data-value='8']")
        .click();
    })

    it("clic sur = ", () =>{
        cy.get(".touch[data-value='=']")
        .click();
    })

    it("verification resultat", () =>{
        cy.get(".result")
        .contains('1');
    })
})

describe('Addition de deux éléments', () => {
    it("clic sur un élément", () => {
        cy.visit('http://localhost:3000') 
        cy.get(".touch[data-value='9']")
           .click();
    }); 

    it("clic sur +", () =>{
        cy.get(".touch[data-value='+']")
        .click();
    })

    it("clic sur deuxieme element", () =>{
        cy.get(".touch[data-value='9']")
        .click();
    })

    it("clic sur = ", () =>{
        cy.get(".touch[data-value='=']")
        .click();
    })

    it("verification resultat", () =>{
        cy.get(".result")
        .contains('18');
    })
})

describe('Division de deux éléments', () => {
    it("clic sur un élément", () => {
        cy.visit('http://localhost:3000') 
        cy.get(".touch[data-value='9']")
           .click();
    }); 

    it("clic sur /", () =>{
        cy.get('.touch[data-value="/"]')
        .click();
    })

    it("clic sur deuxieme element", () =>{
        cy.get(".touch[data-value='3']")
        .click();
    })

    it("clic sur = ", () =>{
        cy.get(".touch[data-value='=']")
        .click();
    })

    it("verification resultat", () =>{
        cy.get(".result")
        .contains('3');
    })
})

describe('carre dun element', () => {
    it("clic sur carre", () =>{
        cy.visit('http://localhost:3000') 
        cy.get('.touch[data-value="√x"]')
        .click();
    })

    it("clic sur un élément", () => {
        cy.get(".touch[data-value='9']")
           .click();
    }); 

    it("clic sur = ", () =>{
        cy.get(".touch[data-value='=']")
        .click();
    })

    it("verification resultat", () =>{
        cy.get(".result")
        .contains('4');
    })
})

// describe('Modulo dun element', () => {
//     it("clic sur un élément", () => {
//         cy.visit('http://localhost:3000') 
//         cy.get(".touch[data-value='10']")
//            .click();
//     }); 

//     it("clic sur %", () =>{
//         cy.get('.touch[data-value="%"]')
//         .click();
//     })

//     it("clic sur = ", () =>{
//         cy.get(".touch[data-value='=']")
//         .click();
//     })

//     it("verification resultat", () =>{
//         cy.get(".result")
//         .contains('1');
//     })
// })