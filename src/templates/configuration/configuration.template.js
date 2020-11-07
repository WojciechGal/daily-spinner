import {Configuration} from "@/model/configuration/Configuration.model";
import {Person} from "@/model/commons/Person.model";
import allowedTime from "@/templates/configuration/allowedTime.template"

const configTemplate = new Configuration(
    [new Person("Włodek")], allowedTime[1])

export default configTemplate