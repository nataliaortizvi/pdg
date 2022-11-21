import { defineStore } from "pinia";
import { collection, addDoc, onSnapshot, updateDoc, doc, setDoc } from "firebase/firestore";
import { db } from '../firebase/config';

import { ref as storeRef, getDownloadURL, uploadBytes, } from "firebase/storage";
import { storage } from '../firebase/config';

///// OPTIONS STORE
export const useVariablesStore = defineStore("variables", {
    state: () => ({
        papers: [],
        paper: {},
        imageInfo: {},
    }),

    getters: {
        getPapers: (state) => [...state.papers],

    },

    actions: {
        async newPaper(newPaper) {
            this.imageInfo = newPaper.image;
            try {
                let filteredVariables = this.papers.filter((paper) => newPaper.variable === paper.variable);
                console.log("filtrados: ", filteredVariables.length);

                if (filteredVariables.length == 0) {
                    filteredVariables.push(newPaper);

                    let newArray = Object.assign({}, filteredVariables);
                    setDoc(doc(db, "variables", newPaper.variable), {
                        "papers": newArray,
                    });

                } else {
                    filteredVariables.push(newPaper);

                    let newArray = Object.assign({}, filteredVariables);
                    await updateDoc(doc(db, "variables", newPaper.variable), {
                        "papers": newArray,
                    });
                }

                const storageReference = storeRef(storage, "files/" + newPaper.image);

                getDownloadURL(storageReference).then(async (url) => {
                    try {
                        let nameimage = newPaper.image;
                        this.imageInfo = {
                            url,
                            nameimage,
                        };

                        let paperIndex = filteredVariables.findIndex(v => v.title == newPaper.title);

                        let newPaperWithImg = {
                            title: filteredVariables[paperIndex].title,
                            author: filteredVariables[paperIndex].author,
                            year: filteredVariables[paperIndex].year,
                            resumen: filteredVariables[paperIndex].resumen,
                            definition: filteredVariables[paperIndex].definition,
                            requirement: filteredVariables[paperIndex].requirement,
                            formula: filteredVariables[paperIndex].formula,
                            formulameaning: filteredVariables[paperIndex].formulameaning,
                            context: filteredVariables[paperIndex].context,
                            variable: filteredVariables[paperIndex].variable,
                            image: this.imageInfo,
                            exampleContext: filteredVariables[paperIndex].exampleContext,
                            eachFormulaVariable: filteredVariables[paperIndex].eachFormulaVariable,
                            descriptionExperiment: filteredVariables[paperIndex].descriptionExperiment,
                            developExperiment: filteredVariables[paperIndex].developExperiment,
                            conclusionExperiment: filteredVariables[paperIndex].conclusionExperiment,
                        }

                        filteredVariables.splice(paperIndex, 1, newPaperWithImg);
                        console.log("arreglo nuevo: ", filteredVariables);

                        updateDoc(doc(db, "variables", newPaper.variable), {
                            "papers": filteredVariables,
                        });
                    } catch (e) {
                        console.error("Error adding document img: ", e);
                    }
                });

            } catch (e) {
                console.error("Error adding document: ", e);
            }
        },

        readVariable() {

            onSnapshot(collection(db, "variables"), (docs) => {
                this.papers = [];

                docs.forEach((docOne) => {

                    Object.values(docOne.data().papers).forEach((onePaper) => {
                        this.paper = {
                            title: onePaper.title,
                            author: onePaper.author,
                            year: onePaper.year,
                            resumen: onePaper.resumen,
                            definition: onePaper.definition,
                            requirement: onePaper.requirement,
                            formula: onePaper.formula,
                            formulameaning: onePaper.formulameaning,
                            context: onePaper.context,
                            variable: onePaper.variable,
                            image: onePaper.image,
                            exampleContext: onePaper.exampleContext,
                            eachFormulaVariable: onePaper.eachFormulaVariable,
                            descriptionExperiment: onePaper.descriptionExperiment,
                            developExperiment: onePaper.developExperiment,
                            conclusionExperiment: onePaper.conclusionExperiment,

                        }
                        this.papers.push(this.paper);
                    });
                });

                //console.log("updatiando", this.papers);
            });
        },

        getVariableById(id) {
            const removeAccents = (str) => {
                return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            }
            const filteredVariables = this.papers.filter((paper) => removeAccents(id.toLowerCase().replace(/ /g, "")) === removeAccents(paper.variable.toLowerCase().replace(/ /g, "")));
            //console.log("filetered: ", filteredVariables)
            return filteredVariables
        },

        async uploadImage(image) {
            //console.log("WHAT IMAGE: ", image);
            const storageReference = storeRef(storage, "files/" + image.name);


            try {
                const storageReference = storeRef(storage, "files/" + image.name);

                await uploadBytes(storageReference, image);
            } catch (e) {
                console.error("Error uploading document: ", e);
            }
        },
    },
});