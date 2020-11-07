import createUUID from "@/utils/id.utils";

export class Person {
    constructor(name) {
        this.id = createUUID()
        this.name = name;
        this.timeElapsed = null
        this.cards = []
    }
}

Person.prototype.setTimeElapsed = function (timeElapsed) {
    this.timeElapsed = timeElapsed
};

Person.prototype.addCard = function (card) {
    this.cards.push(card)
}

Person.prototype.cleanElapsedTime = function () {
    this.timeElapsed = null
}

Person.prototype.cleanCards = function () {
    this.cards = []
}