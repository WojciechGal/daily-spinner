import Vue from 'vue';
import configTemplate from "@/templates/configuration.template";

const state = Vue.observable({
    configuration: configTemplate,
    daily: null,
    activePerson: null,
    activeClock: null
});

export default state;