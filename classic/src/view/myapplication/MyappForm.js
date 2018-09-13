/**
 * This view is an example list of people.
 */
Ext.define('Testnet.view.myapplication.MyappForm', {
    extend: 'Ext.form.Panel',
    xtype: 'form_myapp',
    
    layout: {
        type: 'hbox',
        align: 'stretch',
    },


    ui: 'light',

    reference: 'form_myapp',

    cls: 'myapp-form-wrapper',

    url: Testnet.service.Const.BASE_URL + 'apis/myapp/register',

    fieldDefaults: {
        labelAlign: 'top',
        labelWidth: 150,
        msgTarget: 'side',
        width: '100%',        
        anchor: '100%',
        padding: '5 20 0 0',        
    },

    listeners: {
        collapse: function() 
        {
            console.log('collapsed');
        },
        expand: function() {
            console.log('expand');
        }
    },

    bodyStyle: {
        'background':'rgba(216,216,216,0.4)',
        'border-radius': '7px',
    },

    items:
    [
        {
            flex: 1,
            bodyStyle: {
                'background':'none',
            },
            padding: '0 40 40 40',

            items:
            [
                {
                    html: '<h4>Details</h4>',
                    bodyStyle:{
                        background:'none',
                        color: '#FFFFFF',
                        fontSize: '24px',
                        paddingLeft: '10px'
                    },
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Application ID',
                    name: 'app_id',
                    value: '',
                    reference: 'txt_myapp_id',
                    disabled: true,
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'App Secret',
                    name: 'app_secret',
                    value: '',
                    reference: 'txt_myapp_secret',
                    disabled: true,
                },        
                {
                    xtype: 'combobox',
                    fieldLabel: 'Category',
                    name: 'category',
                    editable: false,
                    store: ['Business','Community','Government',
                        'Education','Entertainment', 'Game', 'Lifestyle',
                        'Messaging', 'News', 'Shopping', 'ETC'
                    ],
                    reference: 'cmb_myapp_category',
                },                        
                {
                    xtype: 'textfield',
                    fieldLabel: 'App Name',
                    name: 'app_name',
                    value: '',
                    reference: 'txt_myapp_name',
                },                        
                {
                    xtype: 'textfield',
                    fieldLabel: 'Namespace',
                    name: 'namespace',
                    value: '',
                    vtype: 'alphanum',
                    reference: 'txt_myapp_namespace',
                },                        
                {
                    xtype: 'textfield',
                    fieldLabel: 'Service URL',
                    name: 'service_url',
                    value: '',
                    vtype: 'url',
                    reference: 'txt_myapp_url',
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Contact Email',
                    name: 'contact_email',
                    value: '',
                    vtype: 'email',
                    reference: 'txt_myapp_contact_email',
                },
                {
                    xtype: 'textarea',
                    fieldLabel: 'Description',
                    name: 'description',
                    reference: 'txt_myapp_description',
                    value: '',
                },
                {
                    xtype: 'hidden',
                    name: 'username',
                    value: 'james'
                }                
            ]
        },
    ],

    buttons: 
    [
	    {
	        text: 'Register',
	        disabled: false,
	        formBind: true,
            cls: 'register-btn',
            //margin: '10px 0 0 0',
	        handler: function() 
            {
	        	this.fireEvent('onClickFormRegister');
	        }
	    },
        {
            text: 'Clear',
            disabled: false,
            formBind: false,
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
});
