var Theme = {
    "version": "2.21",
    "chat": {
        "mode": "form",
        "direction": "ltr",
        "width": "100%",
        "chat-background": {
            "background-color": "white",
            "background-image": "",
            "background-image-wide": "",
            "background-image-tall": "",
            "background-image-layout": "chat",
            "background-size": "repeat",
            "blur": "never"
        },
        "bubbles": {
            "entrance": "top",
            "show-avatars": true,
            "effects": {
                "message-replay-timer": "0",
                "conversation-replay-timer": "0"
            },
            "quick-reply": {
                "background-color": "#fff",
                "foreground-color": "#005ac8",
                "border-color": "foreground",
                "invert-border": false,
                "volatile": true
            },
            "skip": {
                "background-color": "#fff",
                "foreground-color": "#4f515d",
                "border-color": "foreground",
                "invert-border": false
            },
            "intro": {
                "intro-mode": "transparent",
                "nick-name": "quizX by Hassan Ashfaq",
                "desc": "",
                "background-color": "#EAEDF0",
                "foreground-color": "#005ac8",
            },
            "user": {
                "background-color": "#D6EFFD",
                "foreground-color": "#4571A5",
                "avatar-image": "user.svg"
            },
            "messaging": {
                "bot-typing-message": "typing...",
                "bot-typing-delay": "0.75"
            }
        },
        "border": {
            "color": "#333",
            "width": "0px"
        },
        "target": {
            "title": "Pre-Lecture Test",
            "subtitle": "",
            "text": "",
            "url": "https://doctorbhatti.cf",
            "phone": "",
            "match": "",
            "effect": "DISABLE",
            "background-color": "#673ab7",
            "background-image": "",
            "foreground-color": "#fff",
            "logo": {
                "mode": "profile",
                "shape": "circle",
                "position": "context",
                "image": "/assets/bot_head.svg"
            }
        },
        "edit": {
            "enable": false,
            "mode": "rollback"
        },
        "start-over": {
            "enable": "false",
            "color": "white"
        },
        "control": {
            "enable": "false",
            "url": "https://idrbhatti.github.io",
            "shadow-background": "false"
        },
        "share": {
            "enable": false,
            "url": "https://idrbhatti.github.io",
            "title": "Pre-Lecture Test",
            "text": "Pre-Lecture Test"
        },
        "input": {
            "position": "float",
            "mode": "context",
            "effect": "EMOJI",
            "input_placeholder": "type..."
        }
    },
    "page": {
        "background-color": "#f0ebf8",
        "menu": {
            "enable": false,
            "header": {
                "title": "quizX",
                "logo": "bot_head.svg"
            },
            "create": {
                "title": "Create Chat Form",
                "logo": "menu-create-icon.svg"
            },
            "share": {
                "title": "Share",
                "logo": "menu-share-icon.svg"
            },
            "addon": {
                "title": "Download the Add-on",
                "logo": "menu-addon-icon.svg"
            }
        }
    },
    "banner": {
        "mode": "AUTO",
        "shape": "BANNER",
        "dimensions": {
            "mobile": {
                "width": "300px",
                "height": "250px"
            },
            "tablet": {
                "width": "300px",
                "height": "250px"
            },
            "desktop": {
                "width": "500px",
                "height": "300px"
            }
        }
    },
    "expanded": {
        "mode": "AUTO",
        "trigger": "LOAD",
        "load-trigger-delay": "0",
        "push-content": true,
        "collapse-timeout": "0",
        "dimensions": {
            "mobile": {
                "width": "300px",
                "height": "300px"
            },
            "tablet": {
                "width": "320px",
                "height": "320px"
            },
            "desktop": {
                "width": "350px",
                "height": "500px"
            }
        }
    },
    "overlay": {
        "mode": "AUTO",
        "dimensions": {
            "mobile": {
                "width": "320px",
                "height": "400px"
            },
            "tablet": {
                "width": "768px",
                "height": "1024px"
            },
            "desktop": {
                "width": "900px",
                "height": "900px"
            }
        }
    }
};