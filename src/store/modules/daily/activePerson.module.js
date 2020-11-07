import state from '../../store';
import {getRedCard, getYellowCard} from "@/utils/daily/card.utils";

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
    dismantleActivePerson: () => mutations.nullifyActivePerson(),
    giveYellowCard: () => mutations.addCardToActivePerson(getYellowCard()),
    giveRedCard: () => mutations.addCardToActivePerson(getRedCard())
};