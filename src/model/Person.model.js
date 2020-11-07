import createUUID from "@/utils/id.utils";

export class Person {
    constructor(name) {
        this.id = createUUID()
        this.name = name;
        this.timeSpoken = null
        this.cards = []
    }
}

Person.prototype.setTimeSpoken = function (timeSpoken) {
    this.timeSpoken = timeSpoken
};

Person.prototype.addCard = function (card) {
    this.cards.push(card)
}