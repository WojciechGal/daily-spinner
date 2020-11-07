import state from '../../store';

export const getters = {
    activePerson: () => state.activePerson
};

const mutations = {
    overrideActivePerson: (person) => state.activePerson = person,
    addCardToActivePerson: (card) => state.activePerson.addCard(card),
    nullifyActivePerson: () => state.activePerson = null
};

export const actions = {
    setActivePerson: (person) => mutations.overrideActivePerson(person),
    giveCard: (card) => mutations.addCardToActivePerson(card),
    dismantleActivePerson: () => mutations.nullifyActivePerson()
};