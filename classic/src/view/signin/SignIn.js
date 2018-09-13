Ext.define('Testnet.view.signin.Signin', {
    extend: 'Ext.window.Window',
    xtype: 'viewSignin',
    itemId: 'view_signin',
    reference: 'view_signin',
    controller: 'ctlSignin',
    cls: 'signin-container',
    title: '',

    autoShow: true,
    closeAction: 'hide',
    closable: false,
    resizable: false,
    draggable: false,
    
    width: 440,
    height: 440,

    requires: [
        'Testnet.service.Const',
        'Testnet.view.signin.SigninController',
    ],

    layout: {
        type: 'fit',
        //align: 'stretch'
    },
    bodyStyle:{
        background:'none',
    },
    
    items:
    [
        {
            xtype: 'container',
            referenceHolder: true,
            reference: 'innerCt1',
            bodyStyle:{
                background:'red',
            },
            items: [
                {
                    xtype: 'panel',
                    html: '<div class="logo-img"></div>',
                    cls: 'icon-signin-container'
                },
                {
                    xtype: 'form',
                    reference: 'form_signin',
                    cls: 'form-login-wrapper',

                    url: Testnet.service.Const.BASE_URL + 'apis/signin',

                    fieldDefaults: {
                        labelAlign: 'right',
                        labelWidth: 95,
                        msgTarget: 'side',
                        anchor: '100%',
                        padding: '10 40 0 0',
                        allowBlank: false,
                    },

                    items:
                        [
                            {
                                xtype: 'label',
                                text: 'Sign In',
                                cls: 'form-title',
                                style: {
                                    fontSize: '36px',
                                    lineHeight: '36px',
                                    color: '#9B9B9B',
                                    textAlign: 'left'
                                }
                            },
                            {
                                xtype: 'textfield',
                                emptyText: 'Username',
                                name: 'username',
                                value: 'tester1',
                                reference: 'txt_signin_userid',
                                fieldStyle: 'width: 240px; height: 34px; border-radius: 17px; border: 1px solid #9B9B9B;',
                                cls: 'round-input'
                            },
                            {
                                xtype: 'textfield',
                                emptyText: 'Password',
                                inputType: 'password',
                                name: 'password',
                                value: 'password1',
                                reference: 'txt_signin_password',
                                cls: 'round-input'
                            },
                            {
                                xtype: 'panel',
                                height: 7,
                                bodyStyle: {
                                    'background':'none',
                                },
                            },
                            {
                                xtype: 'button',
                                disabled: false,
                                formBind: true,
                                cls: 'round-button',
                                handler: function() {
                                    this.fireEvent('onClickFormSignin');
                                }
                            },
                            {
                                xtype: 'panel',
                                height: 8,
                                bodyStyle: {
                                    'background':'none',
                                },
                            },
                        ],
                },
                {
                    xtype: 'container',
                    referenceHolder: true,
                    reference: 'innerCt2',
                    cls: 'reference-block',
                    items: [
                        {
                            xtype: 'component',
                            cls: 'ref-link',
                            autoEl: {
                                tag: 'a',
                                href: '#',
                                html: 'Forgot your password'
                            },
                            style: {
                                float: 'left'
                            }
                        },
                        {
                            xtype: 'component',
                            cls: 'ref-link',
                            autoEl: {
                                tag: 'a',
                                href: '#',
                                html: 'Sign Up'
                            },
                            style: {
                                float: 'right'
                            }
                        }
                    ],
                },
            ]
        },
    ]
});
