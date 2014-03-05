﻿//Utility library for Wakanda Custom Login Template.var WakTmpl = (function() {	var wakTemplateObj = {}; //This is the object we will return to create our module.		wakTemplateObj.setMessage = function(text, displayTime, messageType) {		var displayTime = displayTime || 5000,			messageType = messageType || "normal",			messageContainer$ = $('#messageContainer'),			messageBoxContainer$ = $('#messageBoxContainer');			/**/		switch(messageType) {			case "normal" :			messageContainer$.css('background-color', '#dff0d8');			messageBoxContainer$.css('background-color', '#d6e9c6');			break;						case "attention" :			messageContainer$.css('background-color', '#d9edf7');			messageBoxContainer$.css('background-color', '#bce8f1');			break;						case "warn" :			messageContainer$.css('background-color', '#fcf8e3');			messageBoxContainer$.css('background-color', '#faebcc');			break;						case "error" :			messageContainer$.css('background-color', '#f2dede');			messageBoxContainer$.css('background-color', '#ebccd1');			break;						default:			messageContainer$.css('background-color', '#dff0d8');			messageBoxContainer$.css('background-color', '#d6e9c6');			break;		}						/*		switch(messageType) {			case "normal" :			$$('messageText').setTextColor('#4c4c4c'); 			break;			case "error":			$$('messageText').setTextColor('#cc0000'); 			break;			default:			$$('messageText').setTextColor('#4c4c4c'); 		}		*/						$$('messageText').setValue(text);		$('#messageContainer').fadeIn(700); //show		setTimeout(function() {$('#messageContainer').fadeOut(900);}, displayTime); //.hide	};		wakTemplateObj.init = function() {		$("#waf-body").on( "click", ".messageButton", function(event) {			$('#messageContainer').fadeOut(300);		});						$("#waf-body").on( "click", ".loginButton", function(event) {		    event.preventDefault();		    var buttonClicked = $(this).data('name'),		    	//buttonText = $( this ).data('text'); $$().setValue does not change this. So I can't use it.		    	buttonText = $(this).text();		    		    switch(buttonClicked) {				case "switch":				switch(buttonText) {					case "Sign Up":					$$('mainComponent').loadComponent({path: '/signUp.waComponent'});					$$('switchStateButton').setValue('Log In');					break;										case "Log In":					$$('mainComponent').loadComponent({path: '/login.waComponent'});					$$('switchStateButton').setValue('Sign Up');									break;										case "Log Out":					waf.directory.logout({						onSuccess: function(event) {							$$('mainComponent').loadComponent({path: '/signUp.waComponent'});							$$('switchStateButton').setValue('Log In');							$$('loginText').setValue("");							wakTemplateObj.setMessage("Your session has ended.", 5000,"normal");						}					});										break;									}				break;								case "signup":				waf.ds.User.addUser({					onSuccess: function(event) {						$$('mainComponent').loadComponent({path: '/app.waComponent'});						$$('switchStateButton').setValue('Log Out');					}				}, signUpObj);				break;								case "login":				waf.directory.loginByPassword(signInObj.email, signInObj.password, {					onSuccess: function(event) {						if (event.result) {							$$('mainComponent').loadComponent({path: '/app.waComponent'});							$$('switchStateButton').setValue('Log Out');							$$('loginText').setValue("Logged in as: " + waf.directory.currentUser().fullName);						} else {							wakTemplateObj.setMessage("We could not log you in.", 5000, "error");						}					}				});				break;			}		});			}; //wakTemplateObj.init			return wakTemplateObj;}()); //end - WakTmpl.