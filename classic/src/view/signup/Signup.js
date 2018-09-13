Ext.define('Testnet.view.signup.Signup', {
    extend: 'Ext.container.Container',
    xtype: 'viewSignup',
    itemId: 'view_signup',
    reference: 'view_signup',
    controller: 'ctlSignup',
    title: 'Signup',

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
    		xtype: 'form',
    		title: 'Signup',
    		reference: 'form_signup',

    		url: Testnet.service.Const.BASE_URL + 'apis/signup',

		  	fieldDefaults: {
		        labelAlign: 'right',
		        labelWidth: 115,
		        msgTarget: 'side'
		    },

			defaultType: 'textfield',
	        defaults: {
	            anchor: '100%',
	            padding: '10 0 0 0',
	        },

    		items:
    		[
  				{
        			fieldLabel: 'User ID',
            		name: 'username',
            		value: 'tester1',
            		reference: 'txt_signup_userid',
  				},
  				{
        			fieldLabel: 'Password',
            		name: 'password',
            		value: 'password1',
            		reference: 'txt_signup_password',
  				},
  				{
        			fieldLabel: 'EMail',
            		name: 'email',
            		value: 'tester1@abc.com',
            		reference: 'txt_signup_email',
  				},
  				{
        			fieldLabel: 'First Name',
            		name: 'first_name',
            		reference: 'txt_signup_first_name',
  				},
  				{
        			fieldLabel: 'Last Name',
            		name: 'last_name',
            		reference: 'txt_signup_last_name',
  				},
    		],

		    buttons: 
		    [
			    {
			        text: 'Sign Up',
			        disabled: false,
			        formBind: true,
			        handler: function() {
			        	this.fireEvent('onClickFormSignup');
			        }
			    }
			]

    	}
    ]
});
