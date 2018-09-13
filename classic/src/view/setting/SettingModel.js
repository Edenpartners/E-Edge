Ext.define('Testnet.view.setting.SettingModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.modSetting',

    data: {
        greeting: null,
    },

    stores: {
        storeSetting: {
            type: 'stoMyappSetting',
            autoLoad: true,
            pageSize: 1000
        },
    }
});
