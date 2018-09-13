/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('Testnet.view.member.MemberController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.ctlMember',

    control: 
    {
        '*': {
            onClickFormClear: 'onClickFormClear',
            onClickFormUpdate: 'onClickFormUpdate',
            onClickFormDelete: 'onClickFormDelete',
            onDeleteMember: 'onDeleteMember',
        }
    },


    updateView: function()
    {
        console.log('MemberController.updateView');
    },

    clearView: function()
    {
        var a_form = this.lookupReference('form_member');
        a_form.reset();
    },

    updateMemberDetail: function(a_record)
    {
        console.log('MemberController.updateMemberDetail');

        this.lookupReference('cmb_member_role').setValue(a_record.data.member_role);
        this.lookupReference('txt_member_username').setValue(a_record.data.member_username);

    },

    reloadGridStore: function()
    {
        var a_grid = this.lookupReference('grid_member');
        a_grid.getStore().load();        
    },



    onClickFormUpdate: function()
    {
        console.log('MemberController.onClickFormUpdate');

        var _this = this;
        console.log('SettingController.onClickFormUpdate');
        var a_app = Testnet.service.Global.selectedApp;
        if (! a_app) {
            Ext.Msg.alert('Error','Please select an application first.');
            return;
        }

        var a_form = this.lookupReference('form_member').getForm();
        //console.log(a_form);

        if (a_form.isValid()) 
        {
            this.lookupReference('hid_setting_appname').setValue(a_app.data.app_name);

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
                        Ext.Msg.confirm('Success','The member is successfuly created.');
                        //_this.updateAppInfo(action.result.data);
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

    onClickFormClear: function()
    {
        console.log('MemberController.onClickFormClear');
        this.clearView();
    },
    
    onClickFormDelete: function()
    {
        var _this = this;

        console.log('MemberController.onClickFormDelete');

        var a_username = _this.lookupReference('txt_member_username').getValue();
        if (a_username.length==0) {
            Ext.Msg.alert('Error','Please select a member to delete');
            return;
        }

        Ext.Msg.confirm("Confirm", "Do you want to delete the selected user?", function(btnText)
        {
            //console.log('Confirm',btnText);
            if (btnText == 'yes') 
            {
                //var a_controller = Testnet.app.getController('TController');
                //a_controller.showNewAppPage();

                var a_mask = Testnet.service.Helper.loadMask('');


                Testnet.service.Helper.deleteUser(a_username,
                    function(status,response) 
                    {
                        //console.log('onClickFormDelete',status,response);
                        a_mask.destroy(true);

                        json_data = JSON.parse(response.responseText);
                        console.log('onClickFormDelete',json_data);

                        if (json_data.result=='ok') 
                        {
                            _this.reloadGridStore();
                            _this.clearView();
                            
                            Ext.Msg.alert('Success','The selected user is deleted');
                        }
                    }
                );

            }
        });

    },

    onItemSelected: function(grid, record, index, eOpts)
    {
        console.log('MemberController.onItemSelected',record);
        this.updateMemberDetail(record);
    },

    onDeleteMember: function(grid, index, eOpts)
    {
        console.log('MemberController.onDeleteMember',grid);
    },

});
