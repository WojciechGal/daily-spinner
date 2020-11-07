import createUUID from "@/utils/common/id.utils";

export class DailyCourse {
    constructor(config) {
        this.id = createUUID()
        this.timePerPerson = config.timePerPerson
        cleanPeopleData(config.people)
        this.notFinishedPeople = config.people
        this.finishedPeople = []
    }
}

DailyCourse.prototype.transferPerson = function (givenPerson, timeElapsed) {
    this.notFinishedPeople = this.notFinishedPeople.filter(person => person.id !== givenPerson.id)
    givenPerson.setTimeElapsed(timeElapsed)
    this.finishedPeople.push(givenPerson)
}

function cleanPeopleData(people) {
    people.forEach(person => {
        person.cleanElapsedTime()
        person.cleanCards()
    });
}