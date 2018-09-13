Ext.define('Testnet.store.MyApplications', {
    extend: 'Ext.data.Store',
    alias: 'store.stoMyapp',

    model: 'Testnet.model.MyApplication',

    proxy: 
    {
        type: 'ajax',
        url: Testnet.service.Const.BASE_URL+'apis/myapp',
        method: 'GET',
        cors: true,
        contentType: 'application/json',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    autoLoad:true
});
