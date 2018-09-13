Ext.define('Testnet.store.Member', {
    extend: 'Ext.data.Store',

    alias: 'store.stoMember',

    model: 'Testnet.model.Member',

    proxy: 
    {
        type: 'ajax',
        url: Testnet.service.Const.BASE_URL+'apis/myapp/member',
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
