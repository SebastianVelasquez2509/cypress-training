import { DownloadImage } from "../page/download.page";
const downLoadImage = new DownloadImage();
describe("Descargar imagen", () => {
    it("visitar y descargar imagen", ()=> {
        downLoadImage.visitPage();
        downLoadImage.downloadFile();
        downLoadImage.verifyDownloadFile();
    })
})