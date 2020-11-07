import state from '../../store';

export const getters = {
    dailyCourse: () => state.dailyCourse
};

const mutations = {
    loadDailyCourse: (dailyCourse) => state.dailyCourse = dailyCourse,
    transferDailyPerson: (person, timeElapsed) => state.dailyCourse.transferPerson(person, timeElapsed)
};

export const actions = {
    loadDailyCourse: (dailyCourse) => mutations.loadDailyCourse(dailyCourse),
    transferDailyPerson: (person, timeElapsed) => mutations.transferDailyPerson(person, timeElapsed)
};