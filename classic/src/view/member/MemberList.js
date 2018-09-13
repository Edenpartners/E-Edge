/**
 * This view is an example list of people.
 */
Ext.define('Testnet.view.member.MemberList', {
    extend: 'Ext.grid.Panel',
    xtype: 'grid_memberlist',

    reference: 'grid_member',
    
    requires: [
        'Testnet.store.Member'
    ],

    cls: 'member-list-wrapper',

    // title: 'Member List',

    store: {
        type: 'stoMember'
    },

    bodyStyle:{
        'background':'none'
    },

    margin: '30 40 0 40',

    columns: 
    [
        { text: 'Role', dataIndex: 'member_role', flex: 1 },
        { text: 'App Name',  dataIndex: 'app_name', flex: 1  },
        { text: 'Username', dataIndex: 'member_username', flex: 1 },
        { text: 'Created At', dataIndex: 'created_at', width:260 },        
        {
            xtype: 'actioncolumn',
            text: 'Delete',
            width: 150,
            menuDisabled: true,
            sortable: false,

            items: 
            [
                {
                    iconCls: 'x-fa fa-check green',
                    handler: 'onDeleteMember'
                }
            ]
        },

    ],

    fbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true
    },            

    listeners: 
    {
        select: 'onItemSelected'
    }
});
