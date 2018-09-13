Ext.define('Testnet.view.stat.ChartError',{
    extend: 'Ext.panel.Panel',
    //alias: 'chartNamespace',
    xtype: 'chartStatError',
    closable: false,
    title: '',

    bodyStyle:{
        'background':'none',
    },

    items: 
    [
        {
            xtype: 'cartesian',
            reference: 'chart_stat_error',
            flex:1,
            width: '100%',
            padding: '0 0 0 0',
            height: 350,
            captions: {
                title: {
                    text:'API Error',
                    align: 'left',
                    style: {
                        fontSize: '20px',
                        fontWeight: 'bold',
                        color: '#FFFFFF',
                    }
                }
            },
            titleStyle: {
                color: '#FFFFFF'
            },
            store: {},

            background: 'rgba(0,0,0,0)',

            bodyStyle:{
                'background':'none',
            },
/*
            interactions: {
                type: 'panzoom',
                zoomOnPanGesture: true
            },
*/
            axes: 
            [
                {
                    type: 'numeric',
                    position: 'left',
                    grid: {
                        opacity: 1,
                        // fill: '#ddd',
                        // stroke: 'grey',
                        lineWidth: 1
                    },
                    minimum: 0,
                    titleMargin: 20,
                    title: {
                        text: ''
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
                        color: '#FFFFFF'
                        //field: 'highF',
                        //display: 'insideEnd',
                        //renderer: 'onSeriesLabelRender'
                    }
                }, 
                {
                    type: 'category',
                    position: 'bottom',
                    // grid: true,
                    style: {
                        strokeStyle : '#ddd'
                    },
                    label: {
                        textBaseline: 'middle',
                        textAlign: 'center',
                        font: '14px Helvetica',
                        color: '#FFFFFF',
                        //field: 'highF',
                        //display: 'insideEnd',
                        //renderer: 'onSeriesLabelRender'
                    }
                }
            ],
            animation: Ext.isIE8 ? false : true,
            series: 
            {
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
                marker: {
                    radius: 4,
                    lineWidth: 2
                },
                highlight: {
                    strokeStyle: 'black',
                    fillStyle: 'gold'
                },
                label: {
                    //field: 'highF',
                    //display: 'insideEnd',
                    //renderer: 'onSeriesLabelRender'
                },
                tooltip: {
                    trackMouse: true,
                    showDelay: 0,
                    dismissDelay: 0,
                    hideDelay: 0,
                    renderer: 'onSeriesTooltipRender'
                }                
            },

        }
    ]
});