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
                        descrip: '2 grupos con igual cantida de elementos',
                        what: 'Se utiliza una prueba t para medir la diferencia entre exactamente dos medias. Su enfoque está en la misma variable de datos numéricos en lugar de recuentos o correlaciones entre múltiples variables. Si está tomando el promedio de una muestra de mediciones, las pruebas t son el método más utilizado para evaluar esos datos. Es particularmente útil para muestras pequeñas de menos de 30 observaciones. Por ejemplo, puede comparar si la presión arterial sistólica difiere entre un grupo de control y uno tratado, entre hombres y mujeres, o entre otros dos grupos. Esta calculadora utiliza una prueba t de dos muestras, que compara dos conjuntos de datos para ver si sus medias son estadísticamente diferentes. Eso es diferente de una prueba t de una muestra, que compara la media de su muestra con algún valor teórico propuesto.',
                        how: [
                            {
                                step1: 'Elija su formato de entrada de datos. Esto cambiará el aspecto de la sección 3 de la página. Las dos primeras opciones son para ingresar sus propios puntos de datos, ya sea manualmente o copiando y pegando. Los dos últimos son para ingresar las medias de cada grupo, junto con el número de observaciones (N) y el error estándar de esa media (SEM) o la desviación estándar del error estándar del conjunto de datos (SD). Si ya ha calculado estas estadísticas de resumen, las últimas opciones le ahorrarán tiempo.',
                                step2: 'Elija una prueba de las tres opciones: prueba t no pareada, prueba t no pareada de Welch o prueba t pareada. Utilice nuestra Guía definitiva para las pruebas t si no está seguro de cuál es la adecuada, ya que incluye una sección sobre "¿Cómo sé qué prueba t debo usar?". Tenga en cuenta que no todas las opciones están disponibles si ingresa solo los medios.',
                                step3: 'Ingrese los datos para la prueba, según el formato que eligió en el Paso 1.',
                                step4: 'Haga clic en Calcular ahora y vea los resultados. Todas las opciones realizarán una prueba de dos colas.',
                            }
                        ],
                    },
                    {
                        img: '../../public/imgs/unpaired.png',
                        title: 'Unpaired T-test',
                        descrip: '2 grupos con diferente cantida de elementos',
                        what: 'Se utiliza una prueba t para medir la diferencia entre exactamente dos medias. Su enfoque está en la misma variable de datos numéricos en lugar de recuentos o correlaciones entre múltiples variables. Si está tomando el promedio de una muestra de mediciones, las pruebas t son el método más utilizado para evaluar esos datos. Es particularmente útil para muestras pequeñas de menos de 30 observaciones. Por ejemplo, puede comparar si la presión arterial sistólica difiere entre un grupo de control y uno tratado, entre hombres y mujeres, o entre otros dos grupos. Esta calculadora utiliza una prueba t de dos muestras, que compara dos conjuntos de datos para ver si sus medias son estadísticamente diferentes. Eso es diferente de una prueba t de una muestra, que compara la media de su muestra con algún valor teórico propuesto.',
                        how: [
                            {
                                step1: 'Elija su formato de entrada de datos. Esto cambiará el aspecto de la sección 3 de la página. Las dos primeras opciones son para ingresar sus propios puntos de datos, ya sea manualmente o copiando y pegando. Los dos últimos son para ingresar las medias de cada grupo, junto con el número de observaciones (N) y el error estándar de esa media (SEM) o la desviación estándar del error estándar del conjunto de datos (SD). Si ya ha calculado estas estadísticas de resumen, las últimas opciones le ahorrarán tiempo.',
                                step2: 'Elija una prueba de las tres opciones: prueba t no pareada, prueba t no pareada de Welch o prueba t pareada. Utilice nuestra Guía definitiva para las pruebas t si no está seguro de cuál es la adecuada, ya que incluye una sección sobre "¿Cómo sé qué prueba t debo usar?". Tenga en cuenta que no todas las opciones están disponibles si ingresa solo los medios.',
                                step3: 'Ingrese los datos para la prueba, según el formato que eligió en el Paso 1.',
                                step4: 'Haga clic en Calcular ahora y vea los resultados. Todas las opciones realizarán una prueba de dos colas.',
                            }
                        ],
                    },
                    {
                        img: '../../public/imgs/anova.png',
                        title: 'ANOVA + Post Hoc Test',
                        descrip: '3 grupos indiferente la cantida de elementos',
                        what: 'Se utiliza una prueba t para medir la diferencia entre exactamente dos medias. Su enfoque está en la misma variable de datos numéricos en lugar de recuentos o correlaciones entre múltiples variables. Si está tomando el promedio de una muestra de mediciones, las pruebas t son el método más utilizado para evaluar esos datos. Es particularmente útil para muestras pequeñas de menos de 30 observaciones. Por ejemplo, puede comparar si la presión arterial sistólica difiere entre un grupo de control y uno tratado, entre hombres y mujeres, o entre otros dos grupos. Esta calculadora utiliza una prueba t de dos muestras, que compara dos conjuntos de datos para ver si sus medias son estadísticamente diferentes. Eso es diferente de una prueba t de una muestra, que compara la media de su muestra con algún valor teórico propuesto.',
                        how: [
                            {
                                step1: 'Elija su formato de entrada de datos. Esto cambiará el aspecto de la sección 3 de la página. Las dos primeras opciones son para ingresar sus propios puntos de datos, ya sea manualmente o copiando y pegando. Los dos últimos son para ingresar las medias de cada grupo, junto con el número de observaciones (N) y el error estándar de esa media (SEM) o la desviación estándar del error estándar del conjunto de datos (SD). Si ya ha calculado estas estadísticas de resumen, las últimas opciones le ahorrarán tiempo.',
                                step2: 'Elija una prueba de las tres opciones: prueba t no pareada, prueba t no pareada de Welch o prueba t pareada. Utilice nuestra Guía definitiva para las pruebas t si no está seguro de cuál es la adecuada, ya que incluye una sección sobre "¿Cómo sé qué prueba t debo usar?". Tenga en cuenta que no todas las opciones están disponibles si ingresa solo los medios.',
                                step3: 'Ingrese los datos para la prueba, según el formato que eligió en el Paso 1.',
                                step4: 'Haga clic en Calcular ahora y vea los resultados. Todas las opciones realizarán una prueba de dos colas.',
                            }
                        ],
                    },
                ],
                correlacion: [
                    {
                        img: '../../public/imgs/paired.png',
                        title: 'Spearman',
                        descrip: '2 grupos con igual cantida de elementos',
                        what: 'Se utiliza una prueba t para medir la diferencia entre exactamente dos medias. Su enfoque está en la misma variable de datos numéricos en lugar de recuentos o correlaciones entre múltiples variables. Si está tomando el promedio de una muestra de mediciones, las pruebas t son el método más utilizado para evaluar esos datos. Es particularmente útil para muestras pequeñas de menos de 30 observaciones. Por ejemplo, puede comparar si la presión arterial sistólica difiere entre un grupo de control y uno tratado, entre hombres y mujeres, o entre otros dos grupos. Esta calculadora utiliza una prueba t de dos muestras, que compara dos conjuntos de datos para ver si sus medias son estadísticamente diferentes. Eso es diferente de una prueba t de una muestra, que compara la media de su muestra con algún valor teórico propuesto.',
                        how: [
                            {
                                step1: 'Elija su formato de entrada de datos. Esto cambiará el aspecto de la sección 3 de la página. Las dos primeras opciones son para ingresar sus propios puntos de datos, ya sea manualmente o copiando y pegando. Los dos últimos son para ingresar las medias de cada grupo, junto con el número de observaciones (N) y el error estándar de esa media (SEM) o la desviación estándar del error estándar del conjunto de datos (SD). Si ya ha calculado estas estadísticas de resumen, las últimas opciones le ahorrarán tiempo.',
                                step2: 'Elija una prueba de las tres opciones: prueba t no pareada, prueba t no pareada de Welch o prueba t pareada. Utilice nuestra Guía definitiva para las pruebas t si no está seguro de cuál es la adecuada, ya que incluye una sección sobre "¿Cómo sé qué prueba t debo usar?". Tenga en cuenta que no todas las opciones están disponibles si ingresa solo los medios.',
                                step3: 'Ingrese los datos para la prueba, según el formato que eligió en el Paso 1.',
                                step4: 'Haga clic en Calcular ahora y vea los resultados. Todas las opciones realizarán una prueba de dos colas.',
                            }
                        ],
                    },
                    {
                        img: '../../public/imgs/paired.png',
                        title: 'Pearson',
                        descrip: '2 grupos con diferente cantida de elementos',
                        what: 'Se utiliza una prueba t para medir la diferencia entre exactamente dos medias. Su enfoque está en la misma variable de datos numéricos en lugar de recuentos o correlaciones entre múltiples variables. Si está tomando el promedio de una muestra de mediciones, las pruebas t son el método más utilizado para evaluar esos datos. Es particularmente útil para muestras pequeñas de menos de 30 observaciones. Por ejemplo, puede comparar si la presión arterial sistólica difiere entre un grupo de control y uno tratado, entre hombres y mujeres, o entre otros dos grupos. Esta calculadora utiliza una prueba t de dos muestras, que compara dos conjuntos de datos para ver si sus medias son estadísticamente diferentes. Eso es diferente de una prueba t de una muestra, que compara la media de su muestra con algún valor teórico propuesto.',
                        how: [
                            {
                                step1: 'Elija su formato de entrada de datos. Esto cambiará el aspecto de la sección 3 de la página. Las dos primeras opciones son para ingresar sus propios puntos de datos, ya sea manualmente o copiando y pegando. Los dos últimos son para ingresar las medias de cada grupo, junto con el número de observaciones (N) y el error estándar de esa media (SEM) o la desviación estándar del error estándar del conjunto de datos (SD). Si ya ha calculado estas estadísticas de resumen, las últimas opciones le ahorrarán tiempo.',
                                step2: 'Elija una prueba de las tres opciones: prueba t no pareada, prueba t no pareada de Welch o prueba t pareada. Utilice nuestra Guía definitiva para las pruebas t si no está seguro de cuál es la adecuada, ya que incluye una sección sobre "¿Cómo sé qué prueba t debo usar?". Tenga en cuenta que no todas las opciones están disponibles si ingresa solo los medios.',
                                step3: 'Ingrese los datos para la prueba, según el formato que eligió en el Paso 1.',
                                step4: 'Haga clic en Calcular ahora y vea los resultados. Todas las opciones realizarán una prueba de dos colas.',
                            }
                        ],
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