Ext.define('Testnet.view.security.Security', {
    extend: 'Ext.container.Container',
    xtype: 'viewSecurity',
    itemId: 'view_security',
    reference: 'view_security',
    controller: 'ctlSecurity',
    title: '',

    requires: [
        'Ext.slider.Single',
        'Testnet.service.Const',
    ],

    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    
    items:
    [
        {
            xtype: 'form',
            title: 'Security',
            reference: 'form_security',

            fieldDefaults: {
                labelAlign: 'right',
                labelWidth: 150,
                msgTarget: 'side',
                anchor: '100%',
                padding: '10 0 0 0',                
            },

            defaultType: 'textfield',

            items:
            [
                {
                    xtype: 'fieldset',
                    //flex: 1,
                    title: 'Server IP Whitelist',
                    items:
                    [
                        {
                            xtype: 'textarea',
                            fieldLabel: 'IPs',
                            name: 'whitelist',
                            reference: 'mem_security_ip',
                        },
                        {
                            xtype: 'radiogroup',
                            fieldLabel: 'API Service',
                            columns: 1,
                            name: 'enabled',
                            items: [
                                {boxLabel: 'Enabled', inputValue: 1, checked: true},
                                {boxLabel: 'Disabled', inputValue: 2},
                            ]
                        },                        
                    ]
                },
                {
                    xtype: 'fieldset',
                    //flex: 1,
                    title: 'Quota',
                    items:
                    [
                        {
                            xtype: 'numberfield',
                            fieldLabel: 'API Calls Per Day',
                            minValue: 0,
                            maxValue: 100000,
                            name: 'api_calls',
                        },
                        {
                            xtype: 'slider',
                            fieldLabel: 'CPU threshold',
                            value: 50,
                            name: 'cpu',
                            reference: 'sdr_setting_cpu'
                        },
                        {
                            xtype: 'slider',
                            fieldLabel: 'Memory threshold',
                            value: 50,
                            name: 'memory',
                            reference: 'sdr_setting_memory'
                        },
                        {
                            xtype: 'numberfield',
                            fieldLabel: 'Min Nodes',
                            minValue: 1,
                            maxValue: 100,
                            name: 'min_node',
                        },
                        {
                            xtype: 'numberfield',
                            fieldLabel: 'Max Nodes',
                            minValue: 1,
                            maxValue: 100,
                            name: 'max_node',
                        },
                    ]
                }
            ],
            buttons: 
            [
                {
                    text: 'Update',
                    disabled: false,
                    formBind: true,
                    handler: function() 
                    {
                        this.fireEvent('onClickFormUpdate');
                    }
                },
                {
                    text: 'Clear',
                    disabled: false,
                    formBind: true,
                    handler: function() 
                    {
                        this.fireEvent('onClickFormClear');
                    }
                }                
            ]
        },
    ]
});
