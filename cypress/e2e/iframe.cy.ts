import { IframePage } from "../page/iframe.page";

const iframePage=new IframePage();

describe("iframe", ()=>{
    it("iframe page", ()=>{
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
        iframePage.visit();
        iframePage.getFrameTitle();
        iframePage.goToCssPageInframe();
    })
})