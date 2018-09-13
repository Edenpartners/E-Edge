/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('Testnet.view.myapplication.MyApplicationController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.ctlMyapplication',

    config: {
        refs: {
            myappView:'#view_myapp',
        }
    },

    control: 
    {
        '*': {
            onClickFormRegister: 'onClickFormRegister',
            onClickFormClear: 'onClickFormClear',
            onSelectApplication: 'onSelectApplication',
            onClickFormDelete: 'onClickFormDelete',
            onAfterRender: 'onAfterRender',
            onShow: 'onShow',
        }
    },

    updateView: function(cmd,params)
    {
        console.log('MyApplicationController.updateView',cmd);
        if (cmd=='cmd_newapp') 
        {
            var a_panel = this.lookupReference('grid_applist');
            //a_panel.collapse('top',true);
            
            var a_form = this.lookupReference('form_myapp');
            a_form.getForm().reset();
        } else {
            this.updateAppDetail(cmd);
        }
    },

    updateAppInfo: function(data)
    {
        this.lookupReference('txt_myapp_id').setValue(data.app_id);
        this.lookupReference('txt_myapp_secret').setValue(data.app_secret);
    },

    updateAppDetail: function(record)
    {
        console.log('MyApplicationController.updateAppDetail',record);
        if (! record) {
            return;
        }
        
        this.lookupReference('txt_myapp_name').setValue(record.data.app_name);
        this.lookupReference('txt_myapp_id').setValue(record.data.myapp_id);
        this.lookupReference('txt_myapp_namespace').setValue(record.data.namespace);
        this.lookupReference('txt_myapp_url').setValue(record.data.service_url);
        this.lookupReference('txt_myapp_description').setValue(record.data.description);
        this.lookupReference('txt_myapp_secret').setValue(record.data.app_secret);
        this.lookupReference('txt_myapp_contact_email').setValue(record.data.contact_email);
        this.lookupReference('cmb_myapp_category').setValue(record.data.category);
    },

    clearForm: function()
    {
        var a_form = this.lookupReference('form_myapp');
        a_form.reset();
    },

    reloadGridStore: function()
    {
        var a_grid = this.lookupReference('grid_applist');
        a_grid.getStore().load();        
    },



    onItemSelected: function (sender, record) 
    {
        console.log('MyApplicationController.onItemSelected');
        this.updateAppDetail(record);
    },

    onClickFormRegister: function()
    {
        var _this = this;

        console.log('MyApplicationController.onClickFormRegister');

        var a_form = this.lookupReference('form_myapp').getForm();
        //console.log(a_form);

        if (a_form.isValid()) 
        {
            var a_mask = Testnet.service.Helper.loadMask('');

            a_form.submit({
                success: function(form,action) 
                {
                    console.log('success');
                    a_mask.destroy(true);
                },
                failure: function(form,action) 
                {
                    console.log('failure',action);
                    a_mask.destroy(true);

                    if (action.result.result=='ok') 
                    {
                        _this.reloadGridStore();
                        _this.updateAppInfo(action.result.data);
                        Ext.Msg.confirm('Success','Your Application is successfuly created.');
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
        } else {
            Ext.Msg.alert('Error','Please input correct data');
        }
    },

    onClickFormClear: function()
    {
        console.log('MyApplicationController.onClickFormClear');
        this.clearForm();
    },

    onSelectApplication: function(grid, rowIndex, colIndex)
    {
        var record = grid.getStore().getAt(rowIndex);

        var a_controller = Testnet.app.getController('TController');
        a_controller.selectApplication(record);
    },

    onClickFormDelete: function()
    {
        var _this = this;

        console.log('MyApplicationController.onClickFormDelete');

        var a_app_id = _this.lookupReference('txt_myapp_id').getValue();
        if (a_app_id.length==0) {
            Ext.Msg.alert('Error','Please select an application to delete');
            return;
        }

        Ext.Msg.confirm("Confirm", "Do you want to delete the selected application?", function(btnText)
        {
            //console.log('Confirm',btnText);
            if (btnText == 'yes') 
            {
                var a_mask = Testnet.service.Helper.loadMask('');

                var a_app = _this.lookupReference('txt_myapp_name').getValue();
                Testnet.service.Helper.deleteApplication(a_app,
                    function(status,response) 
                    {
                        //console.log('onClickFormDelete',status,response);
                        a_mask.destroy(true);

                        json_data = JSON.parse(response.responseText);
                        console.log('onClickFormDelete',json_data);

                        if (json_data.result=='ok') 
                        {
                            console.log('onClickFormDelete2');
                            _this.reloadGridStore();
                            _this.clearForm();

                            Ext.Msg.alert('Success','The selected application is deleted');
                        }
                    }
                );

            }
        });

    },

    onAfterRender: function()
    {
        var a_view = this.getView();
        console.log('MyApplicationController.onAfterRender',a_view);
    },

    onShow: function()
    {
        console.log('MyApplicationController.onShow');
    },

});