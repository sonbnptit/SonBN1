let chai = require('chai');

const GRID_IP = "localhost";
const GRID_PORT = 5678;
const TESTTING_URL = 'https://the-internet.herokuapp.com';
exports.config ={

    runner: 'local',
    //Test script
    specs:[
        "./src/Test_Script/LoginFunction.js",
    ],
    suites:{
        api_learning:[
            "src/API-Learning/Alert.js",
            "src/API-Learning/getAttribute.js"
        ],
        login_function:[
            "./src/Test_Script/LoginFunction.js",
            "./src/Test_Script/LoginFunction2.js",
            "./src/Test_Script/LoginFunction3.js"
        ]
    },
    //Server infor
    hostname: GRID_IP,
    port: parseInt(GRID_PORT,10),
    //path: '//',
    baseUrl: TESTTING_URL,

    //Test framework
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 1200000
    },
    maxInstances: 2 ,
    capabilities: [
        {
            browserName: "chrome"
        },
        {
            browserName: "firefox"
        }

    ],
    logLevel: 'error',
    //Reporter config
    reporters: [
        ['junit', {
            outputDir: './reports'

        }]
    ],
    before: ()=>{
        global.expect = chai.expect;
        global.shoutld = chai.should;
    },
    afterTest: function (test) {
        //save image when test done
        
            let fileName = test.fullTitle;
            browser.saveScreenshot('./'+fileName+'.png');
        
    },
}