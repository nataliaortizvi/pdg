import { defineStore } from "pinia";
///// OPTIONS STORE
export const useAnalisisStore = defineStore("analisis", {
    state: () => ({
        analisis: [
            {
                grupoDeAnalisis: [
                    {
                        img: '../../public/imgs/paired.png',
                        title: 'Paired T-test',
                        descrip: '2 grupos con igual cantida de elementos'
                    },
                    {
                        img: '../../public/imgs/unpaired.png',
                        title: 'Unpaired T-test',
                        descrip: '2 grupos con diferente cantida de elementos'
                    },
                    {
                        img: '../../public/imgs/anova.png',
                        title: 'ANOVA + Post Hoc Test',
                        descrip: '3 grupos indiferente la cantida de elementos'
                    },
                ],
                correlacion: [
                    {
                        img: '../../public/imgs/paired.png',
                        title: 'Spearman',
                        descrip: '2 grupos con igual cantida de elementos'
                    },
                    {
                        img: '../../public/imgs/paired.png',
                        title: 'Pearson',
                        descrip: '2 grupos con diferente cantida de elementos'
                    },
                ],
            },
        ],
    }),
    getters: {
        getAnalisis: (state) => [...state.analisis],

    },
    actions: {
        newAnalisis(analisis) {
            this.analisis.push(analisis);
        },
        getAnalisisById(id) {
            const filteredAnalisis = this.analisis.filter((OneAnalisis) => id.toLowerCase().replace(/ /g, "") === OneAnalisis.name.toLowerCase().toLowerCase().replace(/ /g, ""));
            return filteredAnalisis ? { ...filteredAnalisis[0] } : null
        }
    },
});