/*
Aufgabe: Endabagbe Döner Trainer
Name: Armina Music
Matrikel: 268021
Datum: 12.02.22
*/

namespace DoenerTrainer {
     
    export function handleCustomers(): void {
        let customer: Customer = new Customer(new Vector(250, 100), 100);

        customer.draw(customer.position);

        console.log(customer);
        
    }





}