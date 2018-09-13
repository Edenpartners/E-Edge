/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('Testnet.Application', {
    extend: 'Ext.app.Application',

    name: 'Testnet',

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    require: [
        'Testnet.service.Const',
    ],

    launch: function () 
    {
        console.log('Application.launch');

        // It's important to note that this type of application could use
        // any type of storage, i.e., Cookies, LocalStorage, etc.
        var loggedIn;

        // Check to see the current value of the localStorage key
        loggedIn = localStorage.getItem(Testnet.service.Const.COOKIE_SIGNIN);

        // This ternary operator determines the value of the TutorialLoggedIn key.
        // If TutorialLoggedIn isn't true, we display the login window,
        // otherwise, we display the main view
        Ext.create({
            xtype: loggedIn ? 'app-main' : 'viewSignin'
        });

    },

    onAppUpdate: function () 
    {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
