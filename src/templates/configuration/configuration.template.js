import {Configuration} from "@/model/configuration/Configuration.model";
import {Person} from "@/model/common/Person.model";
import allowedTime from "@/templates/configuration/allowedTime.template"

const configTemplate = new Configuration(
    [
        new Person("Włodek"),
        new Person("Marcin"),
        new Person("Wojtek"),
        new Person("Perun")
    ], allowedTime[1].value)

export default configTemplate