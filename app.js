/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'Testnet.Application',

    name: 'Testnet',

    requires: [
        // This will automatically load all classes in the Testnet namespace
        // so that application classes do not need to require each other.
        'Ext.form.*',
        'Ext.button.*',
        'Testnet.*'
    ],

    // The name of the initial view to create.
    //mainView: 'Testnet.view.main.Main'
});
