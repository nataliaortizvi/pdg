import { defineStore } from "pinia";
import { collection, addDoc, onSnapshot, updateDoc, doc } from "firebase/firestore";
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
                    definition: 'trust prueba funciona:) confianza es una forma de la fe. Siempre que confiamos, ponemos nuestra fe en algo que actuará como lo esperamos.',
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
        // this.variables.push(variable);
        async newPaper(paper) {

            try {
                const docRef = await addDoc(collection(db, "paper"), {
                    //image: product.image,
                    title: paper.title,
                    author: paper.author,
                    year: paper.year,
                    resumen: paper.resumen,
                    definition: paper.definition,
                    requirement: paper.requirement,
                    formula: paper.formula,
                    formulameaning: paper.formulameaning,
                    context: paper.context,
                });
                console.log("SUBIO AL DATABASE: ");
            } catch (e) {
                console.error("NO SUBIO :( ", e);
            }
        },

        readVariable() {

            onSnapshot(collection(db, "paper"), (docs) => {
                docs.forEach((document) => {

                    this.paper = {
                        //image: document.data().image,
                        title: document.data().title,
                        author: document.data().author,
                        year: document.data().year,
                        resumen: document.data().resumen,
                        definition: document.data().definition,
                        requirement: document.data().requirement,
                        formula: document.data().formula,
                        formulameaning: document.data().formulameaning,
                        context: document.data().context,
                        id: document.id,
                    };
                    //console.log("aqui es doc",doc.data().product.titlee);
                    this.papers.push(this.paper);

                    updateDoc(doc(db, "product", document.id), this.paper);
                })

            });
        }

        /*getVariableById(id) {
            const filteredVariables = this.variables.filter((variable) => id.toLowerCase().replace(/ /g, "") === variable.name.toLowerCase().toLowerCase().replace(/ /g, ""));
            return filteredVariables ? { ...filteredVariables[0] } : null
        }*/
    },
});