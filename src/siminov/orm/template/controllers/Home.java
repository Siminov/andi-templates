/** 
 * [SIMINOV FRAMEWORK]
 * Copyright [2013] [Siminov Software Solution LLP|support@siminov.com]
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

package siminov.orm.template.controllers;

import siminov.orm.exception.DatabaseException;
import siminov.orm.log.Log;
import siminov.orm.template.model.Liquor;

public class Home {

	public Liquor[] getLiquors() {
		
		try {
			return (Liquor[]) new Liquor().select().fetch();
		} catch(DatabaseException databaseException) {
			Log.loge(getClass().getName(), "getLiquors", "DatabaseException caught while getting liquors, " + databaseException.getMessage());
			return null;
		}
		
	}
	
}
