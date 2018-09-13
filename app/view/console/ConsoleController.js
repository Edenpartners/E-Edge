/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('Testnet.view.console.ConsoleController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.ctlConsole',

    control: 
    {
        '*': {
            onClickFormExecute: 'onClickFormExecute',
            onClickFormClear: 'onClickFormClear',
        }
    },

    updateView: function()
    {
        console.log('ConsoleController.updateView');
    },

    executeAPI: function(server,a_method,a_url,a_parameter)
    {
        var _this = this;

        console.log('ConsoleController.executeAPI',a_url);

        var a_mask = Testnet.service.Helper.loadMask('');

        Ext.Ajax.request({
            url: Testnet.service.Const.BASE_URL+a_url,
            method: a_method,
            timeout: 60000,
            success: function(response) 
            {
                console.log('ConsoleController.executeAPI',response);
                _this.updateAPIResult(response);

                a_mask.destroy(true);
            },
            failure: function(response) 
            {
                _this.updateAPIResult(response);                
                a_mask.destroy(true);
            }
        });

    },

    updateAPIResult: function(response)
    {
        this.lookupReference('txt_console_status').setValue(response.status);
        this.lookupReference('txt_console_status_text').setValue(response.statusText);
        
        var jsonPretty = JSON.stringify(JSON.parse(response.responseText),null,2); 
        this.lookupReference('area_console_response').setValue(jsonPretty);
    },


    onApplicationFieldChange: function()
    {

    },

    onClickFormExecute: function()
    {
        console.log('ConsoleController.onClickFormExecute');
        var a_server = this.lookupReference('cmb_console_server').getValue();
        var a_method = this.lookupReference('cmb_console_method').getValue();
        var a_url = this.lookupReference('txt_console_url').getValue();
        var a_parameter = this.lookupReference('txt_console_parameter').getValue();
        this.executeAPI(a_server,a_method,a_url,a_parameter);
    },

    onClickFormClear: function()
    {
        console.log('ConsoleController.onClickFormClear');

        var a_form = this.lookupReference('form_console');
        a_form.reset();

        var a_form = this.lookupReference('form_response');
        a_form.reset();

    },
    

});
