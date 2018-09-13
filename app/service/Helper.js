Ext.define('Testnet.service.Helper', 
{
	singleton: true,

	safeLog: function(msg) 
	{
		console.log(msg);
	},
	
	request: function(a_method,a_url,a_parameter,callback) 
	{
        Ext.Ajax.request({
            url: Testnet.service.Const.BASE_URL+a_url,
            method: a_method,
            timeout: 60000,
            params: a_parameter,

            success: function(response) 
            {
                console.log('Helper.request - success',response);
                callback('ok',response);
            },
            failure: function(response) 
            {
                console.log('Helper.request - failure',response);
                callback('error',response);
            }
        });		
	},
	
    deleteUser: function(user_name,callback)
    {
        this.request('POST','apis/myapp/member/delete',{'user_name':user_name},callback);
    },

    deleteApplication: function(app_name,callback)
    {
        this.request('POST','apis/myapp/delete',{'app_name':app_name},callback);
    },

    loadMask: function(msg)
    {
        if (msg.length==0) {
            msg = 'Loading, please stand by...';
        }
        var mask = Ext.getBody().mask(msg);
        return mask;
    }
});