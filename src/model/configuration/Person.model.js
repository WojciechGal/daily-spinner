import createUUID from "@/utils/id.utils";

export class Person {
    constructor(name) {
        this.id = createUUID()
        this.name = name;
    }
}