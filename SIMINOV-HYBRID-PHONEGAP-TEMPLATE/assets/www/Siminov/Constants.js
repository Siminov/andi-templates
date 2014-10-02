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



/**
	It contain all contain variables requried by Siminov Framework.
	
	@class Constants
	@constructor
	
*/
function Constants() {

}

//    ApplicationDescriptor.si.xml Constants.


/**
	Application Descriptor Name	
	
	@property APPLICATION_DESCRIPTOR_NAME
	@type String
	@static
	@final
	@readOnly
*/
Constants.APPLICATION_DESCRIPTOR_NAME = "name";

/**
	Application Descriptor Description

	@property APPLICATION_DESCRIPTOR_DESCRIPTION
	@type String
	@static
	@final
	@readOnly
*/
Constants.APPLICATION_DESCRIPTOR_DESCRIPTION = "description";

/**
	Application Descriptor Version

	@property APPLICATION_DESCRIPTOR_VERSION
	@type String
	@static
	@final
	@readOnly
*/
Constants.APPLICATION_DESCRIPTOR_VERSION = "version";


//   DatabaseDescriptor.si.xml Constants.



/**
	Database Descriptor Database Name

	@property DATABASE_DESCRIPTOR_DATABASE_NAME
	@type String
	@static
	@final
	@readOnly
*/
Constants.DATABASE_DESCRIPTOR_DATABASE_NAME = "database_name";

/**
	Database Descriptor Description

	@property DATABASE_DESCRIPTOR_DESCRIPTION
	@type String
	@static
	@final
	@readOnly
*/
Constants.DATABASE_DESCRIPTOR_DESCRIPTION = "description";

/**
	Database Descriptor Type

	@property DATABASE_DESCRIPTOR_TYPE
	@type String
	@static
	@final
	@readOnly
*/
Constants.DATABASE_DESCRIPTOR_TYPE = "type";

/**
	Database Descriptor Is Locking Required

	@property DATABASE_DESCRIPTOR_IS_LOCKING_REQUIRED
	@type String
	@static
	@final
	@readOnly
*/
Constants.DATABASE_DESCRIPTOR_TRANSACTION_SAFE = "is_locking_required";

/**
	Database Descriptor External Storage

	@property DATABASE_DESCRIPTOR_EXTERNAL_STORAGE
	@type String
	@static
	@final
	@readOnly
*/
Constants.DATABASE_DESCRIPTOR_EXTERNAL_STORAGE = "external_storage";


//   LibraryDescriptor.si.xml Constants.



/**
	Library Descriptor Name

	@property LIBRARY_DESCRIPTOR_NAME
	@type String
	@static
	@final
	@readOnly
*/
Constants.LIBRARY_DESCRIPTOR_NAME = "name";

/**
	Library Descriptor Description

	@property LIBRARY_DESCRIPTOR_DESCRIPTION
	@type String
	@static
	@final
	@readOnly
*/
Constants.LIBRARY_DESCRIPTOR_DESCRIPTION = "description";


//    DatabaseMappingDescriptor.si.xml Constants.



/**
	Database Mapping Descriptor Parimary Key

	@property DATABASE_MAPPING_DESCRIPTOR_PRIMARY_KEY
	@type String
	@static
	@final
	@readOnly
*/
Constants.DATABASE_MAPPING_DESCRIPTOR_PRIMARY_KEY = "primary_key";

/**
	Database Mapping Descriptor Unique

	@property DATABASE_MAPPING_DESCRIPTOR_UNIQUE
	@type String
	@static
	@final
	@readOnly
*/
Constants.DATABASE_MAPPING_DESCRIPTOR_UNIQUE = "unique";

/**
	Database Mapping Descriptor Not Null

	@property DATABASE_MAPPING_DESCRIPTOR_NOT_NULL
	@type String
	@static
	@final
	@readOnly
*/
Constants.DATABASE_MAPPING_DESCRIPTOR_NOT_NULL = "not_null";

