Ext.define('Testnet.model.MyApplication', 
{
    extend: 'Testnet.model.Base',

    fields: [
        'app_name', 
        'created_at', 
        'updated_at',
        'username',
        'service_url',
        'company',
        'namespace',
        'description',
        'is_active',
        'is_delete',
        'category',
        'myapp_id',
        'app_secret',
        'contact_email'
    ]
});
