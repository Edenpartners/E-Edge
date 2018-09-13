Ext.define('Testnet.controller.TController', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			mainView:'#view_container',
			mainAppTitle: '#tle_main_app',
			mainAppCombo: '#cmb_main_app',
			mainCopyButton: '#btn_main_copy',
		}
	},

	clearView: function() 
	{
		console.log('EController.clearView');		
		var a_view = this.getMainView();
		a_view.removeAll();
	},

	updateView: function(url, title) 
	{
		console.log('TController.updateView');
		
		var a_view = this.getMainView();
		this.clearView();

		var a_panel = Ext.create(url, {
			autoShow: true,
			autoDestroy: true
		});

		a_view.add(a_panel);
		return a_panel;
	},

	movePage: function(url,params)
	{
		var a_view = this.updateView(url,'adsf');
		a_view.getController().updateView(params);
	},

	showPage: function(index,params)
	{
		var a_view = this.getMainView();
		a_view.setActiveTab(index);
		return a_view;
	},

	showSignupPage: function()
	{
		console.log('TController.showSignupPage');
		var a_view = this.getMainView();
		a_view.setActiveTab(5);
	},

	showNewAppPage: function()
	{
		console.log('TController.showNewAppPage');
		var a_url = 'Testnet.view.myapplication.MyApplication';
		var a_view = this.updateView(a_url,'');
		a_view.getController().updateView('cmd_newapp','');
	},

	doAfterSignup: function()
	{
		console.log('TController.doAfterSignup');
	},

	selectApplication: function(record) 
	{
		console.log('TController.selectApplication',record);
		Testnet.service.Global.selectedApp = record;
		this.updateMyApplicationTitle(record);
	},

	updateMyApplicationTitle:function(record)
	{
		console.log('TController.updateMyApplicationTitle');
		var a_component = this.getMainAppTitle();
		var a_combo = this.getMainAppCombo();
		a_combo.setValue(record.data.app_name);
		var a_html = '<h2>App ID : ' + record.data.myapp_id + '</h2>';
	},

});