/**
	Database Mapping Descriptor Default Value

	@property DATABASE_MAPPING_DESCRIPTOR_DEFAULT_VALUE
	@type String
	@static
	@final
	@readOnly
*/
Constants.DATABASE_MAPPING_DESCRIPTOR_DEFAULT_VALUE = "default";

/**
	Database Mapping Descriptor Check

	@property DATABASE_MAPPING_DESCRIPTOR_CHECK
	@type String
	@static
	@final
	@readOnly
*/
Constants.DATABASE_MAPPING_DESCRIPTOR_CHECK = "check";

/**
	Database Mapping Descriptor Type

	@property DATABASE_MAPPING_DESCRIPTOR_TYPE
	@type String
	@static
	@final
	@readOnly
*/
Constants.DATABASE_MAPPING_DESCRIPTOR_TYPE = "type";


/**
	Database Mapping Descriptor Relationships Load

	@property DATABASE_MAPPING_DESCRIPTOR_RELATIONSHIPS_LOAD
	@type String
	@static
	@final
	@readOnly
*/
Constants.DATABASE_MAPPING_DESCRIPTOR_RELATIONSHIPS_LOAD = "load";


//    HybridDescriptor.si.xml Constants.



/**
	Hybrid Descriptor Adapter Name

	@property HYBRID_DESCRIPTOR_ADAPTER_NAME
	@type String
	@static
	@final
	@readOnly
*/
Constants.ADAPTER_DESCRIPTOR_NAME = "name";

/**
	Hybrid Descriptor Adapter Description

	@property HYBRID_DESCRIPTOR_ADAPTER_DESCRIPTION
	@type String
	@static
	@final
	@readOnly
*/
Constants.ADAPTER_DESCRIPTOR_DESCRIPTION = "description";

/**
	Hybrid Descriptor Adapter Type

	@property HYBRID_DESCRIPTOR_ADAPTER_TYPE
	@type String
	@static
	@final
	@readOnly
*/
Constants.ADAPTER_DESCRIPTOR_TYPE = "type";

/**
	Hybrid Descriptor Adapter Map To

	@property HYBRID_DESCRIPTOR_ADAPTER_MAP_TO
	@type String
	@static
	@final
	@readOnly
*/
Constants.ADAPTER_DESCRIPTOR_MAP_TO = "map_to";

/**
	Hybrid Descriptor Adapter Cache

	@property HYBRID_DESCRIPTOR_ADAPTER_CACHE
	@type String
	@static
	@final
	@readOnly
*/
Constants.ADAPTER_DESCRIPTOR_CACHE = "cache";



/**
	Hybrid Descriptor Adapter Handler Name

	@property HYBRID_DESCRIPTOR_ADAPTER_HANDLER_NAME
	@type String
	@static
	@final
	@readOnly
*/
Constants.ADAPTER_DESCRIPTOR_HANDLER_NAME = "name";

/**
	Hybrid Descriptor Adapter Handler Map To

	@property HYBRID_DESCRIPTOR_ADAPTER_HANDLER_MAP_TO
	@type String
	@static
	@final
	@readOnly
*/
Constants.ADAPTER_DESCRIPTOR_HANDLER_MAP_TO = "map_to";

/**
	Hybrid Descriptor Adapter Handler Description

	@property HYBRID_DESCRIPTOR_ADAPTER_HANDLER_DESCRIPTION
	@type String
	@static
	@final
	@readOnly
*/
Constants.ADAPTER_DESCRIPTOR_HANDLER_DESCRIPTION = "description";


/**
	Hybrid Descriptor Adapter Parameter Type

	@property HYBRID_DESCRIPTOR_ADAPTER_PARAMETER_TYPE
	@type String
	@static
	@final
	@readOnly
*/
Constants.ADAPTER_DESCRIPTOR_PARAMETER_TYPE = "type";

