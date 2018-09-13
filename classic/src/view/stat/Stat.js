Ext.define('Testnet.view.stat.Stat', {
    extend: 'Ext.container.Container',
    xtype: 'viewStat',
    itemId: 'view_stat',
    reference: 'view_stat',
    controller: 'ctlStat',
    title: 'Stat',

    id: 'stat-container',

    requires: [
    	'Testnet.service.Const',
    ],

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    bodyStyle:{
        'background':'none',
    },
    
    items:
    [
    	{
    		xtype: 'form',
    		title: 'E-Edge : Stat',
    		reference: 'form_stat',

    		url: Testnet.service.Const.BASE_URL + 'apis/signup',

            bodyStyle:{
                'background':'none',
            },

            header: {
                titlePosition: 0,
                items: [
                    {
                        xtype: 'createappbutton',
                    }
                ]
            },

            items:
            [
                {
                    xtype: 'toolbar',
                    height: 64,
                    bodyStyle:{
                        'background':'none',
                    },
                    items:
                    [
                        {
                            xtype: 'displayfield',
                            fieldLabel: '',
                            bodyStyle:{
                                'background':'none',
                            },
                        },
                        '->',
                        {
                            xtype: 'segmentedbutton',
                            fieldLabel: 'Toggle Group',
                            bodyStyle:{
                                'background':'none',
                            },
                            items: 
                            [
                                {
                                    text: '7 days',
                                    value: 7,
                                    //pressed: true
                                }, {
                                    text: '14 days',
                                    value: 14,
                                }, {
                                    text: '30 Days',
                                    value: 30,
                                }
                            ],
                            listeners: {
                                toggle: function(container, button, pressed) {
                                    console.log("User toggled the '" + button.text + "' button: " + (pressed ? 'on' : 'off'));
                                    this.fireEvent('onClickPeriod',button);
                                }
                            }                            
                        },
                        {
                            xtype: 'panel',
                            width: 70,
                            bodyStyle:{
                                'background':'none',
                            },
                        }
                    ]
                },
                {
                    xtype: 'panel',

                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },

                    bodyStyle:{
                        'background':'none',
                    },
                    bodyPadding: '20 60 0 60',
                    items: 
                    [
                        {
                            xtype: 'chartStatApi',
                            bodyStyle:{
                                'background':'none',
                            },
                            flex: 1,
                        },
                        {
                            xtype: 'chartStatError',
                            padding: '25 0 50 0',
                            bodyStyle:{
                                'background':'none',
                            },
                            flex: 1,
                        },
                    ],
                },
            ]
    	}
    ]
});
