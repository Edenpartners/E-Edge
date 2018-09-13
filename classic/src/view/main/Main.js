/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Testnet.view.main.Main', {
    extend: 'Ext.container.Viewport',
    xtype: 'app-main',
    plugins: 'viewport',
    
    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'Testnet.service.Const',
        'Testnet.service.Global',
        'Testnet.service.Helper',
        'Testnet.view.main.Main',
        'Testnet.view.main.MainContainer',
        'Testnet.view.main.MainModel',
        //'Testnet.view.myapplication.MyApplication',
    ],

    controller: 'main',
    viewModel: 'main',

    //ui: 'navigation',

    layout: {
        type: 'border',
        //align: 'stretch'
    },

    listeners: {
        show: function() {
           this.fireEvent('onShow');
        },
        beforerender: function() {
           this.fireEvent('onBeforeRender');
        },
        afterrender: function() {
           this.fireEvent('onAfterRender');
        },
    },

    items: 
    [
        {
            xtype: 'panel',
            region: 'west',
            width: 160,
            ui: 'nav',
            id: 'left-sidebar-menu',
            items: 
            [
                {
                    xtype: 'panel',
                    //region: 'west',
                    width: 160,
                    items: 
                    [
                        {
                            xtype: 'panel',
                            html: '<div class="eden-logo-img"></div>',
                            //cls: 'icon-signin-container',
                            style: {
                                margin: '20px 0px 70px 0px',
                            },
                        },

                        {
                            xtype: 'panel',
                            html: '<div class="logo-img"></div>',
                            cls: 'icon-signin-container',
                            style: {
                                backgroundColor: '#4A4A4A',
                                background: '#4A4A4A',
                                marginTop: '20px'
                            },
                        },
                        {
                            xtype: 'panel',
                            height: 20,
                            bodyStyle:{
                                background:'none',
                            },
                        },
                        {
                            xtype: 'label',
                            text: 'Hi, James',
                            cls: 'form-title',
                            style: {
                                fontSize: '13px',
                                // lineHeight: '36px',
                                color: '#FFFFFF',
                                backgroundColor: '#4A4A4A',
                            }
                        },
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
                            cls: 'app-select-dropdown',
                            width: 160,
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
                    ],
                    style: {
                        backgroundColor: '#4A4A4A',
                        textAlign: 'center'
                    }
                    // ui: 'nav'
                },
                {
                    xtype: 'treepanel',
                    //region: 'west',
                    // ui: 'nav',
                    width: 160,
                    rootVisible: false,
                    cls: 'tree-menu',
                    reference: 'tree_main',
                    store: Ext.create('Ext.data.TreeStore',
                        {
                            fields: ['text', 'duration', 'isLayover'],
                            root:
                                {
                                    expanded: true,
                                    children:
                                        [
                                            {
                                                text: 'Dashboard',leaf: true,
                                                target_url: 'Testnet.view.dashboard.Dashboard',
                                                iconCls: 'node-dashboard'
                                            },
                                            {
                                                text: 'My Application', expanded: true,
                                                target_url: 'Testnet.view.myapplication.MyApplication',
                                                iconCls: 'node-application',
                                                children:
                                                    [
                                                        {
                                                            text: 'Settings', leaf:true,
                                                            target_url: 'Testnet.view.setting.Setting',
                                                            iconCls: 'node-setting'
                                                        },
                                                        {
                                                            text: 'Members', leaf:true,
                                                            target_url: 'Testnet.view.member.Member',
                                                            iconCls: 'node-member x-fa fa-user'
                                                        },
                                                        {
                                                            text: 'Stat',leaf: true,
                                                            target_url: 'Testnet.view.stat.Stat',
                                                            iconCls: 'node-stat'
                                                        },
                                                    ]
                                            },
                                            {
                                                text: 'Console',leaf: true,
                                                target_url: 'Testnet.view.console.Console',
                                                iconCls: 'node-console'
                                            },
                                        ]
                                }
                        }),
                    viewConfig: {
                        listeners: {
                            itemclick: function(view, dataObj, item, index, eventObj) {
                                console.log('itemclick',index);
                                this.fireEvent('onTreeItemClick',dataObj,index);
                            }
                        }
                    }
                },

                {
                    xtype: 'panel',
                    //region: 'west',
                    width: 160,
                    cls: 'signout-btn-wrapper',
                    items: [
                        {
                            xtype: 'button',
                            text: 'Sign Out',
                            reference: 'btn_main_signout',
                            handler: function() {
                                console.log('Main.onClickSignout');
                                this.fireEvent('onClickSignout');
                            }
                        },
                    ]
                    // ui: 'nav'
                },
            ],
        },
        {
            xtype: 'container',
            region: 'center',
            reference: 'view_container',
            itemId: 'view_container',
            scrollable: true,
        },
    ]
});
