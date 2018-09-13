/**
 * This view is an example list of people.
 */
Ext.define('Testnet.view.myapplication.MyappList', {
    extend: 'Ext.grid.Panel',
    xtype: 'grid_Applist',

    requires: [
        'Testnet.store.MyApplications'
    ],

    layout: 'fit',

    cls: 'myapp-list-wrapper',
    
    reference: 'grid_applist',

    store: {
        type: 'stoMyapp'
    },

    fbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true
    },            

    columns: 
    [
        { text: 'Namespace', dataIndex: 'namespace', width:160},
        { text: 'App Name',  dataIndex: 'app_name', width:200 },
        { text: 'Created At', dataIndex: 'created_at' , width:260},
        { text: 'URL', dataIndex: 'service_url', flex: 1 },
        {
            xtype: 'actioncolumn',
            text: 'Select',
            width: 85,
            menuDisabled: true,
            sortable: false,

            items: 
            [
                {
                    iconCls: 'x-fa fa-check green',
                    handler: 'onSelectApplication'
                }
            ]
        }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
