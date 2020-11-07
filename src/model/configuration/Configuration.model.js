import createUUID from "@/utils/common/id.utils";

export class Configuration {
    constructor(people, timePerPerson) {
        this.id = createUUID()
        this.people = people;
        this.timePerPerson = timePerPerson;
    }
}