import Main from "../components/Main";
import Login from "../components/Login";

export default {
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
            Main: Main,
            Login: Login
        },
        initialRouteName: 'Main',
    }
};
