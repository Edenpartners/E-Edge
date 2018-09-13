Ext.define('Testnet.view.console.Console', {
    extend: 'Ext.container.Container',
    xtype: 'viewConsole',
    itemId: 'view_console',
    reference: 'view_console',
    controller: 'ctlConsole',
    title: 'Console',

    id: 'console-container',

    requires: [
    	'Testnet.service.Const',
    ],

    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    
    items:
    [
        {
            xtype: 'panel',
            title: 'E-Edge : Console',
            height: 1000,

            header: {
                titlePosition: 0,
                items: [
                    {
                        xtype: 'createappbutton',
                    }
                ]
            },

            layout: {
                type: 'vbox',
                align: 'stretch'
            },

            bodyStyle:{
                'background':'none'
            },
            
            bodyPadding: '40 40 0 40',

            items: 
            [
                {
                    xtype: 'panel',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },

                    bodyStyle:{
                        'background':'none'
                    },

                    items: 
                    [
                        {
                            xtype: 'form',
                            // title: 'Console',
                            reference: 'form_console',
                            //layout: 'fit',
                            flex: 1,
                            // height: 210,

                            fieldDefaults: {
                                labelAlign: 'right',
                                labelWidth: 90,
                                msgTarget: 'side',
                                anchor: '100%',
                                padding: '10 10 0 0',
                            },
                            bodyStyle:{
                                'background':'rgba(216,216,216,0.4)',
                                'border-radius': '7px'
                            },

                            items:
                                [
                                    {
                                        xtype: 'panel',
                                        height: 30,
                                        bodyStyle:{
                                            'background':'none'
                                        },
                                    },
                                    {
                                        xtype: 'fieldcontainer',
                                        fieldLabel: 'API URL ',
                                        combineErrors: true,
                                        msgTarget: 'under',
                                        layout: {
                                            type: 'hbox',
                                            align: 'stretch'
                                        },
                                        bodyStyle:{
                                            'background':'none'
                                        },
                                        defaults: {
                                            hideLabel: true,
                                            margin: '0 3 0 0'
                                        },
                                        items:
                                            [
                                                {
                                                    xtype: 'combobox',
                                                    fieldLabel: '',
                                                    name: 'server',
                                                    store: ['Server1','Server2'],
                                                    value: 'Server1',
                                                    reference: 'cmb_console_server',
                                                    editable: false,
                                                    width: 150,
                                                },
                                                {
                                                    xtype: 'combobox',
                                                    fieldLabel: '',
                                                    name: 'method',
                                                    store: ['GET','POST'],
                                                    value: 'GET',
                                                    editable: false,
                                                    reference: 'cmb_console_method',
                                                    width: 120,
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    fieldLabel: '',
                                                    // width: '85%',
                                                    flex: 1,
                                                    name: 'url',
                                                    reference: 'txt_console_url',
                                                    value: 'apis/myapp'
                                                },
                                            ]
                                    },
                                    {
                                        xtype: 'textfield',
                                        fieldLabel: 'Parameter',
                                        name: 'parameter',
                                        bodyStyle:{
                                            'background':'none'
                                        },
                                        reference: 'txt_console_parameter',
                                    },
                                    {
                                        xtype: 'panel',
                                        height: 30,
                                        bodyStyle:{
                                            'background':'none'
                                        },
                                    },
                                ],
                            buttons:
                                [
                                    {
                                        text: 'Execute',
                                        disabled: false,
                                        formBind: true,
                                        cls: 'register-btn',
                                        handler: function()
                                        {
                                            this.fireEvent('onClickFormExecute');
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
                    ],
                },
                {
                    xtype: 'form',
                    // title: 'Response',
                    // titleAlign: 'left',
                    ui: 'light',
                    // iconCls:'x-fa fa-lightbulb-o',
                    cls: 'response-container',
                    padding: '40 0 40 0',
                    reference: 'form_response',
                    flex: 1,
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    bodyStyle:{
                        'background':'rgba(216,216,216,0.4)',
                        'border-radius': '7px'
                    },
                    fieldDefaults: {
                        labelAlign: 'right',
                        labelWidth: 90,
                        anchor: '100%',
                        padding: '10 20 0 20',
                    },

                    items:
                    [
                        {
                            html: '<h4>Response</h4>',
                            bodyStyle:{
                                background:'none',
                                color: '#FFFFFF',
                                fontSize: '24px',
                                paddingLeft: '40px'
                            },
                        },
                        {
                            xtype: 'container',
                            layout: {
                                type: 'hbox',
                                align: 'stretch'
                            },
                            /*
                                                fieldLabel: 'HTTP Result',
                                                combineErrors: true,
                                                msgTarget: 'under',
                                                layout: {
                                                    type: 'hbox',
                                                    align: 'stretch'
                                                },
                            */
                            defaults: {
                                //hideLabel: true,
                                margin: '0 3 0 0',
                                anchor: '100%'
                            },
                            items:
                                [
                                    {
                                        fieldLabel: 'HTTP Status',
                                        xtype: 'textfield',
                                        reference: 'txt_console_status',
                                        readOnly: true,
                                        flex:1,
                                    },
                                    {
                                        fieldLabel: 'Status Text',
                                        xtype: 'textfield',
                                        reference: 'txt_console_status_text',
                                        readOnly: true,
                                        flex:1,
                                    },
                                ],
                        },
                        {
                            fieldLabel: 'Result',
                            xtype: 'textarea',
                            reference: 'area_console_response',
                            readOnly: true,
                            grow: true,
                            height: '100%',
                            flex:1,
                            layout: 'fit',
                            height: 600,                                    
                        },
                    ]
                },
            ]
        },
    ]
});
