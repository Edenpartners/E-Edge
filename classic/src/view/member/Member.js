Ext.define('Testnet.view.member.Member', {
    extend: 'Ext.container.Container',
    xtype: 'viewMember',
    itemId: 'view_member',
    reference: 'view_member',
    controller: 'ctlMember',
    title: '',

    id: 'member-container',

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
            layout: {
                type: 'vbox',
                align: 'stretch',
            },
            header: {
                titlePosition: 0,
                items: [
                    {
                        xtype: 'createappbutton',
                    }
                ]
            },
            //flex: 100,
            autoHeight: true,
            flex: 1,
            //height: '100%',
            title: 'E-Edge : Member',
            bodyStyle: {
                'background': 'none'
            },
            items: 
            [
                {
                    xtype: 'grid_memberlist',
                    flex:1,
                    autoHeight: true,
                    bodyStyle:{
                        'background':'none'
                    },
                },
                {
                    xtype: 'panel',

                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },

                    bodyStyle:{
                        'background':'none'
                    },
                    bodyPadding: '0 40 0 40',

                    autoHeight: true,

                    items: 
                    [
                        {
                            xtype: 'panel',

                            layout: {
                                type: 'hbox',
                                align: 'stretch'
                            },

                            bodyStyle:{
                                'background':'rgba(216,216,216,0.4)',
                                borderRadius: '7px'
                            },

                            autoHeight: true,
                            margin: '30 0 0 0',
                            flex: 1,

                            items: 
                            [
                                {
                                    xtype: 'form',
                                    // title: 'New Member',
                                    // titleAlign: 'left',
                                    ui: 'light',
                                    // iconCls:'x-fa fa-lightbulb-o',

                                    reference: 'form_member',
                                    autoHeight: true,
                                    flex: 1,

                                    url: Testnet.service.Const.BASE_URL + 'apis/myapp/member/update',

                                    layout: {
                                        type: 'vbox',
                                        align: 'stretch'
                                    },
                                    fieldDefaults: {
                                        labelAlign: 'left',
                                        padding: '0 40 0 40',
                                    },

                                    bodyStyle:{
                                        'background':'none',
                                    },

                                    items:
                                        [
                                            {
                                                html: '<h4>New Member</h4>',
                                                bodyStyle:{
                                                    background:'none',
                                                    color: '#FFFFFF',
                                                    fontSize: '24px',
                                                    paddingLeft: '40px'
                                                },
                                            },
                                            {
                                                xtype: 'hidden',
                                                name: 'username',
                                                value: ''
                                            },
                                            {
                                                xtype: 'hidden',
                                                name: 'app_name',
                                                reference: 'hid_setting_appname',
                                                value: ''
                                            },
                                            {
                                                xtype: 'combobox',
                                                fieldLabel: 'Role',
                                                name: 'member_role',
                                                value: '',
                                                store: ['Administrator','Developer','Tester'],
                                                editable: false,
                                                reference: 'cmb_member_role',

                                            },
                                            {
                                                xtype: 'textfield',
                                                fieldLabel: 'Username',
                                                name: 'member_username',
                                                required: true,
                                                reference: 'txt_member_username',
                                            },
                                            {
                                                flex: 1,
                                                height: 330,
                                                bodyStyle:{
                                                    'background':'none',
                                                },
                                            }
                                        ],
                                },
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
                                    },
                                    {
                                        text: 'Delete',
                                        disabled: false,
                                        formBind: false,
                                        cls: 'delete-btn',
                                        handler: function() 
                                        {
                                            this.fireEvent('onClickFormDelete');
                                        }
                                    },
                                    
                                ]
                        },
                    ],
                },
                {
                    height: 300,
                    bodyStyle:{
                        'background':'none'
                    },
                },                
            ],
        },
    ]
});
