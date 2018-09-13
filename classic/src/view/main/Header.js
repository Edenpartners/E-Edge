/**
 * This view is an example list of people.
 */
Ext.define('Testnet.view.main.Header', {
    extend: 'Ext.panel.Panel',
    xtype: 'menupanel',

    requires: [],

    title: '',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    items:
    [
        {
            xtype: 'toolbar',
            height: 64,
            itemId: 'headerBar',
            items:
            [
                {
                    xtype: 'component',
                    reference: 'senchaLogo',
                    cls: '',
                    html: '',
                    width: 250
                },
                '->',
                {
                    xtype: 'button',
                    text: 'Sign out',
                    reference: 'btn_main_signout',
                    handler: function() {
                        console.log('Main.onClickSignout');
                        this.fireEvent('onClickSignout');
                    }
                },                

            ]
        },
        {
            xtype: 'toolbar',
            height: 42,
            itemId: 'headerBar2',
            items:
            [
                {
                    xtype: 'combobox',
                    itemId: 'cmb_main_app',
                    reference: 'cmb_main_app',
                    editable: false,
                    //readOnly: true,
                    store: {
                        type: 'stoMyapp',
                        autoLoad: true
                    },
                    queryMode: 'local',
                    displayField: 'app_name',
                    width: 250,
                    listeners: 
                    {
                        select: function(combo, records, eOpts) 
                        {
                            console.log('cmb_main_app',records);
                            var a_controller = Testnet.app.getController('TController');
                            a_controller.selectApplication(records);
                        }
                    }                           
                },
                {
                    xtype: 'component',
                    html: '<h2>Title</h2>',
                    itemId: 'tle_main_app',
                    hidden: true,
                },
                {
                    xtype: 'button',
                    text: 'Copy',
                    reference: 'btn_main_copy',
                    itemId: 'btn_main_copy',
                    hidden: true,
                    handler: function() {
                        console.log('Main.clickCopy');
                        this.fireEvent('onClickCopy');                        
                    }
                },
                '->',
                {
                    xtype: 'button',
                    text: 'Create a New Application',
                    reference: 'btn_main_newapp',
                    handler: function() {
                        console.log('Main.clickNewApp');
                        this.fireEvent('onClickNewapp');
                    }                    
                }
            ]
        }        
    ]
});
