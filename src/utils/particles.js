const cyberColors = ["#ffdd40", "#2dd4bf", "#38bdf8", "#a3e635"];

const particlesOptions = {
    background: {
        color: {
            value: "#1d1d1d",
        },
    },
    fpsLimit: 60,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "push",
            },
            onHover: {
                enable: true,
                mode: "repulse",
            },
            resize: true,
        },
        modes: {
            push: {
                quantity: 3,
            },
            repulse: {
                distance: 120,
                duration: 0.35,
            },
        },
    },
    particles: {
        color: {
            value: cyberColors,
        },
        links: {
            enable: false,
        },
        move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "out",
            },
            random: true,
            speed: 0.85,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 900,
            },
            value: 55,
        },
        opacity: {
            value: { min: 0.15, max: 0.55 },
            animation: {
                enable: true,
                speed: 0.6,
                sync: false,
                mode: "random",
            },
        },
        rotate: {
            value: { min: 0, max: 360 },
            direction: "random",
            animation: {
                enable: true,
                speed: 8,
            },
        },
        shape: {
            type: ["polygon", "character"],
            options: {
                polygon: {
                    sides: 6,
                },
                character: {
                    value: ["0", "1"],
                    font: "Consolas, 'Courier New', monospace",
                    style: "",
                    weight: "600",
                },
            },
        },
        size: {
            value: { min: 2, max: 5 },
            animation: {
                enable: true,
                speed: 12,
                minimumValue: 1,
                sync: false,
            },
        },
    },
    detectRetina: true,
};

export default particlesOptions;
