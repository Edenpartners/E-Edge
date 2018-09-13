Ext.define('Testnet.view.dashboard.ChartError',{
	extend: 'Ext.panel.Panel',
	//alias: 'chartNamespace',
	xtype: 'chartError',
	closable: false,

	title: 'API Error',
    titleAlign: 'left',
    ui: 'light',

	items: 
    [
		{
            xtype: 'cartesian',
            reference: 'chart_error',
            flex:1,
            width: '100%',
            padding: '20 0 0 0',
            height: 300,
            captions: {
                title: {
                    //text:'API Limit',
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
                    // fill: '#ddd',
                    // stroke: 'grey',
                    lineWidth: 1
                },
                listeners: {
                    //rangechange: 'onAxisRangeChange'
                },
                style: {
                    strokeStyle : '#ddd'
                },
                label: {
                    textBaseline: 'middle',
                    textAlign: 'center',
                    font: '14px Helvetica',
                    color: '#FFFFFF',
                }
            }, {
                type: 'category',
                position: 'bottom',
                style: {
                    strokeStyle : '#ddd',
                    color: '#fff'
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
                
                style: {
                    minGapWidth: 20,
                    stroke: '#FFFFFF'
                },

                subStyle: {
                    fill: ['rgba(0, 105, 155, 0.41)']
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