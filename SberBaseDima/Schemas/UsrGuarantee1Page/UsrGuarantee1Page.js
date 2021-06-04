define("UsrGuarantee1Page", ["ServiceHelper"], function(ServiceHelper) {
	return {
		entitySchemaName: "UsrGuarantee",
		attributes: {
			"UsrInsurancePayment": {
                dependencies: [
                    {
                        // Значение колонки [UsrInsurancePayment] зависит от значений колонок [UsrPrice] 
                        columns: ["UsrPrice"],
                        // Метод-обработчик, который вызывается при изменении значения любой из влияющих колонок [UsrPrice] 
                        methodName: "calculateInsurancePayment"
                    }
                ]
			}
		},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "UsrGuaranteeFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "UsrGuarantee"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {
			onEntityInitialized: function() {
				this.callParent(arguments);
				this.calculateInsurancePayment();
			},
			calculateInsurancePayment: function() {
				var price = this.get("UsrPrice");
				var payment = price * 0.05 / 12;
				this.set("UsrInsurancePayment", payment);
			},			
			onMyButtonClick: function() {
				// todo
				this.console.log("MyButton pressed.");
			},
			getMyButtonEnabled: function() {
				var price = this.get("UsrPrice");
				var result = (price >= 10000);
				return result;
			},
			getMyButtonVisible: function() {
				var name = this.get("UsrName");
				var result = (name != "");
				return result;
			},
			positiveValueValidator: function() {
				var msg = "";
				var price = this.get("UsrPrice");
				if (price < 0) {
					msg = this.get("Resources.Strings.ValueMustBePositivie");
				}
                return {
                    invalidMessage: msg
                };
			},
            setValidationConfig: function() {
                this.callParent(arguments);
                this.addColumnValidator("UsrPrice", this.positiveValueValidator);
            },
			onRunWebServiceButtonClick: function() {
				var serviceData = {
					password: "some_string"
				};
				ServiceHelper.callService("CryptographicService", "GetConvertedPasswordValue", this.getWebServiceResult, serviceData, this);
			},

			getWebServiceResult: function(response, success) {
				if (success) {
					Terrasoft.showInformation("Web service result: " + response.GetConvertedPasswordValueResult);
				}
			}
		},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "UsrNameec007f2a-3417-466c-8b78-36924fb26921",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrName"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FLOATf168da28-2957-4836-8422-c9802cf81bda",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrPrice",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "FLOAT680832e5-758c-499d-a140-97468dacb11c",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrInsurancePayment",
					"enabled": false
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "LOOKUP3bd5a67f-a7a5-4144-bbc6-0415006d7929",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrStatus",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "MyButton",
				"values": {
					"itemType": 5,
					"caption": {
						"bindTo": "Resources.Strings.MyButtonCaption"
					},
					"click": {
						"bindTo": "onMyButtonClick"
					},
					"enabled": {
						"bindTo": "getMyButtonEnabled"
					},
					"visible": {
						"bindTo": "getMyButtonVisible"
					},
					"style": "blue",
					"layout": {
						"colSpan": 5,
						"rowSpan": 1,
						"column": 13,
						"row": 0,
						"layoutName": "Header"
					}
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RunWebServiceButton",
				"values": {
					"itemType": 5,
					"caption": {
						"bindTo": "Resources.Strings.RunWebServiceButtonCaption"
					},
					"click": {
						"bindTo": "onRunWebServiceButtonClick"
					},
					"style": "red",
					"layout": {
						"colSpan": 5,
						"rowSpan": 1,
						"column": 13,
						"row": 1,
						"layoutName": "Header"
					}
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "LOOKUPe54c44d3-f24f-4844-b360-1d059191ba53",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "UsrOwner",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LOOKUP44d0f1c5-ab1f-44d6-ab5e-f6dc50cf6fda",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "UsrKind",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "STRING3f100037-1fe6-4de0-af43-d376f7d52c5a",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 2,
						"column": 0,
						"row": 2,
						"layoutName": "Header"
					},
					"bindTo": "UsrComment",
					"enabled": true,
					"contentType": 0
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "NotesAndFilesTab",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.NotesAndFilesTabCaption"
					},
					"items": [],
					"order": 0
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Files",
				"values": {
					"itemType": 2
				},
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NotesControlGroup",
				"values": {
					"itemType": 15,
					"caption": {
						"bindTo": "Resources.Strings.NotesGroupCaption"
					},
					"items": []
				},
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Notes",
				"values": {
					"bindTo": "UsrNotes",
					"dataValueType": 1,
					"contentType": 4,
					"layout": {
						"column": 0,
						"row": 0,
						"colSpan": 24
					},
					"labelConfig": {
						"visible": false
					},
					"controlConfig": {
						"imageLoaded": {
							"bindTo": "insertImagesToNotes"
						},
						"images": {
							"bindTo": "NotesImagesCollection"
						}
					}
				},
				"parentName": "NotesControlGroup",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "ESNTab",
				"values": {
					"order": 1
				}
			}
		]/**SCHEMA_DIFF*/
	};
});
