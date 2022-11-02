import { defineStore } from "pinia";
import { collection, addDoc, onSnapshot, updateDoc, doc, setDoc } from "firebase/firestore";
import { db } from '../firebase/config';
///// OPTIONS STORE
export const useVariablesStore = defineStore("variables", {
    state: () => ({
        papers: [],
        paper: {},
    }),
    /*variables: [
        {
            name: 'confianza',
            papers: [
                {
                    title: 'IoT Passport: A Blockchain-Based Trust Framework for Collaborative Internet-of-Things',
                    year: '2019',
                    author: 'John Geddes',
                    about: 'Determining the nature and properties of trust at first may seem pointless because it is so much a part of the human condition',
                    definition: 'La confianza es una forma de la fe. Siempre que confiamos, ponemos nuestra fe en algo que actuará como lo esperamos.',
                    requirements: 'Para generar confianza debes generar credibilidad. \n La credibilidad es la cualidad de ser confiable y creíble. Si los usuarios no te ven creíble, no confiaran en ti y no creerán nada de lo que dices, muestras o ofreces.',
                    formula: 'Confiabilidad = capacidades + benevolencia + integridad.',
                    definitionFormula: 'Capacidades: Donde muestras las habilidades. Presentar un agradable y tranquilo diseño es esencial. \n Benevolencia: Tu diseño debe ser benévolo. Debe ayudar a los usuarios y tener buen interés de corazón. \n Integridad: ético, justo y honesto.',
                    context: '2 personas: Alguien que genera la confianza (Trustee) y alguien que confia (Trustor) \n El ambiente: Internet, la pàgina web, la aplicación, tu diseño. \n Acciones resultantes: la confianza conduce a acciones: los usuarios realizan la acción (compran el producto en tu página). \n Elementos subjetivos: las personas son diferentes en cuanto a la rapidez con la que pueden confiar. Recuarda que según las experiencias de cada persona, algunas podrán confiar más rápidamente que otras.',
                },
                {
                    title: 'Trust - Building The Bridge To Out Users',
                    year: '2016',
                    author: 'John Geddes',
                    about: 'Determining the nature and properties of trust at first may seem pointless because it is so much a part of the human condition',
                    definition: 'La confianza es una forma de la fe. Siempre que confiamos, ponemos nuestra fe en algo que actuará como lo esperamos.',
                    requirements: 'Para generar confianza debes generar credibilidad. \n La credibilidad es la cualidad de ser confiable y creíble. Si los usuarios no te ven creíble, no confiaran en ti y no creerán nada de lo que dices, muestras o ofreces.',
                    formula: 'Confiabilidad = capacidades + benevolencia + integridad.',
                    definitionFormula: 'Capacidades: Donde muestras las habilidades. Presentar un agradable y tranquilo diseño es esencial. \n Benevolencia: Tu diseño debe ser benévolo. Debe ayudar a los usuarios y tener buen interés de corazón. \n Integridad: ético, justo y honesto.',
                    context: '3 personas: Alguien que genera la confianza (Trustee) y alguien que confia (Trustor) \n El ambiente: Internet, la pàgina web, la aplicación, tu diseño. \n Acciones resultantes: la confianza conduce a acciones: los usuarios realizan la acción (compran el producto en tu página). \n Elementos subjetivos: las personas son diferentes en cuanto a la rapidez con la que pueden confiar. Recuarda que según las experiencias de cada persona, algunas podrán confiar más rápidamente que otras.',
                },
                {
                    title: 'A trust Framework Model For Situational Contexts',
                    year: '2006',
                    author: 'Carsten Schultz',
                    about: 'Trust is a widely studied and acknowledged concept including a diversity of operationalizations',
                    definition: 'framework prueba funciona:) confianza es una forma de la fe. Siempre que confiamos, ponemos nuestra fe en algo que actuará como lo esperamos.',
                    requirements: 'Para generar confianza debes generar credibilidad. \n La credibilidad es la cualidad de ser confiable y creíble. Si los usuarios no te ven creíble, no confiaran en ti y no creerán nada de lo que dices, muestras o ofreces.',
                    formula: 'Confiabilidad = capacidades + benevolencia + integridad.',
                    definitionFormula: 'Capacidades: Donde muestras las habilidades. Presentar un agradable y tranquilo diseño es esencial. \n Benevolencia: Tu diseño debe ser benévolo. Debe ayudar a los usuarios y tener buen interés de corazón. \n Integridad: ético, justo y honesto.',
                    context: '50 personas: Alguien que genera la confianza (Trustee) y alguien que confia (Trustor) \n El ambiente: Internet, la pàgina web, la aplicación, tu diseño. \n Acciones resultantes: la confianza conduce a acciones: los usuarios realizan la acción (compran el producto en tu página). \n Elementos subjetivos: las personas son diferentes en cuanto a la rapidez con la que pueden confiar. Recuarda que según las experiencias de cada persona, algunas podrán confiar más rápidamente que otras.',
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
    ],*/

    getters: {
        getPapers: (state) => [...state.papers],

    },
    actions: {
        newPaper(newPaper) {            
            let filteredVariables = this.papers.filter((paper) => newPaper.variable === paper.variable);
           
            filteredVariables.push(newPaper);

            let newArray = Object.assign({}, filteredVariables);
            console.log("addddd", newArray);

            updateDoc(doc(db, "variables", newPaper.variable), {
                "papers": newArray,
            });
        },

        readVariable() {
            
            onSnapshot(collection(db, "variables"), (docs) => {
                this.papers = [];

                docs.forEach((docOne) => {
                    //console.log("adianado", docOne.data().papers);

                    Object.values(docOne.data().papers).forEach((onePaper) => {
                        this.paper = {
                            title: onePaper.title,
                            variable: onePaper.variable,
                            /*year: onePaper.year,
                            author: onePaper.author,
                            about: onePaper.about,
                            definition: onePaper.definition,
                            requirements: onePaper.requirements,
                            formula: onePaper.formula,
                            definitionFormula: onePaper.definitionFormula,
                            context: onePaper.context,*/
                        }
                        this.papers.push(this.paper);
                    });
                });

                //console.log("updatiando", this.papers);
            });
        },

        getVariableById(id) {
            const filteredVariables = this.papers.filter((paper) => id === paper.variable);
            console.log("filetered: ", filteredVariables)
            return filteredVariables
        }
    },
});