/**
	Hybrid Descriptor Adapter Parameter Description

	@property HYBRID_DESCRIPTOR_ADAPTER_PARAMETER_DESCRIPTION
	@type String
	@static
	@final
	@readOnly
*/
Constants.ADAPTER_DESCRIPTOR_PARAMETER_DESCRIPTION = "description";


/**
	Hybrid Descriptor Adapter Return Type

	@property HYBRID_DESCRIPTOR_ADAPTER_RETURN_TYPE
	@type String
	@static
	@final
	@readOnly
*/
Constants.ADAPTER_DESCRIPTOR_RETURN_TYPE = "type";

/**
	Hybrid Descriptor Adapter Return Description

	@property HYBRID_DESCRIPTOR_ADAPTER_RETURN_DESCRIPTION
	@type String
	@static
	@final
	@readOnly
*/
Constants.ADAPTER_DESCRIPTOR_RETURN_DESCRIPTION = "description";


//	ServiceDescriptor.si.xml

Constants.SERVICE_DESCRIPTOR_NAME = "name";

Constants.SERVICE_DESCRIPTOR_DESCRIPTION = "description";

Constants.SERVICE_DESCRIPTOR_PROTOCOL = "protocol";

Constants.SERVICE_DESCRIPTOR_INSTANCE = "instance";

Constants.SERVICE_DESCRIPTOR_PORT = "port";

Constants.SERVICE_DESCRIPTOR_CONTEXT = "context";


Constants.SERVICE_DESCRIPTOR_API_NAME = "name";

Constants.SERVICE_DESCRIPTOR_API_TYPE = "type";

Constants.SERVICE_DESCRIPTOR_API_API = "api";

Constants.SERVICE_DESCRIPTOR_API_MODE = "mode";

Constants.SERVICE_DESCRIPTOR_API_DATA_STREAM = "data-stream";


//Sync Descriptor.si.xml
Constants.SYNC_DESCRIPTOR_NAME = "name";

Constants.SYNC_DESCRIPTOR_REFRESH_INTERVAL = "interval";



//    Siminov Event Handler



/**
	Event Handler Triggered Event

	@property EVENT_HANDLER_TRIGGERED_EVENT
	@type String
	@static
	@final
	@readOnly
*/
Constants.EVENT_HANDLER_TRIGGERED_EVENT = "TriggeredEvent";


/**
	Event Handler ISiminov Event First Time Siminov Initialized

	@property EVENT_HANDLER_ISIMINOV_EVENT_FIRST_TIME_SIMINOV_INITIALIZED
	@type String
	@static
	@final
	@readOnly
*/
Constants.EVENT_HANDLER_ISIMINOV_EVENT_ON_FIRST_TIME_SIMINOV_INITIALIZED = "onFirstTimeSiminovInitialized";

/**
	Event Handler ISiminov Event Siminov Initialized

	@property EVENT_HANDLER_ISIMINOV_EVENT_SIMINOV_INITIALIZED
	@type String
	@static
	@final
	@readOnly
*/
Constants.EVENT_HANDLER_ISIMINOV_EVENT_ON_SIMINOV_INITIALIZED = "onSiminovInitialized";

/**
	Event Handler ISiminov Event Siminov Stopped

	@property EVENT_HANDLER_ISIMINOV_EVENT_SIMINOV_STOPPED
	@type String
	@static
	@final
	@readOnly
*/
Constants.EVENT_HANDLER_ISIMINOV_EVENT_ON_SIMINOV_STOPPED = "onSiminovStopped";


/**
	Event Handler IDatabase Event Database Created

	@property EVENT_HANDLER_IDATABASE_EVENT_DATABASE_CREATED
	@type String
	@static
	@final
	@readOnly
*/
Constants.EVENT_HANDLER_IDATABASE_EVENT_ON_DATABASE_CREATED = "onDatabaseCreated";

/**
	Event Handler IDatabase Event Database Dropped

	@property EVENT_HANDLER_IDATABASE_EVENT_DATABASE_DROPPED
	@type String
	@static
	@final
	@readOnly
*/
Constants.EVENT_HANDLER_IDATABASE_EVENT_ON_DATABASE_DROPPED = "onDatabaseDropped";

