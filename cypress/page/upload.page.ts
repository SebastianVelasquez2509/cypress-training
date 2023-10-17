export class UploadPage {
    private baseUrl: string;
    private selectUpload: string;
    private btnUload: string;
    private confirmFile: string;

    constructor(){
        this.baseUrl = "https://the-internet.herokuapp.com/upload";
        this.selectUpload = "input[type=file]";
        this.btnUload = "#file-submit"
        this.confirmFile = "#content h3"
    }

    public visitPage(): void {
        cy.visit(this.baseUrl);
    }
    
    public uploadFile(): void {
        cy.get(this.selectUpload).attachFile("FondoZoom.png")
    }
    public btnUloadFile(): void {
        cy.get(this.btnUload).click()
    }
    public confirmFileName(): void {
        cy.get(this.confirmFile).should("have.text", "File Uploaded!")
    }
}