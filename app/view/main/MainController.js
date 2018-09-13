/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('Testnet.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    control: 
    {
        '*': {
            onClickCopy: 'onClickCopy',
            onClickSignup: 'onClickSignup',
            onClickNewapp: 'onClickNewapp',
            onClickSignout: 'onClickSignout',
            onTreeItemClick: 'onTreeItemClick',
            onAfterRender: 'onAfterRender',
            onBeforeRender: 'onBeforeRender',
            onShow: 'onShow',
        }
    },

    init: function()
    {
        console.log('MainController.init');
        this.loadStores();
    },

    loadStores: function()
    {
        var _this = this;

        var a_store_myapp = this.getViewModel().getStore('storeMyapp');
        a_store_myapp.load(
        {
            scope: this,
            callback: function(records,operation, success) 
            {
                console.log(records);
                _this.updateMyappCombobox(records);
            }
        });
    },

    updateMyappCombobox: function(records)
    {
        console.log('MainController.updateMyappCombobox');

    },

    doSignout: function()
    {
        localStorage.removeItem(Testnet.service.Const.COOKIE_SIGNIN);

        // Remove Main View
        this.getView().destroy();

        // Add the Login Window
        Ext.create({
            xtype: 'viewSignin'
        });
    },




    onAfterRender: function()
    {
        console.log('MainController.onAfterRender');
        var a_tree = this.lookupReference('tree_main');
        var a_combo = this.lookupReference('cmb_main_app');
        // a_combo.setWidth(a_tree.width-10);
    },

    onBeforeRender: function()
    {
        console.log('MainController.onBeforeRender');

        var a_controller = Testnet.app.getController('TController');
        a_controller.movePage('Testnet.view.dashboard.Dashboard');
        //a_controller.movePage('Testnet.view.myapplication.MyApplication');
    },

    onShow: function()
    {
        console.log('MainController.onShow');

    },

    onClickSignup: function()
    {
        console.log('MainController.onClickSignup');
        var a_controller = Testnet.app.getController('TController');
        a_controller.movePage('Testnet.view.signup.Signup','');
    },

    onClickSignout: function()
    {
        console.log('MainController.onClickSignout');

        var _this = this;
        Ext.Msg.confirm("Confirm", "Do you want to signout?", function(btnText)
        {
            if (btnText == 'yes') 
            {
                _this.doSignout();
            }
        });

    },

    onClickCopy: function()
    {
        console.log('MainController.onClickCopy');
    },

    onClickNewapp: function()    
    {
        console.log('MainController.onClickNewapp');

        Ext.Msg.confirm("Confirm", "Do you want to create a new application?", function(btnText)
        {
            //console.log('Confirm',btnText);
            if (btnText == 'yes') 
            {
                var a_controller = Testnet.app.getController('TController');
                a_controller.showNewAppPage();
            }
        });

    },

    onTreeItemClick: function(dataObj,index)
    {
        console.log('MainController.onTreeItemClick',dataObj);
        if (! dataObj.data.target_url) {
            return;
        }
        var a_controller = Testnet.app.getController('TController');
        a_controller.movePage(dataObj.data.target_url,'');
    }
});
