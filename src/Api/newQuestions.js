const allQuestions = [
        {
            procedure: "Cirugia de senos - mamaria, Mastopexia",
            idProcedure: "1",
            questions: [
                {
                    idQuestion: 1,
                    info: "",
                    title: "¿Qué edad tienes?",
                    useInput: true,
                    useButton: true,
                    useComponent: false,
                    useYesOrNot: false,
                    useInteractiveButon: false,
                    placeholder: "Ingrese edad",
                    response: {
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {
                    idQuestion: 2,
                    info: "",
                    title: "¿Cuántos hijos tienes",
                    useInput: true,
                    useButton: true,
                    useYesOrNot: false,
                    useInteractiveButon: false,
                    useComponent: false,
                    placeholder: "Ingrese número de hijos",
                    response: {
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {
                    idQuestion: 3,
                    info: "",
                    title: "¿Qué talla de brasier eres?",
                    useInput: true,
                    useButton: true,
                    useYesOrNot: false,
                    useInteractiveButon: false,
                    useComponent: false,
                    placeholder: "Seleccione talla",
                    response: {
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {
                    idQuestion: 4,
                    info: "",
                    title: "¿En que talla de brasier quieres quedar?",
                    useInput: true,
                    useButton: true,
                    useYesOrNot: false,
                    useInteractiveButon: false,
                    useComponent: false,
                    placeholder: "Seleccione talla",
                    response: {
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {
                    idQuestion: 4,
                    info: "",
                    title: "En que ciudad quieres operarte",
                    useInput: false,
                    useComponent: true,
                    useYesOrNot: false,
                    useInteractiveButon: false,
                    component: "CityQuestion",
                    placeholder: "Elija Ciudad",
                    response: {
                        cities: [
                            {
                                name: "Medellín",
                                numberDoctors: 106
                            },
                            {
                                name: "Barranquilla",
                                numberDoctors: 36
                            },
                            {
                                name: "Cali",
                                numberDoctors: 70
                            },
                            {
                                name: "Bogotá",
                                numberDoctors: 14
                            }
                        ],
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {   
                    idQuestion: 5,
                    info: "",
                    title: "Seleccione el cirujano de tu preferencia",
                    useInput: false,
                    useComponent: true,
                    useYesOrNot: false,
                    useInteractiveButon: false,
                    component: "DoctorsQuestion",
                    placeholder: "Elija cirujano",
                    response: {
                        doctors: [
                            {
                                name: "Dr. Juan Mario Escobar",
                                description: "Cirujano Plástico",
                                avatar: "https://i.picsum.photos/id/168/300/300.jpg?hmac=4m069iOglhq_N0vxSdJrKHQi0406HThIKEJllrqOELE",
                                city: "Medellín",
                                assessment: 5
                            },
                            {
                                name: "Dra. Nicole Echeverry Salja",
                                description: "Cirujana Plástica y Estética Reconstructiva",
                                avatar: "https://i.picsum.photos/id/188/300/300.jpg?hmac=O1Fgsa5q091m_1eNHYtavDoVNb6yIklGq1A67yv5_vk",
                                city: "Medellín",
                                assessment: 4
                            },
                            {
                                name: "Dr. Daniel Correa",
                                description: "Cirujano Plástico y Estético",
                                avatar: "https://i.picsum.photos/id/880/300/300.jpg?hmac=oXC1t0jViOdGm6k__5wE0t1X0riYREqUm9z2CZuIfEI",
                                city: "Medellín",
                                assessment: 5
                            },
                            {
                                name: "Dra. Elizabeth Giraldo",
                                description: "Cirujana Plástica y Estética Reconstructiva",
                                avatar: "https://i.picsum.photos/id/573/300/300.jpg?hmac=eB8bNuMfnFGtyA4SdNvGHVw2bCJzRa2O8FabHr1sb40",
                                city: "Medellín",
                                assessment: 5
                            },
                            {
                                name: "Dr. Felipe Ruso",
                                description: "Cirujano Plástico",
                                avatar: "https://i.picsum.photos/id/492/300/300.jpg?hmac=wwoIgwZiIgird4Ys0Jac4brMJjAReIdSuqNu8gR0m7k",
                                city: "Medellín",
                                assessment: 4
                            },
                            {
                                name: "Dra. Karen Castro",
                                description: "Cirujana Plástica",
                                avatar: "https://i.picsum.photos/id/335/300/300.jpg?hmac=WLsVURtOcUdU-vMyASCLwpmjlhToIWHNzMNghKfzsJE",
                                city: "Medellín",
                                assessment: 3
                            },
                            {
                                name: "Dra. Carolina Gomez",
                                description: "Cirujana Plástica",
                                avatar: "https://i.picsum.photos/id/580/300/300.jpg?hmac=OBswUmJO205IOKj3lc--Nl2Y1WuPCB5iPcjco4BWb4o",
                                city: "Medellín",
                                assessment: 4
                            },
                            {
                                name: "Dr. Rachid Gorron Maloof",
                                description: "Cirujano Plástico y Estética Reconstructiva",
                                avatar: "https://i.picsum.photos/id/116/300/300.jpg?hmac=8JS9-IMlHf_mp6RrUTuEudQm8gd32We08MRO1UJ2cTY",
                                city: "Medellín",
                                assessment: 5
                            },
                            {
                                name: "Dr. Juan Carlos Herrera",
                                description: "Cirujano Plástico",
                                avatar: "https://i.picsum.photos/id/278/300/300.jpg?hmac=Bh4VWDzT60r3pjIARd3W_U8e8SR-2ApJ3X6WLwS8SKs",
                                city: "Medellín",
                                assessment: 5
                            }
                        ],
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {
                    idQuestion: 6,
                    info: "",
                    title: "¿Vas a realizar tu proceso de recuperaciónen Colombia?",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: true,
                    useComponent: false,
                    placeholder: "Seleccione talla",
                    response: {
                        buttonNo: "No",
                        buttonYes: "Si"
                    }
                },
                {
                    idQuestion: 7,
                    info: "",
                    title: "Selecciona en donde quieres realizar tuproceso de recuperación",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: false,
                    useInteractiveButon: true,
                    useComponent: false,
                    placeholder: "Seleccione talla",
                    response: {
                        interactive1: {
                            img: "https://i.picsum.photos/id/204/300/300.jpg?hmac=nMn3k2irZFRlOEdAxFaKapzdO5cuwF8eQv5HbhP9Lyw",
                            description: "casa de recuperación",
                            recoveryHouse: {
                                Medellín: [
                                    {
                                        id: "recoveryHouse 1",
                                        neighborhood: "Poblado",
                                        description: "Los Balsos",
                                        img: "https://i.picsum.photos/id/87/300/300.jpg?hmac=ZkJnFlpR_vw2mM6EcUmokiBIZxMYVvNd_yPHfMES6sM",
                                        assessment: 4
                                    },
                                    {
                                        id: "recoveryHouse 2",
                                        neighborhood: "Laureles",
                                        description: "Laureles Campestre",
                                        img: "https://i.picsum.photos/id/343/300/300.jpg?hmac=U-DyYS8TDOO9wwhRiPp287g4Iau9PcYwdXb9JjdsU6w",
                                        assessment: 5
                                    },
                                    {
                                        id: "recoveryHouse 3",
                                        neighborhood: "Poblado",
                                        description: "Castropol",
                                        img: "https://i.picsum.photos/id/58/300/300.jpg?hmac=TcjrTyIduJRx_iVy1czdSq2sNKO7bPyBwTyeWQFhM1Q",
                                        assessment: 5
                                    },
                                    {
                                        id: "recoveryHouse 4",
                                        neighborhood: "Poblado",
                                        description: "Manila",
                                        img: "https://i.picsum.photos/id/334/300/300.jpg?hmac=Ase3LpyCdCzLfDfIpfcWpdJSyZIFZeAerh-nxIGGkK0",
                                        assessment: 3
                                    },
                                    {
                                        id: "recoveryHouse 5",
                                        neighborhood: "Poblado",
                                        description: "Patio Bonito",
                                        img: "https://i.picsum.photos/id/544/300/300.jpg?hmac=kbODSPEzAZCvJfHJb-rqePPxdN8ubZdpQkeW0XyOl50",
                                        assessment: 4
                                    },
                                    {
                                        id: "recoveryHouse 6",
                                        neighborhood: "Belén",
                                        description: "Belén la Palma",
                                        img: "https://i.picsum.photos/id/541/300/300.jpg?hmac=mU76LGR5SaGfCRc8p09wzyxejuMkmEWXiCiRwoXRw9Y",
                                        assessment: 3
                                    }
                                ]
                            }

                        },
                        interactive2: {
                            img: "https://i.picsum.photos/id/390/300/300.jpg?hmac=vIwFiXdW16lazu7WfEtZYsQ3UJSXWKISG7tOiTT-nhc",
                            description: "hotel"
                        },
                    }
                },
                {
                    idQuestion: 8,
                    info: "",
                    title: "¿Desea incluir Enfermera en su recuperación?",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: true,
                    useInteractiveButon: false,
                    useComponent: false,
                    placeholder: "Seleccione talla",
                    response: {
                        buttonNo: "No",
                        buttonYes: "Si"
                    }
                },
                {
                    idQuestion: 9,
                    info: "",
                    title: "Seleccione la Enfermera de su preferencia",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: false,
                    useInteractiveButon: false,
                    useComponent: true,
                    component: 'NurseQuestion',
                    placeholder: "Elija Enfermera",
                    response: {
                        nurse: [
                            {
                                name: "Marian Restrepo",
                                experience: "4 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/758/300/300.jpg?hmac=JdmQPsV_vTdIhWzwEIHhcmA5tmuC_DOHB6O5PUVualQ",
                                city: "Medellín",
                                assessment: 5
                            },
                            {
                                name: "Antonia Rodriguez",
                                experience: "8 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/536/300/300.jpg?hmac=jc8wwzhIRp8-aFORQGaxnHycNfXcprvPX0oKawN4-C0",
                                city: "Medellín",
                                assessment: 4
                            },
                            {
                                name: "Susana Ruíz",
                                experience: "2 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/800/300/300.jpg?hmac=17xBHpSghjDxOt1RjhArmUtIP-Fv0z8Fk6uXIY0wvWw",
                                city: "Medellín",
                                assessment: 5
                            },
                            {
                                name: "Paola Gomez",
                                experience: "1 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/28/300/300.jpg?hmac=G2cdhmuBEY2rDoSefRxiQLssBctP0GCKz_UhmEU1JIA",
                                city: "Medellín",
                                assessment: 5
                            },
                            {
                                name: "Ana Marín",
                                experience: "3 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/984/300/300.jpg?hmac=nNJwsEJribYLYZT-XI2HF5Ovd6jFrSzzkfpkoYj_zao",
                                city: "Medellín",
                                assessment: 4
                            },
                            {
                                name: "Laura Cardona",
                                experience: "1 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/516/300/300.jpg?hmac=rjKkPPkY2QLwGN8JBF5Af6y910lX5PaPaXpqbxr1-IU",
                                city: "Medellín",
                                assessment: 3
                            },
                            {
                                name: "Carolina Herrera",
                                experience: "3 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/45/300/300.jpg?hmac=4xBaRob30OZKvORvIar-A2GqUCvsEac5ve4nrWuzn0w",
                                city: "Medellín",
                                assessment: 4
                            },
                            {
                                name: "Luisa Acosta",
                                experience: "2 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/62/300/300.jpg?hmac=JkaOmZr8So-hvPO3Mya00sE2pvIQtLZjGMldqbPFiqc",
                                city: "Medellín",
                                assessment: 5
                            },
                            {
                                name: "Marta Giraldo",
                                experience: "4 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/421/300/300.jpg?hmac=7vF4ivvohPVAng1rECOJPHlpeZj0DK5eOJWEduSseR4",
                                city: "Medellín",
                                assessment: 5
                            }
                        ],
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {
                    idQuestion: 10,
                    info: "usePressNot",
                    title: "¿Deseas incluir un plan nutricional en tu proceso de recuperación?",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: true,
                    useInteractiveButon: false,
                    useComponent: false,
                    placeholder: "",
                    response: {
                        buttonNo: "No",
                        buttonYes: "Si"
                    }
                },
                {
                    idQuestion: 11,
                    info: '',
                    title: "¿Vas a necesitar transporte?",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: true,
                    useInteractiveButon: false,
                    useComponent: false,
                    placeholder: "",
                    response: {
                        buttonNo: "No",
                        buttonYes: "Si"
                    }
                },
                {
                    idQuestion: 12,
                    info: "",
                    title: "Seleccione chofer y vehículo de su preferencia",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: false,
                    useInteractiveButon: false,
                    useComponent: true,
                    component: 'ChoferQuestion',
                    placeholder: "Seleccione Transporte",
                    response: {
                        transport: [
                            {
                                choferName: "Luis Duran",
                                choferAvatar: "https://i.picsum.photos/id/156/300/300.jpg?hmac=rGLAWZy_0JcFB5YMaO_wu9TChlrg9K6UqlSCCWbVa_Y",
                                carChoferModel: "Chevrolet Cruze",
                                carChoferImg: "https://quatrorodas.abril.com.br/wp-content/uploads/2019/08/cruze-premier-5-e1565908395458.jpg?resize=650,433",
                                choferCity: "Medellín",
                                assessment: 4
                            },
                            {
                                choferName: "Carlos Marín",
                                choferAvatar: "https://i.picsum.photos/id/1076/300/300.jpg?hmac=Nyv9lBi6xcTR9iOySfgGlf24hAYdDRaHQ7nJQim1naA",
                                carChoferModel: "Nissan Sentra",
                                carChoferImg: "https://www.thedrive.com/content/2021/03/73572C33-7C8E-4895-9267-473FA35D488F_1_201_a-scaled.jpeg?quality=85&auto=webp&optimize=high&quality=70&width=2018",
                                choferCity: "Medellín",
                                assessment: 5
                            },
                            {
                                choferName: "Paula Muñoz",
                                choferAvatar: "https://i.picsum.photos/id/700/300/300.jpg?hmac=nAc9k92vOFl8i6K84MMZgC_uwyhaIydCz34BEY8O0Ps",
                                carChoferModel: "Hyundai Elactra",
                                carChoferImg: "https://www.samarins.com/reviews/img/hyundai-elantra-2014.jpg",
                                choferCity: "Medellín",
                                assessment: 3
                            },
                            {
                                choferName: "Marian Mora",
                                choferAvatar: "https://i.picsum.photos/id/46/300/300.jpg?hmac=d0_MNL7cjS7tre8_kfeiCGuF_l8Fz6qcD6k2lOB73EU",
                                carChoferModel: "Tesla Model X",
                                carChoferImg: "https://i.pinimg.com/originals/e4/c2/3d/e4c23db7eaf2f902568b9c596ba955ab.jpg",
                                choferCity: "Medellín",
                                assessment: 5
                            },
                            {
                                choferName: "Mario Mena",
                                choferAvatar: "https://i.picsum.photos/id/101/300/300.jpg?hmac=otCBSyFuH-eJf1aGys81tPdEqAXy0zxvMT81fYTv4C8",
                                carChoferModel: "BMW",
                                carChoferImg: "https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/1049x590/quality/80/https://s.aolcdn.com/os/ab/_cms/2019/12/12171546/IMG_5383.jpg",
                                choferCity: "Medellín",
                                assessment: 4
                            },
                            {
                                choferName: "Melisa Rivero",
                                choferAvatar: "https://i.picsum.photos/id/497/300/300.jpg?hmac=dtw7nGJRHPRmarbydsHN2XR_rN784bu4R-Wrfj3tY6E",
                                carChoferModel: "Hyundai",
                                carChoferImg: "https://www.manualesdetodo.net/wp-content/uploads/2020/10/2014-accent-hyundai-u.jpg",
                                choferCity: "Medellín",
                                assessment: 5
                            },
                            {
                                choferName: "Lucas Ferrer",
                                choferAvatar: "https://i.picsum.photos/id/42/300/300.jpg?hmac=4m-5oL1k_PEXemEhSsagOlAeKjwF-hha0yC6B_T9-9o",
                                carChoferModel: "Toyota Corolla",
                                carChoferImg: "https://i.pinimg.com/originals/aa/82/89/aa828991f7df5441863c38a0a7198894.jpg",
                                choferCity: "Medellín",
                                assessment: 3
                            },
                            {
                                choferName: "Marta Toro",
                                choferAvatar: "https://i.picsum.photos/id/53/300/300.jpg?hmac=YAuaha56Qqkoz5v03NRQhB0hPeVomxdGzpBTpSkUkNE",
                                carChoferModel: "Mercedes",
                                carChoferImg: "https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/1049x590/quality/80/https://s.aolcdn.com/os/ab/_cms/2020/06/17115300/20C0257_020.jpg",
                                choferCity: "Medellín",
                                assessment: 5
                            },
                            {
                                choferName: "Camilo Navarro",
                                choferAvatar: "https://i.picsum.photos/id/276/300/300.jpg?hmac=9ojBAYusSkbkLhQc8rr9BMIwXHSNSkBfQM2g1V9KaVk",
                                carChoferModel: "Chevrolet",
                                carChoferImg: "https://mattmakes.org/wp-content/uploads/2020/12/redesign-and-review-chevrolet-malibu-2020-price.jpg",
                                choferCity: "Medellín",
                                assessment: 4
                            }
                        ],
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {
                    idQuestion: 13,
                    info: 'usePressNot',
                    title: "¿Deseas incluir una Sim Card?",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: true,
                    useInteractiveButon: false,
                    useComponent: false,
                    placeholder: "",
                    response: {
                        buttonNo: "No",
                        buttonYes: "Si"
                    }
                },
                {
                    idQuestion: 14,
                    info: '',
                    title: "¿Deseas incluir un tour antes o después de tu operación?",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: true,
                    useInteractiveButon: false,
                    useComponent: false,
                    placeholder: "",
                    response: {
                        buttonNo: "No",
                        buttonYes: "Si"
                    }
                },
                {
                    idQuestion: 15,
                    info: "",
                    title: "¿Para donde deseas ir?",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: false,
                    useInteractiveButon: false,
                    useComponent: true,
                    component: 'TourQuestion',
                    placeholder: "Seleccione Lugar",
                    response: {
                        tours: [
                            {
                                city: "Santa Marta",
                                tour: "Parque Nacional Tairona",
                                img: "https://travelgrafia.co/wp-content/uploads/2019/05/playas-cerca-a-santa-marta.jpg",
                                assessment: 4
                            },
                            {
                                city: "Cartagena",
                                tour: "Ciudad Amurallada",
                                img: "https://images.squarespace-cdn.com/content/v1/5785d42ee58c62418fa80880/1544049396811-HVMJTV64MNNVZP1DQLO4/DSC01610.jpg?format=500w",
                                assessment: 5
                            },
                            {
                                city: "La Guajira",
                                tour: "Desiertos",
                                img: "https://i.pinimg.com/564x/3b/9f/82/3b9f82d82b028773ffb3dbb9d9412b1c.jpg",
                                assessment: 4
                            },
                            {
                                city: "La Macarena - Meta",
                                tour: "Caño Cristales",
                                img: "https://www.infobae.com/new-resizer/wAD9R8Fg6zOTYJP3yqLPMAgLTfE=/1440x1440/filters:format(webp):quality(85)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/03/11111513/Ca%C3%B1o-cristales.jpg",
                                assessment: 3
                            },
                            {
                                city: "Guatapé",
                                tour: "Piedra del Peñol",
                                img: "https://i.pinimg.com/564x/22/02/b5/2202b5487a9be7fd995082148ca3126b.jpg",
                                assessment: 5
                            },
                            {
                                city: "Boyacá",
                                tour: "El Cocuy",
                                img: "https://live.staticflickr.com/7322/9397648854_b5dad7fe3e_h.jpg",
                                assessment: 5
                            },
                            {
                                city: "Salento",
                                tour: "Valle de Cocura",
                                img: "https://funlifecrisis.com/wp-content/uploads/2018/11/valle-do-cocura-hike-salento-colombia.jpg",
                                assessment: 4
                            },
                            {
                                city: "San Andrés",
                                tour: "Islas de San Andrés",
                                img: "https://i.pinimg.com/originals/7d/c7/d8/7dc7d89feef93681fd6639d6b5256cbf.jpg",
                                assessment: 4
                            },
                            {
                                city: "El Chocó",
                                tour: "Capurganá",
                                img: "https://i.pinimg.com/564x/72/a1/9c/72a19c91ac194cf86ac111e381beb857.jpg",
                                assessment: 4
                            }
                        ],
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                }
            ]
        },
        {
            procedure: "Estetica vaginal - Tensado Vaginal con Laser",
            idProcedure: "4",
            questions: [
                {
                    title: "¿Qué edad tienes numero 2?",
                    useInput: true,
                    placeholder: "Ingrese edad",
                    response: {
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {
                    title: "¿Cuántos hijos tienes numero 2",
                    placeholder: "Ingrese número de hijos",
                    response: {
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {
                    title: "¿Qué talla de brasier eres numero 2?",
                    placeholder: "Seleccione talla",
                    response: {
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {
                    title: "¿En que talla de brasier quieres quedar numero 2?",
                    placeholder: "Seleccione talla",
                    response: {
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                }
            ]
        }
    ]
export default allQuestions