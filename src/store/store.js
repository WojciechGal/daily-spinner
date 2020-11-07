import Vue from 'vue';
import {Configuration} from "@/model/configuration/Configuration.model";

const state = Vue.observable({
    configuration: new Configuration([], 5)
});

export default state;