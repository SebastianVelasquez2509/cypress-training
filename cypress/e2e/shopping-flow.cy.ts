const User= "sebastian25"
const country="Colombia"
const city="Tunja"
const password= "12345"
const month="Octubre"
const year="2023"

describe("Logg in feature", () => {
    beforeEach(() => {
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
        cy.visit("https://www.demoblaze.com/index.html#");
    });
    it("Validating successful login", () => {

        cy.get("#login2").click();
        cy.get("#loginusername").should("be.visible");
        cy.get("#loginusername").type(User, {force:true});
        cy.get("#loginpassword").type(password)
        
        cy.contains("button","Log in").click(); 
        cy.contains("Welcome sebastian25").should("be.visible");
    });
});

describe("Add to cart", ()=>{
    beforeEach(()=> {
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
        cy.visit("https://www.demoblaze.com/index.html#")
    })
    it("Successful purchase of products and ", ()=>{
        cy.contains("Samsung galaxy s6").click()
        cy.contains("Samsung galaxy s6").should("be.visible");
        cy.contains("Add to cart").click()
        cy.contains("Home").click()
        cy.contains("Nokia lumia 1520").click()
        cy.contains("Nokia lumia 1520").should("be.visible")
        cy.contains("Add to cart").click()
        cy.contains("Home").click()
        cy.contains("Nexus 6").click()
        cy.contains("Nexus 6").should("be.visible")
        cy.contains("Add to cart").click()
        cy.contains("Cart").click()
        cy.get("#totalp").should("have.text", "1830");
        cy.contains("Place Order").click();
        cy.get("#name").type(User);
        cy.get("#country").type(country);
        cy.get("#city").type(city);
        cy.get("#card").type(password);
        cy.get("#month").type(month);
        cy.get("#year").type(year);
        cy.get("button[onclick=\"purchaseOrder()\"]").click();
        cy.contains("Thank you for your purchase!").should("be.visible")
    })
})
describe("send a message", ()=>{
    beforeEach(()=> {
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
        cy.visit("https://www.demoblaze.com/index.html#")
    })
    it("successful shipment", ()=>{
        cy.get("a[data-toggle='modal'][data-target='#exampleModal']").click();
        
        cy.get("#recipient-email").type(User);
        
        cy.get("#recipient-name").type(User)
        
        cy.get("#message-text").type("Esto es un mensaje de prueba")
        
        cy.get("button[onclick='send()']").click();
        
        cy.contains("Home").should("be.visible")
    })
})

