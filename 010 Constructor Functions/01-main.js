// let user1 = {
//     firstName: "Ivan",
//     lastName: "Ivanov",
//
//     show: function () {
//         console.log(this.firstName + " " + this.lastName);
//     }
// }
//
// let user2 = {
//     firstName: "Olga",
//     lastName: "Petrova",
//
//     show: function () {
//         console.log(this.firstName + " " + this.lastName);
//     }
// }
//
// user1.show();
// user2.show();

function NameBock(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    this.showName = function () {
        console.log(`${this.firstName} ${this.lastName}` )
    }
}
let user1 = new NameBock("Ivan", "Ivanov");
let user2 = new NameBock("Olga", "Petrova");

user1.showName();
user2.showName();