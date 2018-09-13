Ext.define('Testnet.store.MyappSetting', {
    extend: 'Ext.data.Store',
    alias: 'store.stoMyappSetting',

    model: 'Testnet.model.MyappSetting',

    proxy: 
    {
        type: 'ajax',
        url: Testnet.service.Const.BASE_URL+'apis/myapp/setting',
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
