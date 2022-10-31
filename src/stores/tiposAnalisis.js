import { defineStore } from "pinia";
///// OPTIONS STORE
export const useAnalisisStore = defineStore("analisis", {
    state: () => ({
        analisis: [
            {
                grupoDeAnalisis: [
                    {
                        img: 'public/imgs/paired.png',
                        title: 'Paired T-test',
                        descrip: '2 grupos con igual cantidad de elementos',
                        what: 'Una prueba T es una prueba estadística que compara los promedios y las desviaciones estándar de dos grupos relacionados para determinar si existe una diferencia significativa entre los dos grupos. Una diferencia significativa ocurre cuando es poco probable que las diferencias entre los grupos se deban a un error de muestreo o al azar.',
                        how: [
                            {
                                info: '1. Ingresa los datos de cada grupo para la prueba T y asi poder calcular la media que tiene cada grupo',
                            },
                            {
                                info: '2. Haz clic en CALCULAR AHORA y observa los resultados',
                            },
                        ],
                        example: 'Por ejemplo, puedes comparar si la presión arterial difiere entre un grupo de control y uno tratado, entre hombres y mujeres, o entre otros dos grupos.',
                        link: 'https://www.youtube.com/watch?v=qFbexnmU-G0',
                        calculatorlink: 'https://www.graphpad.com/quickcalcs/ttest1/?format=C',
                    },
                    {
                        img: 'public/imgs/unpaired.png',
                        title: 'Unpaired T-test',
                        descrip: '2 grupos con diferente cantidad de elementos',
                        what: 'Una prueba T es una prueba estadística que compara los promedios y las desviaciones estándar de dos grupos independientes para determinar si existe una diferencia significativa entre los dos grupos. Una diferencia significativa ocurre cuando es poco probable que las diferencias entre los grupos se deban a un error de muestreo o al azar.',
                        how: [
                            {
                                info: '1. Ingresa los datos de cada grupo para la prueba T y asi poder calcular la media que tiene cada grupo',
                            },
                            {
                                info: '2. Haz clic en CALCULAR AHORA y observa los resultados',
                            },
                        ],
                        example: 'Por ejemplo, puedes comparar la distancia promedio de viaje al trabajo recorrida por los residentes de la ciudad de Nueva York y San Francisco usando 1,000 participantes seleccionados al azar de cada ciudad',
                        link: 'https://www.youtube.com/watch?v=qFbexnmU-G0',
                        calculatorlink: 'https://www.graphpad.com/quickcalcs/ttest1/?format=C',
                    },
                    {
                        img: 'public/imgs/anova.png',
                        title: 'ANOVA',
                        descrip: '3 grupos o más indiferente la cantidad de elementos',
                        what: 'Se utiliza una prueba ANOVA para comparar las medias de tres o más muestras independientes simultáneamente.',
                        how: [
                            {
                                info: '1. Ingresa los valores de hasta cinco grupos en los cuadros de texto de la calculadora',
                            },
                            {
                                info: '2. Seleccione su nivel de confianza',
                            },
                            {
                                info: '3. Haz clic en CALCULAR AHORA y observa los resultados'
                            },
                        ],
                        example: 'Por ejemplo, puedes comparar la distancia promedio de viaje al trabajo recorrida por los residentes de la ciudad de Nueva York y San Francisco usando 1,000 participantes seleccionados al azar de cada ciudad',
                        link: 'https://www.youtube.com/watch?v=JuBgDXnvd84',
                        calculatorlink:'https://www.socscistatistics.com/tests/anova/default2.aspx',
                    },
                ],
                correlacion: [
                    {
                        img: 'public/imgs/paired.png',
                        title: 'Spearman',
                        descrip: 'La escala de medida debe ser ordinal (o intervalo, razón)',
                        what: 'Spearman es una prueba no paramétrica utilizada para medir la fuerza de asociación entre dos variables, donde el valor r = 1 significa una correlación positiva perfecta y el valor r = -1 significa una correlación negativa perfecta.', 
                        how: [
                            {
                                info: '1. Para comenzar, debes agregar sus datos a los cuadros de texto a continuación.',
                            },
                            {
                                info: '2. Cuando tus datos estén en su lugar y estés listo para hacer el cálculo, simplemente presiona el botón "Calcular"',
                            },
                            {
                                info: '3. La calculadora ejecutará varias pruebas en tus datos, para asegurarse de que sea adecuado para la estadística Spearman, y luego mostrará el resultado',
                            },
                            {
                                info: '4. También te ofrecerá la opción de ver muchos detalles sobre el cálculo.',
                            },
                        ],

                        example: 'Por ejemplo, puedes usar esta prueba para averiguar si la altura y el tamaño de los zapatos de las personas están correlacionados (lo estarán; cuanto más altas sean las personas, más grandes serán sus pies). Entonces, agregarías los valores de la altura en el cuadro Valores X y los valores del tamaño del calzado en el cuadro Valores Y (o viceversa).',
                        link: 'https://www.youtube.com/watch?v=7ep0o5nYVFU',
                        calculatorlink: 'https://www.socscistatistics.com/tests/spearman/default2.aspx',
                    },
                    {
                        img: 'public/imgs/Unpaired.png',
                        title: 'Pearson',
                        descrip: 'La escala de medida debe ser de intervalo o de razón',
                        what: 'El coeficiente de correlación de Pearson se usa para medir la fuerza de una asociación lineal entre dos variables, donde el valor r = 1 significa una correlación positiva perfecta y el valor r = -1 significa una correlación negativa perfecta. Las variables deben tener una distribución aproximadamente normal. La asociación debe ser lineal y no debe haber valores atípicos en los datos.',
                        how: [
                            {
                                info: '1. Para comenzar, debes agregar sus datos a los cuadros de texto a continuación.',
                            },
                            {
                                info: '2. Cuando tus datos estén en su lugar y estés listo para hacer el cálculo, simplemente presiona el botón "Calcular"',
                            },
                            {
                                info: '3. La calculadora ejecutará varias pruebas en tus datos, para asegurarse de que sea adecuado para la estadística Spearman, y luego mostrará el resultado',
                            },
                            {
                                info: '4. También te ofrecerá la opción de ver muchos detalles sobre el cálculo.',
                            },
                        ],
                        example: 'Por ejemplo, puedes usar esta prueba para averiguar si la altura y el peso de las personas están correlacionados (lo estarán: cuanto más altas sean las personas, más pesados ​​​​es probable que sean).',
                        link: 'https://www.youtube.com/watch?v=1QFf5luX3kA',
                        calculatorlink:'https://www.socscistatistics.com/tests/pearson/',
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