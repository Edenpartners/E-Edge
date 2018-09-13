/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('Testnet.view.security.SecurityController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.ctlSecurity',

    control: 
    {
        '*': {
            onClickSignup: 'onClickSignup',
        }
    },


    updateView: function()
    {
        console.log('SettingController.updateView');
    },

    onClickSignup: function()
    {
        console.log('MainController.onClickSignup');
        var a_controller = Testnet.app.getController('TController');
        a_controller.showSignupPage();
    },

    onClickLogout: function()
    {
        console.log('SettingController.onClickLogout');
    },

    onClickLogin: function()
    {
        console.log('SettingController.onClickLogin');
    },
    
    onItemSelected: function(grid, record, index, eOpts)
    {
        console.log('SettingController.onItemSelected');
    },

});
