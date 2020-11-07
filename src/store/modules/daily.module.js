import state from '../store';
import {drawPeron} from "@/utils/daily/random.utils";
import {Clock} from "@/model/daily/Clock.model";

export const getters = {
    daily: () => state.daily,
    activePerson: () => state.activePerson,
    activeClock: () => state.activeClock
};

const mutations = {
    loadNewDaily: (daily) => state.daily = daily,
    transferDailyPerson: (peerson, time) => state.daily.transferPerson(peerson, time),
    setActivePerson: (person) => state.activePerson = person,
    dismantleActivePerson: () => state.activePerson = null,
    setActiveClock: (clock) => state.activeClock = clock,
    startClock: () => state.activeClock.startCountdown(),
    resetClock: function () {
        state.activeClock.resetCountdown()
    },
    stopClock: function () {
        state.activeClock.stopCountdown()
    },
    dismantleActiveClock: () => state.activeClock = null
};

export const actions = {
    startDaily: function (daily) {
        mutations.loadNewDaily(daily)
        mutations.setActivePerson(drawPeron(getters.daily().notFinishedPeople))
        mutations.setActiveClock(new Clock(getters.daily().timePerPerson))
        mutations.startClock()
    },
    nextPerson: function () {
        mutations.transferDailyPerson(getters.activePerson(), getters.activeClock().timeElapsed)
        mutations.resetClock()
        mutations.setActivePerson(drawPeron(getters.daily().notFinishedPeople))
    },
    finishDaily() {
        mutations.transferDailyPerson(getters.activePerson(), getters.activeClock().timeElapsed)
        mutations.dismantleActivePerson()
        mutations.dismantleActiveClock()
    }
};