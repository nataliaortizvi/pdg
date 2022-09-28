import { defineStore } from "pinia";
///// OPTIONS STORE
export const useVariablesStore = defineStore("variables", {
    state: () => ({
        variables: [
            {
                name: 'confianza',
                papers: [
                    {
                        title: 'IoT Passport: A Blockchain-Based Trust Framework for Collaborative Internet-of-Things',
                        year: '2019',
                        author: 'John Geddes',
                        about: 'Determining the nature and properties of trust at first may seem pointless because it is so much a part of the human condition',
                    },
                    {
                        title: 'Trust - Building The Bridge To Out Users',
                        year: '2016',
                        author: 'John Geddes',
                        about: 'Determining the nature and properties of trust at first may seem pointless because it is so much a part of the human condition',
                    },
                    {
                        title: 'A trust Framework Model For Situational Contexts',
                        year: '2006',
                        author: 'Carsten Schultz',
                        about: 'Trust is a widely studied and acknowledged concept including a diversity of operationalizations',
                    },
                ],
            },
            {
                name: 'cooperacion',
                papers: [
                    {
                        title: 'IoT Passport: A Blockchain-Based Trust Framework for Collaborative Internet-of-Things',
                        year: '2019',
                        author: 'John Geddes',
                        about: 'Determining the nature and properties of trust at first may seem pointless because it is so much a part of the human condition',
                    },
                    {
                        title: 'Trust - Building The Bridge To Out Users',
                        year: '2016',
                        author: 'John Geddes',
                        about: 'Determining the nature and properties of trust at first may seem pointless because it is so much a part of the human condition',
                    },
                    {
                        title: 'A trust Framework Model For Situational Contexts',
                        year: '2006',
                        author: 'Carsten Schultz',
                        about: 'Trust is a widely studied and acknowledged concept including a diversity of operationalizations',
                    },
                ],
            },
        ],
    }),
    getters: {
        getVariables: (state) => [...state.variables],

    },
    actions: {
        newVariable(variable) {
            this.variables.push(variable);
        },
        getVariableById(id) {
            const filteredVariables = this.variables.filter((variable) => id.toLowerCase().replace(/ /g, "") === variable.name.toLowerCase().toLowerCase().replace(/ /g, ""));
            return filteredVariables ? { ...filteredVariables[0] } : null
        },
    },
});