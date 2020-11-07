import createUUID from "@/utils/id.utils";

export class Configuration {
    constructor(people, timePerPerson) {
        this.id = createUUID()
        this.people = people;
        this.timePerPerson = timePerPerson;
    }
}