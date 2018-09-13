Ext.define('Testnet.model.MyappSetting', 
{
    extend: 'Testnet.model.Base',

    fields: [
        'app_name', 
        'created_at', 
        'updated_at',
        'username',
        'api_call_per_day',
        'traffic_per_day',
        'nodes_min',
        'nodes_max',
        'threshold_cpu',
        'threshold_memory',
        'is_active',
        'server_region',
        'ip_whitelist'
    ]
});
