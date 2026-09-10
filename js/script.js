document.addEventListener(
    "DOMContentLoaded",
    () => {



        const links =
            document.querySelectorAll(
                'a[href^="#"]'
            );


        links.forEach(
            (link) => {

                link.addEventListener(
                    "click",
                    function (event) {

                        const targetId =
                            this.getAttribute(
                                "href"
                            );


                        if (
                            targetId === "#"
                        ) {

                            event.preventDefault();

                            return;

                        }


                        const target =
                            document.querySelector(
                                targetId
                            );


                        if (target) {

                            event.preventDefault();

                            target.scrollIntoView({

                                behavior:
                                    "smooth",

                                block:
                                    "start"

                            });

                        }

                    }
                );

            }
        );




        const elements =
            document.querySelectorAll(

                ".food-content, " +
                ".statistics, " +
                ".features-heading, " +
                ".feature-card, " +
                ".phone-container, " +
                ".gold-content, " +
                ".footer-column"

            );


        elements.forEach(
            (element) => {

                element.classList.add(
                    "reveal"
                );

            }
        );


        const observer =
            new IntersectionObserver(

                (entries) => {

                    entries.forEach(

                        (entry) => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "show"
                                );

                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }

                    );

                },

                {

                    threshold: 0.15

                }

            );


        elements.forEach(
            (element) => {

                observer.observe(
                    element
                );

            }
        );




        const statNumbers =
            document.querySelectorAll(
                ".stat-item h3"
            );


        let statsStarted = false;


        const statistics =
            document.querySelector(
                ".statistics"
            );


        if (statistics) {

            const statsObserver =
                new IntersectionObserver(

                    (entries) => {

                        entries.forEach(
                            (entry) => {

                                if (

                                    entry.isIntersecting &&

                                    !statsStarted

                                ) {

                                    statsStarted = true;

                                    statNumbers.forEach(

                                        animateCounter

                                    );

                                }

                            }

                        );

                    },

                    {

                        threshold:
                            0.5

                    }

                );


            statsObserver.observe(
                statistics
            );

        }




        function animateCounter(
            element
        ) {

            const originalText =
                element.innerText;


            let target = 0;

            let suffix = "";


            if (
                originalText.includes(
                    "300"
                )
            ) {

                target = 300000;

                suffix = "+";

            }

            else if (

                originalText.includes(
                    "800"
                )

            ) {

                target = 800;

                suffix = "+";

            }

            else if (

                originalText.includes(
                    "3 billion"
                )

            ) {

                target = 3;

                suffix =
                    " billion+";

            }


            let current = 0;

            const duration = 1500;

            const step =
                target /
                (duration / 16);


            function update() {

                current += step;


                if (
                    current < target
                ) {

                    if (
                        suffix.includes(
                            "billion"
                        )
                    ) {

                        element.innerText =

                            current.toFixed(
                                1
                            ) +

                            suffix;

                    }

                    else {

                        element.innerText =

                            Math.floor(
                                current
                            ).toLocaleString() +

                            suffix;

                    }


                    requestAnimationFrame(
                        update
                    );

                }

                else {

                    element.innerText =
                        originalText;

                }

            }


            update();

        }




        const featureCards =
            document.querySelectorAll(
                ".feature-card"
            );


        featureCards.forEach(
            (card) => {

                card.addEventListener(
                    "click",
                    () => {

                        featureCards.forEach(
                            (item) => {

                                item.classList.remove(
                                    "selected"
                                );

                            }
                        );


                        card.classList.add(
                            "selected"
                        );

                    }
                );

            }
        );




        const heroVideo =
            document.querySelector(
                ".hero-video"
            );


        if (heroVideo) {

            heroVideo.play()
                .catch(
                    () => {

                        console.log(
                            "Video autoplay blocked"
                        );

                    }
                );

        }


    }
);