import { PersonalFormPage } from "../page/personalFormPage";
const personalFormPage = new PersonalFormPage();
describe("Llenar formulario", () => {
  before("visitar pagina", () => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
    personalFormPage.visitPage();
  });
  it("Llenar el formulario", () => {
    
    const personalInformation = {
      name: "Holmes",
      lastName: "Salazar",
      email: "test@email.com",
      gender: "Male",
      dateOfBirth: "27 Jul 2016",
      mobileNumber: "3656589156",
      hobbies: ["Music", "Reading"],
      currentAddress: "Av siempreViva # 123",
    };
    personalFormPage.fillForm(personalInformation);
    personalFormPage.verifyForm();
  });

  // Agregar pruebas adicionales aquí, como interactuar con los campos de State y City.
});