import state from '../../store';

export const getters = {
    activeClock: () => state.activeClock
};

const mutations = {
    overrideActiveClock: (clock) => state.activeClock = clock,
    startClock: () => state.activeClock.startCountdown(),
    resetClock: () => state.activeClock.resetCountdown(),
    stopClock: () => state.activeClock.stopCountdown(),
    nullifyActiveClock: () => state.activeClock = null
};

export const actions = {
    setActiveClock: function (clock) {
        mutations.overrideActiveClock(clock)
        mutations.startClock()
    },
    resetClock: () => mutations.resetClock(),
    dismantleActiveClock: function () {
        mutations.stopClock()
        mutations.nullifyActiveClock()
    }
};