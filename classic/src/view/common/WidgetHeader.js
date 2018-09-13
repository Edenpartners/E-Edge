Ext.define('Testnet.view.common.HeaderBox', {
    extend: 'Ext.panel.Panel',
    xtype: 'widgetHeader',

	containerColor: '',

    height: 130,

    data: {
        amount: 0,
        type: '',
        icon: ''
    },

    tpl: '<div class="info-card-item">' + 
    '<h2>{amount}</h2>' + 
    '<div>{type}</div>' + 
    '</div>',

    initComponent: function()
    {
        var me = this;

        Ext.apply(me, {
            cls: me.config.containerColor
        });

        me.callParent(arguments);
    },

    updateWidget: function(value,msg,icon_name)
    {
        //console.log('WidgetBox.update');
        this.update({
            amount: value,
            type: msg,
            icon: icon_name
        });
    }
});
