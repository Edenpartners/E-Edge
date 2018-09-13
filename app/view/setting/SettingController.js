/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('Testnet.view.setting.SettingController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.ctlSetting',

    control: 
    {
        '*': {
            onClickFormUpdate: 'onClickFormUpdate',
            onClickFormClear: 'onClickFormClear',
        }
    },

    updateView: function()
    {
        console.log('SettingController.updateView');
        this.updateDetail();
    },

    clearView: function()
    {
        var a_form = this.lookupReference('form_setting');
        a_form.reset();
    },

    updateDetailFields: function(a_record)
    {
        if (! a_record) {
            return;
        }

        this.lookupReference('cmb_setting_server').setValue(a_record.server_region);
        this.lookupReference('rdo_setting_active').setValue(a_record.is_active);

        this.lookupReference('txt_setting_api_traffic').setValue(a_record.traffic_per_day);
        this.lookupReference('txt_setting_api_calls').setValue(a_record.api_call_per_day);
        this.lookupReference('txt_setting_nodes_min').setValue(a_record.nodes_min);
        this.lookupReference('txt_setting_nodes_max').setValue(a_record.nodes_max);
        this.lookupReference('sdr_setting_cpu').setValue(a_record.threshold_cpu);
        this.lookupReference('sdr_setting_memory').setValue(a_record.threshold_memory);
    },

    updateDetail: function()
    {
        var _this = this;

        this.clearView();

        var a_app_record = Testnet.service.Global.selectedApp;
        console.log('SettingController.updateDetail',a_app_record);
        
        if (! a_app_record) {
            return;    
        }

        Testnet.service.Helper.request('GET','apis/myapp/setting',{'app_name':a_app_record.data.app_name},
            function(status,response) 
            {
                //console.log('updateDetail',status,response);

                json_data = JSON.parse(response.responseText);
                console.log('updateDetail2',json_data.data[0]);
                _this.updateDetailFields(json_data.data[0]);
            },
        );

    },

    searchData: function(app_name)
    {
        var a_store = this.getViewModel().getStore('storeSetting');

        console.log('searchData : count=',a_store.getCount());

        var a_record = a_store.findRecord('app_name',app_name);
        if (a_record) {
            console.log('searchData',app_name,a_record);
            return a_record;
        }
        return null;
    },

    findData: function()
    {
        var store_tx = this.getViewModel().getStore('storeTransaction');

        store_tx.load(
        {
            scope: this,
            params: { 'tx_id': value },
            callback: function(records,operation, success) 
            {
                console.log(records);
                var msg = 'About ' +records.length.toString() + ' results';
                _this.lookupReference('lbl_search_result').setFieldLabel(msg);
            }
        });
    },




    onClickFormUpdate: function()
    {
        var _this = this;
        console.log('SettingController.onClickFormUpdate');
        var a_app = Testnet.service.Global.selectedApp;
        if (! a_app) {
            Ext.Msg.alert('Error','Please select an application first.');
            return;
        }

        var a_form = this.lookupReference('form_setting').getForm();
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
                        Ext.Msg.confirm('Success','Your Application setting is successfuly updated.');
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
        console.log('SettingController.onClickFormClear');
    },

    
    onItemSelected: function(grid, record, index, eOpts)
    {
        console.log('SettingController.onItemSelected');
    },

});
