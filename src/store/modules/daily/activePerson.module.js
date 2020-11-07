import state from '../../store';

export const getters = {
    activePerson: () => state.activePerson
};

const mutations = {
    overrideActivePerson: (person) => state.activePerson = person,
    nullifyActivePerson: () => state.activePerson = null
};

export const actions = {
    setActivePerson: (person) => mutations.overrideActivePerson(person),
    dismantleActivePerson: () => mutations.nullifyActivePerson()
};