/**
	Event Handler IDatabase Event Table Created

	@property EVENT_HANDLER_IDATABASE_EVENT_TABLE_CREATED
	@type String
	@static
	@final
	@readOnly
*/
Constants.EVENT_HANDLER_IDATABASE_EVENT_ON_TABLE_CREATED = "onTableCreated";

/**
	Event Handler IDatabase Event Table Dropped

	@property EVENT_HANDLER_IDATABASE_EVENT_TABLE_DROPPED
	@type String
	@static
	@final
	@readOnly
*/
Constants.EVENT_HANDLER_IDATABASE_EVENT_ON_TABLE_DROPPED = "onTableDropped";

/**
	Event Handler IDatabase Event Index Created

	@property EVENT_HANDLER_IDATABASE_EVENT_INDEX_CREATED
	@type String
	@static
	@final
	@readOnly
*/
Constants.EVENT_HANDLER_IDATABASE_EVENT_ON_INDEX_CREATED = "onIndexCreated";

/**
	Event Handler IDatabase Event Index Dropped

	@property EVENT_HANDLER_IDATABASE_EVENT_INDEX_DROPPED
	@type String
	@static
	@final
	@readOnly
*/
Constants.EVENT_HANDLER_IDATABASE_EVENT_ON_INDEX_DROPPED = "onIndexDropped";


Constants.EVENT_HANDLER_INOTIFICATION_EVENT_ON_REGISTRATION = "onRegistration";

Constants.EVENT_HANDLER_INOTIFICATION_EVENT_ON_UNREGISTRATION = "onUnregistration";

Constants.EVENT_HANDLER_INOTIFICATION_EVENT_ON_NOTIFICATION = "onNotification";

Constants.EVENT_HANDLER_INOTIFICATION_EVENT_ON_ERROR = "onError";


Constants.EVENT_HANDLER_ISYNC_EVENT_ON_SYNC_STARTED = "onSyncStarted";

Constants.EVENT_HANDLER_ISYNC_EVENT_ON_SYNC_QUEUED = "onSyncQueued";

Constants.EVENT_HANDLER_ISYNC_EVENT_ON_SYNC_REMOVED = "onSyncRemoved";

Constants.EVENT_HANDLER_ISYNC_EVENT_ON_SYNC_TERMINATED = "onSyncTerminated";


/**
	Event Handler Events

	@property EVENT_HANDLER_EVENTS
	@type String
	@static
	@final
	@readOnly
*/
Constants.EVENT_HANDLER_EVENTS = "Events";

/**
	Event Handler Event Parameters

	@property EVENT_HANDLER_EVENT_PARAMETERS
	@type String
	@static
	@final
	@readOnly
*/
Constants.EVENT_HANDLER_EVENT_PARAMETERS = "EventParameters";



//    Siminov Resources Adapter



/**
	Siminov Resources Adapter

	@property SIMINOV_RESOURCES_ADAPTER
	@type String
	@static
	@final
	@readOnly
*/
Constants.RESOURCE_ADAPTER = "RESOURCES";

Constants.RESOURCE_GET_APPLICATION_DESCRIPTOR_HANDLER = "GET-APPLICATION-DESCRIPTOR";

Constants.RESOURCE_GET_DATABASE_DESCRIPTOR_BASED_ON_NAME_HANDLER = "GET-DATABASE-DESCRIPTOR";

Constants.RESOURCE_GET_DATABASE_MAPPING_DESCRIPTOR_BASED_ON_CLASS_NAME_HANDLER = "GET-DATABASE-MAPPING-DESCRIPTOR-BASED-ON-CLASS-NAME";

Constants.RESOURCE_GET_DATABASE_MAPPING_DESCRIPTOR_BASED_ON_TABLE_NAME_HANDLER = "GET-DATABASE-MAPPING-DESCRIPTOR-BASED-ON-TABLE-NAME";



