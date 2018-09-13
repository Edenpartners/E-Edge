Ext.define('Testnet.view.dashboard.ChartApi',{
	extend: 'Ext.panel.Panel',
	//alias: 'chartNamespace',
	xtype: 'chartApi',
	closable: false,
	title: 'API Stat',
    titleAlign: 'left',
    ui: 'light',
    // iconCls:'x-fa fa-lightbulb-o',

	items: 
    [
		{
            xtype: 'cartesian',
            reference: 'chart_api',
            flex:1,
            width: '100%',
            padding: '20 0 0 0',
            height: 300,
            captions: {
                title: {
                    //text: 'Stat Data',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    align: 'center'
                }
            },
            store: {},

            background: 'rgba(0,0,0,1)',
      
            axes: [{
                type: 'numeric',
                position: 'left',
                minimum: 0,
                titleMargin: 20,
                title: {
                    text: ''
                },
                grid: {
                    opacity: 1,
                    lineWidth: 1
                },
                listeners: {},
                style: {
                    strokeStyle : '#ddd'
                },
                label: {
                    textBaseline: 'middle',
                    textAlign: 'center',
                    font: '14px Helvetica',
                    color: '#FFFFFF'
                }
            }, {
                type: 'category',
                position: 'bottom',
                style: {
                    strokeStyle : '#ddd'
                },
                label: {
                    textBaseline: 'middle',
                    textAlign: 'center',
                    font: '14px Helvetica',
                    color: '#FFFFFF',
                }
            }],
            animation: Ext.isIE8 ? false : true,
            series: {
                type: 'area',
                xField: 'name',
                yField: 'value',

                subStyle: {
                    fill: ['rgba(0, 105, 155, 0.41)']
                },
                
                style: {
                    minGapWidth: 20,
                    stroke: '#FFFFFF'
                },
                highlight: {
                    strokeStyle: 'black',
                    fillStyle: 'gold'
                },
                label: {}
            },

		}
	]
});