import  { ShoppingCart, Vistas, Contact}  from "../page/index";
​
const vistas = new Vistas();
const shopping = new ShoppingCart();
const contact = new Contact();
​
​
describe("Logg in feature", () => {
  beforeEach(() => {
    vistas.visitMenuContentPage();
​
    vistas.logInClick();
​
    vistas.doinLoginUser();
    vistas.idBtnPrimary();
  });
  it("Validating successful login", () => {
    vistas.validatingUser();
  });
​
  it("buying", () => {
    shopping.selectPhone();
    shopping.selectLaptop();
    shopping.selectMonitor();
    shopping.cartOrder();
    shopping.typeFrom();
  });
​
  it("contact", ()=> {
    contact.sendMessage();
  })
  it("Veriricar todo", ()=>{
​
  })
​
​
});