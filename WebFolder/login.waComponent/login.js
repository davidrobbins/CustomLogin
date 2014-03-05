﻿
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'login';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var loginButton = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	loginButton.click = function loginButton_click (event)// @startlock
	{// @endlock
		waf.directory.loginByPassword(signInObj.email, signInObj.password, {
			onSuccess: function(event) {
				$$('mainComponent').loadComponent({path: '/app.waComponent'});
				$$('switchStateButton').setValue('Sign Out');
			}
		});
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_loginButton", "click", loginButton.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
