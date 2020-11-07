import {Configuration} from "@/model/configuration/Configuration.model";
import {Person} from "@/model/commons/Person.model";

const configTemplate = new Configuration(
    [new Person("Włodek")],
    120)

export default configTemplate