﻿/** 
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



using Siminov.Core.Events;
using Siminov.Core.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Siminov.Core.Sample.Events
{
	public class DatabaseEventHandler : IDatabaseEvents
	{

		public void OnDatabaseCreated(DatabaseDescriptor databaseDescriptor)
		{

		}

		public void OnTableCreated(DatabaseDescriptor databaseDescriptor, EntityDescriptor entityDescriptor)
		{

		}

		public void OnIndexCreated(DatabaseDescriptor databaseDescriptor, EntityDescriptor entityDescriptor, EntityDescriptor.Index index)
		{

		}

		public void OnDatabaseDropped(DatabaseDescriptor databaseDescriptor)
		{

		}

		public void OnTableDropped(DatabaseDescriptor databaseDescriptor, EntityDescriptor entityDescriptor)
		{

		}

		public void OnIndexDropped(DatabaseDescriptor databaseDescriptor, EntityDescriptor entityDescriptor, EntityDescriptor.Index index)
		{

		}

	}
}
