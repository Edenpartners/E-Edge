/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('Testnet.view.signup.SignupController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.ctlSignup',

    control: 
    {
        '*': {
            onClickFormSignin: 'onClickFormSignin',
            onClickFormSignup: 'onClickFormSignup',
        }
    },

    updateView: function()
    {
        console.log('SigninController.updateView');
    },

    onClickFormSignin: function()
    {
        console.log('SigninController.onClickFormSignin');

        var a_form = this.lookupReference('form_signin').getForm();
        //console.log(a_form);

        if (a_form.isValid()) 
        {
            a_form.submit({
                success: function(form,action) 
                {
                    console.log('success');
                },
                failure: function(form,action) 
                {
                    console.log('failure',action);
                    if (action.result.result=='ok') 
                    {
                        Ext.Msg.confirm('Success','Your account has been created.');

                        var a_controller = Testnet.app.getController('TController');
                        a_controller.doAfterSignup();
                        return;
                    }                    

                    if (action.result.msg=='existing_username') 
                    {
                        Ext.Msg.alert('Error','Existing Username, Please use different Username');
                    }
                    else if (action.result.msg=='existing_email') 
                    {
                        Ext.Msg.alert('Error','Existing Email, Please use different Email');
                    }
                    
                }
            });
        }
    },

    onClickFormSignup: function()
    {
        console.log('SigninController.onClickFormSignup');
    },

});
