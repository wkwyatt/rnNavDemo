import Main from "../components/Main";
import Login from "../components/Login";

export default {
    configWorks: true,

    env: "production",
    version: "0.0.1",

    check_for_update: true,
    package: 'rnToolbox',

    routes: {
        Main: Main,
        Login: Login
    },


    testKey: "123123",

    licenseCheck: {
        tokenRequestRoute: '/services/apexrest/MALiveAvail/MALiveApp/AuthToken/v2',
        checkValidAPIToken: false,
    },

    developerAccessCode: "Saber123!",

    maxEventsPerPost: 40,

    Navigation: {
        routes: {
            App: [{
                    component: Main,
                    route: 'Main',
                    hideHeader: true,
                    // styles: styles
                },
                {
                    component: Login,
                    route: 'Login',
                    hideHeader: true,
                    // styles: styles
                }]
        },
        initialRouteName: 'Salesforce@Login',
    }
};
