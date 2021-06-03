define("ContactPageV2", [], function() {
	return {
		entitySchemaName: "Contact",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "UsrABSCoded1b762a1-293f-4d49-a704-f97c781098b2",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 3,
						"layoutName": "ContactGeneralInfoBlock"
					},
					"bindTo": "UsrABSCode",
					"tip": {
						"content": {
							"bindTo": "Resources.Strings.UsrABSCoded1b762a1293f4d49a704f97c781098b2Tip"
						}
					},
					"enabled": true
				},
				"parentName": "ContactGeneralInfoBlock",
				"propertyName": "items",
				"index": 7
			}
		]/**SCHEMA_DIFF*/
	};
});
