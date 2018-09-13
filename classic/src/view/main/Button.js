/**
 * This view is an example list of people.
 */
Ext.define('Testnet.view.main.Button', {
    extend: 'Ext.Button',
    xtype: 'createappbutton',

    // text: 'Create a New Application',
    iconCls  : 'x-fa fa-plus',
    cls: 'create-app-btn',
    reference: 'btn_main_newapp',
    handler: function() {
        console.log('Main.clickNewApp');
        this.fireEvent('onClickNewapp');
    },
    style: {
        position: 'absolute',
        top: '10px',
        width: '56px',
        height: '56px',
        borderRadius: '56px',
        zIndex: 11,
        backgroundColor: 'rgba(8, 242, 248, 0.6)'
    }
});
