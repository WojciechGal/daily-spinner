import state from '../../store';
import {actions as activePersonActions, getters as activePersonGetters} from '@/store/modules/daily/activePerson.module';
import {actions as activeClockActions, getters as activeClockGetters} from '@/store/modules/daily/activeClock.module';
import {drawPerson} from "@/utils/daily/random.utils";
import {Clock} from "@/model/daily/Clock.model";
import convertSecToMin from "@/utils/daily/time.utils";

export const getters = {
    dailyCourse: () => state.dailyCourse,
    activePerson: () => activePersonGetters.activePerson(),
    activeClock: () => activeClockGetters.activeClock()
};

const mutations = {
    loadDailyCourse: (dailyCourse) => state.dailyCourse = dailyCourse,
    transferDailyPerson: (person, timeElapsed) => state.dailyCourse.transferPerson(person, timeElapsed)
};

export const actions = {
    startDaily: function (dailyCourse) {
        mutations.loadDailyCourse(dailyCourse)
        activePersonActions.setActivePerson(drawPerson(getters.dailyCourse().notFinishedPeople))
        activeClockActions.setActiveClock(new Clock(dailyCourse.timePerPerson))
    },
    nextPerson: function () {
        mutations.transferDailyPerson(activePersonGetters.activePerson(), convertSecToMin(activeClockGetters.activeClock().timeElapsed))
        activeClockActions.resetClock()
        activePersonActions.setActivePerson(drawPerson(getters.dailyCourse().notFinishedPeople))
    },
    finishDaily: function () {
        mutations.transferDailyPerson(activePersonGetters.activePerson(), convertSecToMin(activeClockGetters.activeClock().timeElapsed))
        activePersonActions.dismantleActivePerson()
        activeClockActions.dismantleActiveClock()
    }
};