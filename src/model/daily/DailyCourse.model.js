import createUUID from "@/utils/id.utils";

export class DailyCourse {
    constructor(config) {
        this.id = createUUID()
        this.timePerPerson = config.timePerPerson
        this.notFinishedPeople = config.people
        this.finishedPeople = []
    }
}

DailyCourse.prototype.transferPerson = function (givenPerson, timeElapsed) {
    this.notFinishedPeople = this.notFinishedPeople.filter(person => person.id !== givenPerson.id)
    givenPerson.setTimeElapsed(timeElapsed)
    this.finishedPeople.push(givenPerson)
}