import state from '../store';

export const getters = {
    configuration: () => state.configuration
};

const mutations = {
    overrideConfiguration: (configuration) => state.configuration = configuration
};

export const actions = {
    changeConfiguration: (configuration) => mutations.overrideConfiguration(configuration)
};
