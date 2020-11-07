import Vue from 'vue';
import configTemplate from "@/templates/configuration/configuration.template";

const state = Vue.observable({
    configuration: configTemplate,
    dailyCourse: null,
    activePerson: null,
    activeClock: null
});

export default state;