/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Testnet.view.main.MainContainer', {
    extend: 'Ext.tab.Panel',
    xtype: 'appcontainer',
    //reference: 'view_container',
    itemId: 'view_container',
    requires: [],

    ui: 'navigation',
    scrollable: 'y',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [
    {
        title: 'Dashboard',
        iconCls: 'fa-home',
        // The following grid shares a store with the classic version's grid as well!
        items: [{
            xtype: 'viewDashboard'
        }]
    }, {
        title: 'MyApplication',
        iconCls: 'fa-user',
        items: [{
            xtype: 'viewMyapp'
        }]
    }, {
        title: 'Batch',
        iconCls: 'fa-users',
        items: [{
            //xtype: 'viewBatch'
        }]
    }, {
        title: 'Console',
        iconCls: 'fa-cog',
        items: [{
            xtype: 'viewConsole'
        }]
    }, {
        title: 'Setting',
        iconCls: 'fa-cog',
        items: [{
            //xtype: 'viewState'
        }]
    
    }, {
        title: '',
        iconCls: '',
        width: 0,
        items: [
        {
            xtype: 'viewSignup'
        }]
    }],


});
