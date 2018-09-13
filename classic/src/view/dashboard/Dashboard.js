Ext.define('Testnet.view.dashboard.Dashboard', {
    extend: 'Ext.container.Container',
    xtype: 'viewDashboard',
    itemId: 'view_dashboard',
    reference: 'view_dashboard',

    id: 'dashboard-container',

    controller: 'ctlDashboard',
    viewModel: 'modDashboard',

    title: 'Dashboard',

    requires: [
    	'Testnet.service.Const',
        'Ext.chart.axis.Numeric',
        'Ext.chart.axis.Category',
        'Ext.chart.CartesianChart',
        'Ext.chart.series.Bar',
        'Ext.chart.series.Line',
        'Ext.chart.series.Area',
        'Ext.chart.interactions.ItemHighlight'        
    ],

    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    
    height: 1200,

    items:
    [
        {
            xtype: 'panel',
            title: 'E-Edge : Dashboard',
            height: 650,

            cls: 'dashboard-upper',
            titleStyle: {
                fontSize: '50px'
            },
            header: {
                titlePosition: 0,
                items: [
                    {
                        xtype: 'createappbutton',
                    }
                ]
            },

            layout: {
                type: 'vbox',
                align: 'stretch'
            },

            items:
            [
                {
                    height: 200,
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    padding: '30 40 0 40',
                    items:
                    [
                        {
                            xtype:'widgetBox',
                            containerColor: 'green',
                            reference: 'wgt_appcount',
                            flex: 1,
                            data: {
                                amount: 611,
                                type: 'App Count',
                                icon: 'envelope'
                            }            
                        },            

                        {
                            xtype:'widgetBox',
                            containerColor: 'green',
                            reference: 'wgt_member_count',
                            flex: 1,
                            data: {
                                amount: 611,
                                type: 'Namespace',
                                icon: 'envelope'
                            }            
                        },            
                        {
                            xtype:'widgetBox',
                            containerColor: 'green',
                            reference: 'wgt_namespace',
                            flex: 1,
                            data: {
                                amount: 611,
                                type: 'Transaction',
                                icon: 'envelope'
                            }            
                        },
                        {
                            xtype:'widgetBox',
                            containerColor: 'green',
                            reference: 'wgt_api_call',
                            flex: 1,
                            data: {
                                amount: 611,
                                type: 'API Calls',
                                icon: 'envelope'
                            }            
                        },            
                        {
                            xtype:'widgetBox',
                            containerColor: 'green',
                            reference: 'wgt_api_error',
                            flex: 1,
                            data: {
                                amount: 611,
                                type: 'API Errors',
                                icon: 'envelope'
                            },
                            cls: 'last-card'
                        },
                    ]
                },
                {
                    //flex:2,
                    height: 400,
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    padding: '0 60 0 60',
                    items:
                    [
                        {
                            xtype: 'chartApi',
                            padding: '0 10 0 0',
                            flex: 1,
                        },
                        {
                            xtype: 'chartError',
                            padding: '0 10 0 0',
                            flex: 1,
                        },
                    ]
                }
            ]
        },
        {
            xtype: 'grid',
            title: 'My Applications',
            ui: 'light',
            // iconCls: 'x-fa fa-lightbulb-o',
            height: 400,
            cls: 'my-app-wrapper',
            store: {
                type: 'stoMyapp'
            },

            columns: 
            [
                {
                    width: 70,
                    menuDisabled: true,
                    sortable: false,
                },
                { text: 'App Name',  dataIndex: 'app_name', flex:1 },
                { text: 'Namespace', dataIndex: 'namespace', flex:1},
                { text: 'Created At', dataIndex: 'created_at', flex:2 },
                { text: 'URL', dataIndex: 'service_url', flex: 2},
                { text: 'Description', dataIndex: 'description',flex:4 },
                {
                    xtype: 'actioncolumn',
                    text: 'Select',
                    width: 80,
                    menuDisabled: true,
                    sortable: false,

                    items: 
                    [
                        {
                            iconCls: 'x-fa fa-check green',
                            handler: 'onSelectApplication'
                        }
                    ]
                },
                {
                    width: 70,
                    menuDisabled: true,
                    sortable: false,
                },
            ],

            listeners: {
                select: 'onItemSelected'
            }
        }
    ]
});