//    Siminov Database Adapter



/**
	Siminov Database Adapter

	@property SIMINOV_DATABASE_ADAPTER
	@type String
	@static
	@final
	@readOnly
*/
Constants.DATABASE_ADAPTER = "DATABASE";


/**
	Siminov Database Save Handler

	@property SIMINOV_DATABASE_SAVE_HANDLER
	@type String
	@static
	@final
	@readOnly
*/
Constants.DATABASE_SAVE_HANDLER = "SAVE";

/**
	Siminov Database Update Handler

	@property SIMINOV_DATABASE_UPDATE_HANDLER
	@type String
	@static
	@final
	@readOnly
*/
Constants.DATABASE_UPDATE_HANDLER = "UPDATE";

/**
	Siminov Database Save Or Update Handler

	@property SIMINOV_DATABASE_SAVE_OR_UPDATE_HANDLER
	@type String
	@static
	@final
	@readOnly
*/
Constants.DATABASE_SAVE_OR_UPDATE_HANDLER = "SAVE-OR-UPDATE";

/**
	Siminov Database Delete Handler

	@property SIMINOV_DATABASE_DELETE_HANDLER
	@type String
	@static
	@final
	@readOnly
*/
Constants.DATABASE_DELETE_HANDLER = "DELETE";

/**
	Siminov Database Select Handler
	
	@property SIMINOV_DATABASE_SELECT_HANDLER
	@type String
	@static
	@final
	@readOnly
*/
Constants.DATABASE_SELECT_HANDLER = "SELECT";


/**
	Siminov Database Select Handler
	
	@property SIMINOV_DATABASE_SELECT_MANUAL_HANDLER
	@type String
	@static
	@final
	@readOnly
*/
Constants.DATABASE_SELECT_MANUAL_HANDLER = "SELECT-MANUAL";


/**	
	Siminov Database Count Handler

	@property SIMINOV_DATABASE_COUNT_HANDLER
	@type String
	@static
	@final
	@readOnly
*/
Constants.DATABASE_COUNT_HANDLER = "COUNT";

/**
	Siminov Database Average Handler

	@property SIMINOV_DATABASE_AVERAGE_HANDLER
	@type String
	@static
	@final
	@readOnly
*/
Constants.DATABASE_AVERAGE_HANDLER = "AVG";

/**	
	Siminov Database Max Handler

	@property SIMINOV_DATABASE_MAX_HANDLER
	@type String
	@static
	@final
	@readOnly
*/
Constants.DATABASE_MAX_HANDLER = "MAX";

/**
	Siminov Database Min Handler

	@property SIMINOV_DATABASE_MIN_HANDLER
	@type String
	@static
	@final
	@readOnly
*/
Constants.DATABASE_MIN_HANDLER = "MIN";

/**
	Siminov Database Sum Handler

	@property SIMINOV_DATABASE_SUM_HANDLER
	@type String
	@static
	@final
	@readOnly
*/
Constants.DATABASE_SUM_HANDLER = "SUM";

/**
	Siminov Database Total Handler

	@property SIMINOV_DATABASE_TOTAL_HANDLER
	@type String
	@static
	@final
	@readOnly
*/
Constants.DATABASE_TOTAL_HANDLER = "TOTAL";

/**
	Siminov Database Group Concat Handler

	@property SIMINOV_DATABASE_GROUP_CONCAT_HANDLER
	@type String
	@static
	@final
	@readOnly
*/
Constants.DATABASE_GROUP_CONCAT_HANDLER = "GROUP-CONCAT";


/**
	Siminov Database Get Table Name Handler

	@property SIMINOV_DATABASE_GET_TABLE_NAME_HANDLER
	@type String
	@static
	@final
	@readOnly
*/
Constants.DATABASE_GET_TABLE_NAME_HANDLER = "GET-TABLE-NAME";

