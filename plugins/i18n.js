
    let i18nplugins = {
        install: (app, options) => {
            console.log(options);
        app.config.globalProperties.$translate = key => {
            return key.split('.').reduce((o, i) => {
                if (o) return o[i]
            }, i18n)
        }

        app.provide('i18n', options)
    }};
