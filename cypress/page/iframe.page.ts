export class IframePage{
    private titlePage:string;
    private cssNav:string;
    private iframe:string;
    private baseUrl:string;

    constructor(){
        this.baseUrl="https://www.w3schools.com/html/html_iframe.asp"
        this.titlePage="#main h1"
        this.cssNav=".ga-nav"
        this.iframe="iframe[src='default.asp']"
    }

    public visit(): void{
        cy.visit(this.baseUrl);
        cy.frameLoaded(this.iframe);
    }
    public getFrameTitle(){
        cy.iframe(this.iframe).find(this.titlePage).should("have.text", "HTML Tutorial")
    }
    public goToCssPageInframe(){
        cy.iframe(this.iframe).contains(this.cssNav,"CSS").should("be.visible")
    }
}