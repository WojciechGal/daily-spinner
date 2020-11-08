import {Configuration} from "@/model/configuration/Configuration.model";
import {Person} from "@/model/common/Person.model";
import allowedTime from "@/templates/configuration/allowedTime.template"

const configTemplate = new Configuration(
    [new Person("Włodek")], allowedTime[1].value)

export default configTemplate