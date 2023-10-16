export class PersonalFormPage {
     private pageUrl: string;
     private firstName: string;
     private lastName: string;
     private email: string;
     private genderRadio: string;
     private mobileNumber: string;
     private dateOfBirth: string;
     private selectMonth: string;
     private selectYear: string;
     private selectDay: string;
     private hobbiesCheckbox2: string;
     private hobbiesCheckbox3: string;
     private currentAddress: string;
     private stateCity: string;
     private submitBtn: string;
     private confirmForm: string;

constructor() {
     this.pageUrl = "https://demoqa.com/automation-practice-form"
     this.firstName = "#firstName";
     this.lastName = "#lastName";
     this.email = "#userEmail";
     this.genderRadio = "[type='radio']";
     this.mobileNumber = "#userNumber";
     this.dateOfBirth = "#dateOfBirthInput";
     this.selectMonth = ".react-datepicker__month-select"
     this.selectYear = ".react-datepicker__year-select"
     this.selectDay = "[aria-label*='July 27th']"
     this.hobbiesCheckbox2 = "#hobbies-checkbox-2";
     this.hobbiesCheckbox3 = "#hobbies-checkbox-3";
     this.currentAddress = "#currentAddress";
     this.stateCity= "#stateCity-wrapper"
     this.submitBtn = "#userForm"
     this.confirmForm = "#example-modal-sizes-title-lg"
}
public visitPage(): void {
     cy.visit(this.pageUrl);
     }

public fillForm(personalInformation: any): void {
     cy.get(this.firstName).type(personalInformation.name);
     cy.get(this.lastName).type(personalInformation.lastName);
     cy.get(this.email).type(personalInformation.email);
     cy.get(this.mobileNumber).type(personalInformation.mobileNumber);
     cy.get(this.genderRadio).check(personalInformation.gender, { force: true });
     cy.get(this.dateOfBirth).click();
     cy.get(this.selectMonth).select("July");
     cy.get(this.selectYear).select("2016");
     cy.get(this.selectDay).click();
     cy.get(this.hobbiesCheckbox2).check({ force: true });
     cy.get(this.hobbiesCheckbox3).check({ force: true });
     cy.get(this.currentAddress).type(personalInformation.currentAddress);
     //   cy.get(this.stateCity).contains("Select State").click().contains("Delhi").click().should("have.value", "Delhi");
     //   cy.get(this.stateCity).contains("Select City").click().contains("NCR").click().should("have.value", "NCR");
     cy.get(this.submitBtn).submit();
}
     public selectState(): void {
     }

     public selectCity(): void {
     }

public verifyForm(): void {
     cy.get(this.confirmForm).contains("Thanks for submitting the form")
     }
}
