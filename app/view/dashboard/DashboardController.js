/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('Testnet.view.dashboard.DashboardController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.ctlDashboard',

    control: 
    {
        '*': {
            onSelectApplication:'onSelectApplication',
        }
    },


    updateView: function()
    {
        console.log('DashboardController.updateView');
        //this.updateWidget();
        this.loadStores();
    },

    loadStores: function()
    {
        var _this = this;

        var a_mask = Testnet.service.Helper.loadMask('');

        var a_store_myapp = this.getViewModel().getStore('storeMyapp');
        var a_store_member = this.getViewModel().getStore('storeMember');

        a_store_myapp.load(
        {
            scope: this,
            callback: function(records,operation, success) 
            {
                console.log(records);
                a_store_member.load(
                {
                    callback: function(records,operation, success) 
                    {
                        console.log(records);
                        _this.updateDashboard(a_mask);
                        //a_mask.destroy(true);
                    }
                });
            }
        });
    },

    getNamespace: function()
    {
        var a_tx = this.getViewModel().getStore('storeMyapp');
        var a_unique = a_tx.collect('namespace')
        return a_unique;
    },

    drawAPIChart: function(target,data) 
    {
        var data_chart = [];
        for (var i=0;i<data.length;i++) 
        {
            //console.log(data[i]);
            data_chart.push([ data[i]['x'],data[i]['y'] ]);
        }
        var a_store = Ext.create('Ext.data.ArrayStore', {
            fields: [
                { name: 'name'},
                { name: 'value'}
            ],
            data: data_chart
        });

        this.lookupReference(target).setStore(a_store);

    },
    
    updateDashboard: function(a_mask)
    {
        var _this = this;

        console.log('DashboardController.updateDashboard');

        var a_store_myapp = this.getViewModel().getStore('storeMyapp');
        var a_store_member = this.getViewModel().getStore('storeMember');

        Testnet.service.Helper.request('GET','apis/myapp/stat',{},
            function(status,response) 
            {
                console.log('updateDashboard',status,response);

                json_data = JSON.parse(response.responseText);

                _this.lookupReference('wgt_appcount').updateWidget(a_store_myapp.getCount(),'App','envelope');
                _this.lookupReference('wgt_member_count').updateWidget(a_store_member.getCount(),'Member','envelope');
                _this.lookupReference('wgt_namespace').updateWidget(_this.getNamespace().length,'Namespace','envelope');
                _this.lookupReference('wgt_api_call').updateWidget(json_data.data.api_call,'API Calls','envelope');
                _this.lookupReference('wgt_api_error').updateWidget(json_data.data.api_error,'API Errors','envelope');

                _this.drawAPIChart('chart_api',json_data.data.api_data);
                _this.drawAPIChart('chart_error',json_data.data.api_error_data);

                a_mask.destroy(true);
            },
        );
    },




    onClickSignup: function()
    {
        console.log('MainController.onClickSignup');
        var a_controller = Testnet.app.getController('TController');
        a_controller.showSignupPage();
    },

    onClickLogout: function()
    {
        console.log('MainController.onClickLogout');
    },

    onClickLogin: function()
    {
        console.log('MainController.onClickLogin');
    },
    
    onItemSelected: function(grid, record, index, eOpts)
    {
        console.log('DashboardController.onItemSelected');
    },

    onSelectApplication: function(grid, rowIndex, colIndex)
    {
        var record = grid.getStore().getAt(rowIndex);

        var a_controller = Testnet.app.getController('TController');
        a_controller.selectApplication(record);
        a_controller.movePage('Testnet.view.myapplication.MyApplication',record);
    },

});