/**
	Siminov Database Get Column Names Handler

	@property SIMINOV_DATABASE_GET_COLUMN_NAMES_HANDLER
	@type String
	@static
	@final
	@readOnly
*/
Constants.DATABASE_GET_COLUMN_NAMES_HANDLER = "GET-COLUMN-NAMES";

/**
	Siminov Database Get Column Types Handler

	@property SIMINOV_DATABASE_GET_COLUMN_TYPES_HANDLER
	@type String
	@static
	@final
	@readOnly
*/
Constants.DATABASE_GET_COLUMN_TYPES_HANDLER = "GET-COLUMN-TYPES";

/**
	Siminov Database Get Primary Keys Handler

	@property SIMINOV_DATABASE_GET_PRIMARY_KEYS_HANDLER
	@type String
	@static
	@final
	@readOnly
*/
Constants.DATABASE_GET_PRIMARY_KEYS_HANDLER = "GET-PRIMARY-KEYS";

/**
	Siminov Database Get Mandatory Fields Handler

	@property SIMINOV_DATABASE_GET_MANDATORY_FIELDS_HANDLER
	@type String
	@static
	@final
	@readOnly
*/
Constants.DATABASE_GET_MANDATORY_FIELDS_HANDLER = "GET-MANDATORY-FIELDS";

/**
	Siminov Database Get Unique Fields Handler

	@property SIMINOV_DATABASE_GET_UNIQUE_FIELDS_HANDLER
	@type String
	@static
	@final
	@readOnly
*/
Constants.DATABASE_GET_UNIQUE_FIELDS_HANDLER = "GET-UNIQUE-FIELDS";

/**
	Siminov Database Get Foreign Keys Handler

	@property SIMINOV_DATABASE_GET_FOREIGN_KEYS_HANDLER
	@type String
	@static
	@final
	@readOnly
*/
Constants.DATABASE_GET_FOREIGN_KEYS_HANDLER = "GET-FOREIGN-KEYS";



/**
	Siminov Database Begin Transaction Handler

	@property SIMINOV_DATABASE_BEGIN_TRANSACTION_HANDLER
	@type String
	@static
	@final
	@readOnly
*/
Constants.DATABASE_BEGIN_TRANSACTION_HANDLER = "BEGIN-TRANSACTION";

/**
	Siminov Database Commit Transaction Handler

	@property SIMINOV_DATABASE_COMMIT_TRANSACTION_HANDLER
	@type String
	@static
	@final
	@readOnly
*/
Constants.DATABASE_COMMIT_TRANSACTION_HANDLER = "COMMIT-TRANSACTION";

/**
	Siminov Database End Transaction Handler

	@property SIMINOV_DATABASE_END_TRANSACTION_HANDLER
	@type String
	@static
	@final
	@readOnly
*/
Constants.DATABASE_END_TRANSACTION_HANDLER = "END-TRANSACTION";


//	Siminov Adapter



/**
	Siminov Adapter

	@property SIMINOV_ADAPTER
	@type String
	@static
	@final
	@readOnly
*/
Constants.SIMINOV_ADAPTER = "SIMINOV";


/**
	Siminov Adapter Initialize Siminov Handler

	@property SIMINOV_ADAPTER_INITIALIZE_SIMINOV_HANDLER
	@type String
	@static
	@final
	@readOnly
*/
Constants.SIMINOV_ADAPTER_INITIALIZE_SIMINOV_HANDLER = "INITIALIZE-SIMINOV";


/**
	Siminov Adapter Shutdown Siminov Handler

	@property SIMINOV_ADAPTER_SHUTDOWN_SIMINOV_HANDLER
	@type String
	@static
	@final
	@readOnly
*/
Constants.SIMINOV_ADAPTER_SHUTDOWN_SIMINOV_HANDLER = "SHUTDOWN-SIMINOV";


//    JSON Builder



/**
	Siminov Hybrid Data

	@property SIMINOV_HYBRID_DATA
	@type String
	@static
	@final
	@readOnly
*/
Constants.SIMINOV_HYBRID_DATA = "siminov-hybrid-data";

