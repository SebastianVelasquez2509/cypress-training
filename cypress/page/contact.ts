export class Contact {
    private contactbtn: string;
    private emalContact: string;
    private nameContact: string;
    private menssageContact: string;
    private btnSend: string;
​
    constructor() {
        this.contactbtn = ".nav-link";
        this.emalContact = "#recipient-email";
        this.nameContact = "#recipient-name";
        this.menssageContact = "#message-text";
        this.btnSend = ".btn-primary"
    }
​
    public sendMessage (): void {
        cy.get(this.contactbtn).contains("Contact").click();
        cy.get(this.emalContact).type("josebasveri25@gmail.com",{force: true});
        cy.get(this.nameContact).type("sebastian25",{force: true});
        cy.get(this.menssageContact).type("cordial saludo, hice una compra, muchas gracias");
        cy.get(this.btnSend).contains("Send message").click();
    }
}