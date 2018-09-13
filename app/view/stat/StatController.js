/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('Testnet.view.stat.StatController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.ctlStat',

    control: 
    {
        '*': {
            onClickPeriod: 'onClickPeriod',
        }
    },


    updateView: function()
    {
        console.log('StatController.updateView');
    },

    updateChart: function(a_period)
    {
        var _this = this;

        var a_mask = Testnet.service.Helper.loadMask('');

        console.log('StatController.updateChart');

        Testnet.service.Helper.request('GET','apis/myapp/stat',{'period':a_period},
            function(status,response) 
            {
                console.log('updateDashboard',status,response);

                json_data = JSON.parse(response.responseText);

                _this.drawAPIChart('chart_stat_api',json_data.data.api_data);
                _this.drawAPIChart('chart_stat_error',json_data.data.api_error_data);

                a_mask.destroy(true);
            },
        );
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
    

    onClickPeriod: function(button)
    {
        console.log('StatController.onClickPeriod',button);
        this.updateChart(button.value);
    },

    onSeriesTooltipRender: function (tooltip, record, item) 
    {
        tooltip.setHtml(record.get('name') + ': ' + record.get('value'));
    },
    
});
