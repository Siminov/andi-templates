/** 
 * [SIMINOV FRAMEWORK]
 * Copyright [2015] [Siminov Software Solution LLP|support@siminov.com]
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/

if(window['document'] == undefined) {
    var INotificationEvents = require('../../Siminov/Events/INotificationEvents');
    var Function = require('../../Siminov/Function/Function');
    
    module.exports = NotificationEventHandler;    
}


function NotificationEventHandler() {
	
	this.onRegistration = function(registration) {
		//alert("onRegistration");
	}

	this.onUnregistration = function(registration) {
		//alert("onUnregistration");
	}

	this.onNotification = function(message) {
		//alert("onNotification");
	}
	
	this.onError = function(notificationException) {
		//alert("onError");
	}
}


Function.implement(INotificationEvents, NotificationEventHandler);