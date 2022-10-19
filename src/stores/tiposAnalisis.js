import { defineStore } from "pinia";
///// OPTIONS STORE
export const useAnalisisStore = defineStore("analisiss", {
    state: () => ({
        analisiss: [
            {
                name: 'analisisDeGrupo',
                tiposAnalisis: [
                    {
                        img: '../../dist/imgs/paired.png',
                        title: 'Paired T-test',
                        descrip: '2 grupos con <strong>igual cantida </strong>de elementos'
                    },
                    {
                        img: '../../dist/imgs/paired.png',
                        title: 'Unpaired T-test',
                        descrip: '2 grupos con <strong>diferente cantida </strong>de elementos'
                    },
                    {
                        img: '../../dist/imgs/paired.png',
                        title: 'ANOVA + Post Hoc Test',
                        descrip: '3 grupos <strong>indiferente la cantida </strong>de elementos'
                    },
                ],
                
            },
        ],
    }),
    getters: {
        getAnalisiss: (state) => [...state.analisiss],

    },
    actions: {
        newAnalisis(analisis) {
            this.analisiss.push(analisis);
        },
        getAnalisisById(id) {
            const filteredAnalisiss = this.analisiss.filter((analisis) => id.toLowerCase().replace(/ /g, "") === analisis.name.toLowerCase().toLowerCase().replace(/ /g, ""));
            return filteredAnalisiss ? { ...filteredAnalisiss[0] } : null
        }
    },
});