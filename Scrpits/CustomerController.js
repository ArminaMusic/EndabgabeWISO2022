/*
Aufgabe: Endabagbe Döner Trainer
Name: Armina Music
Matrikel: 268021
Datum: 12.02.22
*/
var DoenerTrainer;
(function (DoenerTrainer) {
    function handleCustomers() {
        let customer = new DoenerTrainer.Customer(new DoenerTrainer.Vector(250, 100), 100);
        customer.draw(customer.position);
        console.log(customer);
    }
    DoenerTrainer.handleCustomers = handleCustomers;
})(DoenerTrainer || (DoenerTrainer = {}));
//# sourceMappingURL=CustomerController.js.map