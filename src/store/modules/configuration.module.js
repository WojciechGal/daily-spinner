import state from '../store';
import {Person} from "@/model/configuration/Person.model";

export const getters = {
    configuration: () => state.configuration
};

const mutations = {
    overrideConfiguration: (configuration) => state.configuration = configuration,
    overrideTime: (time) => state.configuration.timePerPerson = time,
    overridePeople: (people) => state.configuration.people = people
};

export const actions = {
    changeConfiguration: (configuration) => mutations.overrideConfiguration(configuration),
    updateTime: (time) => mutations.overrideTime(time),
    addPerson(name) {
        mutations.overridePeople(getters.configuration().people.concat(new Person(name)))
    },
    removePerson(id) {
        mutations.overridePeople(getters.configuration().people.filter(person => person.id !== id))
    }
};
