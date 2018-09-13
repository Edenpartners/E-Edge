Ext.define('Testnet.view.dashboard.DashboardModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.modDashboard',

    data: {
        greeting: null,
    },

    stores: {
        storeMyapp: {
            type: 'stoMyapp',
            autoLoad: true,
            pageSize: 1000
        },
        storeMember: {
            type: 'stoMember',
            autoLoad: true,
            pageSize: 1000
        },        
    }
});
