export class ShoppingCart  {
    ​
        private listItems: string;
        private itemSelect: string;
        private btnAddCart: string;
        private navHome: string;
        private btncart: string;
        private btnOrder: string;
        private nameOrder: string;
        private countryOrder: string;
        private cityOrder: string;
        private cardOrder: string;
        private monthOrder: string;
        private yearOrder: string;
        private btnPrimary: string;
    ​
        constructor() {
            this.listItems = ".list-group-item";
            this.itemSelect = ".hrefch";
            this.btnAddCart = ".btn-lg";
            this.navHome = ".nav-link";
            this.btncart = "#cartur";
            this.btnOrder = ".btn-success";
            this.nameOrder = "#name";
            this.countryOrder = "#country";
            this.cityOrder = "#city";
            this.cardOrder = "#card";
            this.monthOrder = "#month";
            this.yearOrder = "#year";
            this.btnPrimary = ".btn-primary";
    ​
        }
    ​
        public selectPhone (): void {
            cy.get(this.listItems).contains("Phones").click();
            cy.get(this.itemSelect).contains("Sony xperia z5").click();
            cy.get(this.btnAddCart).contains("Add to cart").click();
            cy.get(this.navHome).contains("Home ").click();
        }
        public selectLaptop (): void {
            cy.get(this.listItems).contains("Laptops").click();
            cy.get(this.itemSelect).contains("Sony vaio i7").click();
            cy.get(this.btnAddCart).contains("Add to cart").click();
            cy.get(this.navHome).contains("Home ").click();
        }
        public selectMonitor (): void {
            cy.get(this.listItems).contains("Monitors").click();
            cy.get(this.itemSelect).contains("ASUS Full HD").click();
            cy.get(this.btnAddCart).contains("Add to cart").click();
            cy.get(this.navHome).contains("Home ").click();
        }
    ​
        public cartOrder (): void {
            cy.get(this.btncart).click();
            cy.get(this.btnOrder).contains("Place Order").click()
        }
    ​
        public typeFrom (): void {
            cy.get(this.nameOrder).type("sebastian25",{force: true});
            cy.get(this.countryOrder).type("Colombia",{force: true});
            cy.get(this.cityOrder).type("Tunja",{force: true});
            cy.get(this.cardOrder).type("123456789",{force: true});
            cy.get(this.monthOrder).type("8",{force: true});
            cy.get(this.yearOrder).type("2023",{force: true});
            cy.get(this.btnPrimary).contains("Purchase").click();
            cy.wait(1000)
            cy.get(this.btnPrimary).contains("OK").click();
        }
    ​
    }