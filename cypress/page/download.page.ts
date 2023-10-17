export class DownloadImage {
    private baseUrl: string;
    private btnDownload: string;
    private verifydownload: string;
    // private verifyFile: string;
    constructor() {
        this.baseUrl = "https://demoqa.com/upload-download"
        this.btnDownload = "#downloadButton"
        this.verifydownload = "./cypress/downloads/sampleFile.jpeg"
        // this.verifyFile = "\sampleFile.jpeg"
    }
    public visitPage(): void {
        cy.visit(this.baseUrl)
    }
    public downloadFile(): void {
        cy.get(this.btnDownload).click({force: true})
    }
    public verifyDownloadFile(): void {
        cy.readFile(this.verifydownload);
    }
}