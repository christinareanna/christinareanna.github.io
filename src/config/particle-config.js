const particlesConfig =
{
    particles: {
        number: {
            value: 118,
            density: {
                enable: true,
                value_area: 946.9771699587272
            }
        },
        color: {
            value: "#BEBEBE"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 2,
                color: "#BEBEBE"
            },
            polygon: {
                nb_sides: 3
            },
            image: {
                src: "img/github.svg",
                width: 80,
                height: 80
            }
        },
        opacity: {
            value: 1,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0,
                sync: false
            }
        },
        size: {
            value: 1,
            random: true,
            anim: {
                enable: false,
                speed: 4,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: false,
            distance: 150,
            color: "#ffffff",
            opacity: 0.1,
            width: 1
        },
        move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 600
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: false,
                mode: "bubble"
            },
            onclick: {
                enable: false,
                mode: "repulse"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 250,
                size: 0,
                duration: 2,
                opacity: 0,
                speed: 3
            },
            repulse: {
                distance: 400,
                duration: 0.2
            },
            push: {
                particles_nb: 2
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
};

export default particlesConfig;