///
/// [SIMINOV FRAMEWORK]
/// Copyright [2015] [Siminov Software Solution LLP|support@siminov.com]
///
/// Licensed under the Apache License, Version 2.0 (the "License");
/// you may not use this file except in compliance with the License.
/// You may obtain a copy of the License at
///
///     http://www.apache.org/licenses/LICENSE-2.0
///
/// Unless required by applicable law or agreed to in writing, software
/// distributed under the License is distributed on an "AS IS" BASIS,
/// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
/// See the License for the specific language governing permissions and
/// limitations under the License.
///

#import "LiquorBrand.h"

@implementation LiquorBrand

-(Liquor *)getLiquor {
    return liquor;
}

-(void)setLiquor: (Liquor *)liq {
    liquor = liq;
}

-(NSString *)getBrandName {
    return brandName;
}

-(void)setBrandName: (NSString *)brand {
    brandName = brand;
}

-(NSString *)getDescription {
    return description;
}

-(void)setDescription: (NSString *)desc {
    description = desc;
}

-(NSString *)getLink {
    return link;
}

-(void)setLink: (NSString *)lin {
    link = lin;
}

-(NSString *)getCountry {
    return country;
}

-(void)setCountry: (NSString *)coun {
    country = coun;
}

@end