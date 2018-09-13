/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('Testnet.view.signin.SigninController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.ctlSignin',

    control: 
    {
        '*': {
            onClickFormSignin: 'onClickFormSignin',
        }
    },

    updateView: function()
    {
        console.log('SigninController.updateView');
    },

    doNextStep: function()
    {
        this.getView().destroy();

        // Add the main view to the viewport
        Ext.create({
            xtype: 'app-main'
        });
    },

    doSignin: function()
    {
        var a_form = this.lookupReference('form_signin').getForm();

        if (a_form.isValid()) 
        {
            this.getView().mask('Authenticating... Please wait...');

            a_form.submit(
            {
                success: function(form,action) 
                {
                    console.log('success');
                    _this.getView().unmask();
                },
                failure: function(form,action) 
                {
                    console.log('failure',action);
                    _this.getView().unmask();

                    localStorage.setItem(Testnet.service.Const.COOKIE_SIGNIN, true);

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

    doFakeSignin: function()
    {
        localStorage.setItem(Testnet.service.Const.COOKIE_SIGNIN, true);
        this.doNextStep();
    },

    onClickFormSignin: function()
    {
        var _this = this;

        console.log('SignupController.onClickFormSignin');
        //console.log(a_form);

        this.doFakeSignin();        
    },

});