/**
	Siminov Hybrid Data Data

	@property SIMINOV_HYBRID_DATA_DATA
	@type String
	@static
	@final
	@readOnly
*/
Constants.SIMINOV_HYBRID_DATA_DATA = "data";

/**
	Siminov Hybrid Data Data Type

	@property SIMINOV_HYBRID_DATA_DATA_TYPE
	@type String
	@static
	@final
	@readOnly
*/
Constants.SIMINOV_HYBRID_DATA_DATA_TYPE = "-type";

/**
	Siminov Hybrid Data Data Text

	@property SIMINOV_HYBRID_DATA_DATA_TEXT
	@type String
	@static
	@final
	@readOnly
*/
Constants.SIMINOV_HYBRID_DATA_DATA_TEXT = "#text";

/**
	Siminov Hybrid Data Value

	@property SIMINOV_HYBRID_DATA_VALUE
	@type String
	@static
	@final
	@readOnly
*/
Constants.SIMINOV_HYBRID_DATA_VALUE = "value";

/**
	Siminov Hyrbid Data Text

	@property SIMINOV_HYBRID_DATA_TEXT
	@type String
	@static
	@final
	@readOnly
*/
Constants.SIMINOV_HYBRID_DATA_TEXT = "#text";



// Siminov Service 

Constants.SERVICE_ADAPTER = "SERVICE";

Constants.SERVICE_ADAPTER_INVOKE_HANDLER = "INVOKE";

Constants.SERVICE_ADAPTER_INVOKE_HANDLER_SERVICE = "SERVICE";

Constants.SERVICE_ADAPTER_INVOKE_HANDLER_SERVICE_NAME = "SERVICE_NAME";

Constants.SERVICE_ADAPTER_INVOKE_HANDLER_SERVICE_API = "API_NAME";

Constants.SERVICE_ADAPTER_INVOKE_HANDLER_SERVICE_RESOURCES = "RESOURCES";




Constants.ISERVICE_API_HANDLER = "ISERVICE_API_HANDLER";
Constants.ISERVICE_TRIGGERED_EVENT = "TRIGGERED_EVENT";
Constants.ISERVICE_ON_SERVICE_START = "onServiceStart";
Constants.ISERVICE_ON_SERVICE_QUEUE = "onServiceQueue";
Constants.ISERVICE_ON_SERVICE_PAUSE = "onServicePause";
Constants.ISERVICE_ON_SERVICE_RESUME = "onServiceResume";
Constants.ISERVICE_ON_SERVICE_FINISH = "onServiceFinish";
Constants.ISERVICE_ON_SERVICE_REQUEST_INVOKE = "onServiceRequestInvoke";
Constants.ISERVICE_ON_SERVICE_REQUEST_FINISH = "onServiceRequestFinish";
Constants.ISERVICE_ON_SERVICE_TERMINATE = "onServiceTerminate";
Constants.ISERVICE_RESOURCES = "RESOURCES";
Constants.ISERVICE_RESOURCE = "RESOURCE";
Constants.ISERVICE_ADD_RESOURCE = "addResource";



Constants.NOTIFICATION_ADAPTER = "NOTIFICATION";

Constants.NOTIFICATION_ADAPTER_DO_REGISTRATION_HANDLER = "DO-REGISTRATION";
Constants.NOTIFICATION_ADPATER_DO_UNREGISTRATION_HANDLER = "DO-UNREGISTRATION";


Constants.SYNC_ADAPTER = "SYNC";
Constants.SYNC_ADAPTER_HANDLE_HANDLER = "HANDLE";

Constants.SYNC_ADAPTER_HANDLE_HANDLER_SYNC_REQUEST = "SyncRequest";
Constants.SYNC_ADAPTER_HANDLE_HANDLER_SYNC_REQUEST_NAME = "name";
Constants.SYNC_ADAPTER_HANDLE_HANDLER_SYNC_REQUEST_RESOURCES = "RESOURCES";


