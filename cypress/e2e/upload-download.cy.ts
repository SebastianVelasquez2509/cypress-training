import { UploadPage } from "../page/upload.page";

const uploadPage = new UploadPage();

describe("Subir archivo", () => {
    it("debería subir un archivo y verificar el nombre", () => {
        uploadPage.visitPage();
        uploadPage.uploadFile();
        uploadPage.btnUloadFile();
        uploadPage.confirmFileName();
    });
});

