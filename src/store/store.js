import Vue from 'vue';
import {Configuration} from "@/model/configuration/Configuration.model";
import {Person} from "@/model/configuration/Person.model";

const state = Vue.observable({
    configuration: new Configuration([new Person("Włodek")], 120)
});

export default state;