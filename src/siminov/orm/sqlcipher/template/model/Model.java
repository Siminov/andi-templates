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

package siminov.orm.sqlcipher.template.model;

import siminov.orm.database.Database;

public class Model extends Database {

	//Table Name.
	public static final String TABLE_NAME = "MODEL";
	
	//Column Names.
	public static final String COLUMN_ONE = "COLUMN_ONE";
	public static final String COLUMN_TWO = "COLUMN_TWO";
	
	//Variables
	private String columnOne = null;
	private String columnTwo = null;
	
	public String getColumnOne() {
		return this.columnOne;
	}
	
	public void setColumnOne(String columnOne) {
		this.columnOne = columnOne;
	}
	
	public String getColumnTwo() {
		return this.columnTwo;
	}
	
	public void setColumnTwo(String columnTwo) {
		this.columnTwo = columnTwo;
	}
	
}
