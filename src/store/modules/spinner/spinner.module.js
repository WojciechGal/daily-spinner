import {actions as activePersonActions, getters as activePersonGetters} from '@/store/modules/spinner/activePerson.module';
import {actions as activeClockActions, getters as activeClockGetters} from '@/store/modules/spinner/activeClock.module';
import {actions as dailyCourseActions, getters as dailyCourseGetters} from '@/store/modules/spinner/dailyCourse.module';
import {drawPerson} from "@/utils/spinner/random.utils";
import {Clock} from "@/model/spinner/Clock.model";
import convertSecToMin from "@/utils/spinner/time.utils";
import {getRedCard, getYellowCard} from "@/utils/spinner/card.utils";

export const getters = {
    dailyCourse: () => dailyCourseGetters.dailyCourse(),
    activePerson: () => activePersonGetters.activePerson(),
    activeClock: () => activeClockGetters.activeClock()
};

export const actions = {
    startDaily: function (dailyCourse) {
        dailyCourseActions.loadDailyCourse(dailyCourse)
        activePersonActions.setActivePerson(drawPerson(getters.dailyCourse().notFinishedPeople))
        activeClockActions.setActiveClock(new Clock(dailyCourse.timePerPerson))
    },
    nextPerson: function () {
        dailyCourseActions.transferDailyPerson(activePersonGetters.activePerson(), convertSecToMin(activeClockGetters.activeClock().timeElapsed))
        activeClockActions.resetClock()
        activePersonActions.setActivePerson(drawPerson(getters.dailyCourse().notFinishedPeople))
    },
    finishDaily: function () {
        dailyCourseActions.transferDailyPerson(activePersonGetters.activePerson(), convertSecToMin(activeClockGetters.activeClock().timeElapsed))
        activePersonActions.dismantleActivePerson()
        activeClockActions.dismantleActiveClock()
    },
    giveYellowCard: () => activePersonActions.giveCard(getYellowCard()),
    giveRedCard: () => activePersonActions.giveCard(getRedCard())
};