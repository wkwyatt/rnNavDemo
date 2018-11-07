import Main from "../src/components/Main";
import Login from "./src/components/Login";

export default {
    configWorks: true,

    env: "production",
    version: "0.0.1",

    check_for_update: true,
    package: 'rnToolbox',

    routes: {
        App: {
            Main: Main,
            Login: Login
        }
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
            App: {
                Main: Main,
                Login: Login
            }
        },
        initialRouteName: 'Main',
    }
};
