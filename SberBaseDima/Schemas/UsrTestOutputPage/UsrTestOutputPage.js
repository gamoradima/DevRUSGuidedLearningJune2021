define("UsrTestOutputPage", [], function() {
	return {
		entitySchemaName: "",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{
			"ContactType1": {
				"entitySchemaName": "ContactType",
				"primaryColumnValue": {
					"bindTo": "UsrContacttype1"
				}
			}
		}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "Button-b774318e7d8f4a29910d6c3b1c13520b",
				"values": {
					"itemType": 5,
					"id": "19c95356-5870-45de-900e-c26170bc65d6",
					"style": "green",
					"tag": "Button1",
					"caption": {
						"bindTo": "Resources.Strings.Button1ButtonCaption"
					},
					"click": {
						"bindTo": "onSaveButtonClick"
					},
					"enabled": true
				},
				"parentName": "ProcessActionButtons",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "STRING43e70aa3-f618-41af-bc0e-9c638e0c45d3",
				"values": {
					"layout": {
						"colSpan": 16,
						"rowSpan": 1,
						"column": 4,
						"row": 2,
						"layoutName": "Header"
					},
					"bindTo": "UsrString1",
					"enabled": false
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrContacttype1c148571b-5680-49f3-a43b-58cf141f4cae",
				"values": {
					"layout": {
						"colSpan": 7,
						"rowSpan": 1,
						"column": 4,
						"row": 4,
						"layoutName": "Header"
					},
					"bindTo": "UsrContacttype1",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "merge",
				"name": "NewTab1",
				"values": {
					"order": 0
				}
			},
			{
				"operation": "insert",
				"name": "Name9d2c2424-916a-43d4-8c88-f0cd7fa87df7",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "NewTab1GridLayout1"
					},
					"bindTo": "ContactType1.Name"
				},
				"parentName": "NewTab1GridLayout1",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CreatedOn36c0f4e5-d74d-4f3d-915a-aec2eab72574",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "NewTab1GridLayout1"
					},
					"bindTo": "ContactType1.CreatedOn"
				},
				"parentName": "NewTab1GridLayout1",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ModifiedOnb95f5a87-c387-49fa-9c73-1ec4e41bb2a6",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "NewTab1GridLayout1"
					},
					"bindTo": "ContactType1.ModifiedOn"
				},
				"parentName": "NewTab1GridLayout1",
				"propertyName": "items",
				"index": 2
			}
		]/**SCHEMA_DIFF*/
	};
});
