Ext.define('Testnet.view.setting.Setting', {
    extend: 'Ext.container.Container',
    xtype: 'viewSetting',
    itemId: 'view_setting',
    reference: 'view_setting',
    controller: 'ctlSetting',
    title: 'Setting',

    id: 'setting-container',

    requires: [
        'Ext.slider.Single',
    	'Testnet.service.Const',
    ],

    viewModel: {
        type: 'modSetting'
    },

    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    
    items:
    [
        {
            xtype: 'panel',
            title: 'E-Edge : Setting',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },

            header: {
                titlePosition: 0,
                items: [
                    {
                        xtype: 'createappbutton',
                    }
                ]
            },

            flex: 1,

            items: [
                {
                    width: 70,
                    bodyStyle:{
                        'background':'none'
                    },
                },
                {
                    xtype: 'form',
                    reference: 'form_setting',
                    padding: '0',
                    flex: 1,

                    url: Testnet.service.Const.BASE_URL + 'apis/myapp/setting/update',

                    fieldDefaults: {
                        labelAlign: 'left',
                        labelWidth: 150,
                        msgTarget: 'side',
                        anchor: '100%',
                        padding: '10 0 0 0',
                    },

                    defaultType: 'textfield',
                    bodyStyle:{
                        'background':'none'
                    },

                    items:
                        [
                            {
                                xtype: 'panel',
                                height: 50,
                                bodyStyle:{
                                    'background':'none'
                                },
                            },
                            {
                                xtype: 'hidden',
                                name: 'app_name',
                                reference: 'hid_setting_appname',
                                value:'',
                            },
                            {
                                xtype: 'hidden',
                                name: 'username',
                                reference: 'hid_setting_username',
                                value:'james',
                            },
                            {
                                xtype: 'fieldset',
                                style:{
                                    'background-color':'rgba(216,216,216,0.4)'
                                },
                                items:
                                    [
                                        {
                                            html: '<h4>General Setting</h4>',
                                            bodyStyle:{
                                                background:'none',
                                                color: 'rgba(8,242,248,0.6)',
                                                fontSize: '24px',
                                                paddingLeft: '10px'
                                            },
                                        },
                                        {
                                            xtype: 'combobox',
                                            fieldLabel: 'Server',
                                            name: 'server_region',
                                            value: 'Server1',
                                            editable: false,
                                            store: ['Server1','Server2','Server3'],
                                            reference: 'cmb_setting_server',
                                        },
                                        {
                                            xtype: 'radiogroup',
                                            reference: 'rdo_setting_active',
                                            fieldLabel: 'API Service',
                                            columns: 1,
                                            name: 'is_active',
                                            items: [
                                                {boxLabel: 'Enabled', inputValue: 1, checked: true},
                                                {boxLabel: 'Disabled', inputValue: 2},
                                            ]
                                        },
                                    ]
                            },
                            {
                                xtype: 'fieldset',
                                // title: 'Quota',
                                layout: {
                                    type: 'vbox',
                                    align: 'stretch'
                                },
                                style:{
                                    'background-color':'rgba(216,216,216,0.4)'
                                },
                                items:
                                    [
                                        {
                                            html: '<h4>Quota</h4>',
                                            bodyStyle:{
                                                background:'none',
                                                color: 'rgba(8,242,248,0.6)',
                                                fontSize: '24px',
                                                paddingLeft: '10px'
                                            },
                                        },
                                        {
                                            xtype: 'panel',
                                            layout: {
                                                type: 'hbox',
                                                align: 'stretch'
                                            },

                                            flex: 1,

                                            items: [
                                                {
                                                    xtype: 'numberfield',
                                                    fieldLabel: 'API Calls Per Day',
                                                    value: 10000,
                                                    minValue: 0,
                                                    maxValue: 100000,
                                                    name: 'api_call_per_day',
                                                    reference: 'txt_setting_api_calls',
                                                    flex: 1
                                                },
                                                {
                                                    xtype: 'numberfield',
                                                    fieldLabel: 'Traffic Per Day(MB)',
                                                    value: 100,
                                                    minValue: 0,
                                                    maxValue: 100000,
                                                    name: 'traffic_per_day',
                                                    reference: 'txt_setting_api_traffic',
                                                    flex: 1
                                                },
                                            ],
                                        },
                                        {
                                            height: 30
                                        }
                                    ]
                            },
                            {
                                xtype: 'fieldset',
                                style:{
                                    'background-color':'rgba(216,216,216,0.4)'
                                },
                                items:
                                    [
                                        {
                                            html: '<h4>Scaling Option</h4>',
                                            bodyStyle:{
                                                background:'none',
                                                color: 'rgba(8,242,248,0.6)',
                                                fontSize: '24px',
                                                paddingLeft: '10px'
                                            },
                                        },
                                        {
                                            xtype: 'numberfield',
                                            fieldLabel: 'Min Nodes',
                                            value: 1,
                                            minValue: 1,
                                            maxValue: 100,
                                            name: 'nodes_min',
                                            reference: 'txt_setting_nodes_min',
                                        },
                                        {
                                            xtype: 'numberfield',
                                            fieldLabel: 'Max Nodes',
                                            value: 1,
                                            minValue: 1,
                                            maxValue: 100,
                                            name: 'nodes_max',
                                            reference: 'txt_setting_nodes_max',
                                        },
                                        {
                                            xtype: 'slider',
                                            fieldLabel: 'CPU threshold',
                                            value: 70,
                                            name: 'threshold_cpu',
                                            reference: 'sdr_setting_cpu'
                                        },
                                        {
                                            xtype: 'slider',
                                            fieldLabel: 'Memory threshold',
                                            value: 70,
                                            name: 'threshold_memory',
                                            reference: 'sdr_setting_memory'
                                        },
                                    ]
                            },
                            {
                                xtype: 'fieldset',
                                style:{
                                    'background-color':'rgba(216,216,216,0.4)',
                                    'border-color': '#D8D8D8'
                                },
                                items:
                                    [
                                        {
                                            html: '<h4>Security</h4>',
                                            bodyStyle:{
                                                background:'none',
                                                color: 'rgba(8,242,248,0.6)',
                                                fontSize: '24px',
                                                paddingLeft: '10px'
                                            },
                                        },
                                        {
                                            xtype: 'textarea',
                                            fieldLabel: 'Server IP Whitelist',
                                            name: 'ip_whitelist',
                                            value: '192.168.0.1;',
                                            grow: true,
                                            height:50,
                                            reference: 'mem_setting_whitelist'
                                        }
                                    ]
                            }
                        ],
                    buttons:
                        [
                            {
                                text: 'Update',
                                disabled: false,
                                formBind: true,
                                cls: 'register-btn',
                                handler: function()
                                {
                                    this.fireEvent('onClickFormUpdate');
                                }
                            },
                            {
                                text: 'Clear',
                                disabled: false,
                                formBind: true,
                                cls: 'clear-btn',
                                handler: function()
                                {
                                    this.fireEvent('onClickFormClear');
                                }
                            }
                        ]
                },
                {
                    width: 70,
                    bodyStyle:{
                        'background':'none'
                    },
                },
            ]
        },
        {
            height: 150
        }
    ]
});
