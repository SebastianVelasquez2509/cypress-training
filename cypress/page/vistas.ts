export class Vistas  {
    
    private logInBtn: string;
    private loginUser: string;
    private loginPasswod: string
    private menuContentPageURL: string;
    private btnPrimary: string;
    private logInText: string;
    private nameUser: string;
​
    constructor() {
​
        this.menuContentPageURL = "https://www.demoblaze.com"
        this.logInBtn = "#login2"
        this.loginUser = "#loginusername";
        this.loginPasswod = "#loginpassword"
        this.btnPrimary = ".btn-primary";
        this.logInText = "Log in";
        this.nameUser = "#nameofuser"
        
    }
​
    public visitMenuContentPage(): void {
        cy.visit(this.menuContentPageURL)
    }
​
    public logInClick(): void {
        cy.get(this.logInBtn).click();
    }
​
    public doinLoginUser(): void {
        cy.get(this.loginUser).type("sebastian25",{force: true});
        cy.get(this.loginPasswod).type("12345",{force: true});
​
    }
    
    public idBtnPrimary(): void {
        cy.get(".btn-primary").contains("Log in").click();
    }
    
    public validatingUser(): void {
        cy.get(this.nameUser).should("have.text","Welcome sebastian25");
    }
​
}