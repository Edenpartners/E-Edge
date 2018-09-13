Ext.define('Testnet.view.myapplication.MyApplication', {
    extend: 'Ext.container.Container',
    xtype: 'viewMyapp',
    itemId: 'view_myapp',
    reference: 'view_myapp',
    controller: 'ctlMyapplication',
    title: 'My Application',

    id: 'my-app-container',

    requires: [
    	'Testnet.service.Const',
        'Testnet.view.myapplication.MyappList',
    ],

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    listeners: {
        afterrender: function() {
           console.log('afterrender');
           this.fireEvent('onAfterRender');
        },
        show: function() {
           console.log('afterrender');
           this.fireEvent('onShow');
       }        
    },
    
    items:
    [   
        {
            xtype: 'panel',
            layout: {
                //type:'accordion',
                type: 'vbox',
                align: 'stretch',
                animiate: true,
            },
            header: {
                titlePosition: 0,
                items: [
                    {
                        xtype: 'createappbutton',
                    }
                ]
            },
            autoHeight: true,
            reference: 'pnl_myapp',
            title: 'E-Edge : My Application',
            bodyStyle:{
                'background':'none'
            },
            items:
            [
                {
                    xtype: 'grid_Applist',
                    //autoScroll : true,
                    padding: '40 40 40 40',
                    autoHeight: true,
                    flex: 1,
                    layout: 'fit',
                    anchor: '100%'
                },
                {
                    xtype: 'form_myapp',
                    padding: '10 40 40 40',
                    autoHeight: true,
                    height: '50%',
                    flex: 1,
                },
                {
                    height: 100,
                    bodyStyle:{
                        'background':'none'
                    },
                }
            ]
        },
    ]
});
