namespace Terrasoft.Configuration
{
	using System.ServiceModel;
	using System.ServiceModel.Activation;
	using System.ServiceModel.Web;
	using System.Web;
	using Terrasoft.Core;
	using Terrasoft.Web.Common;

	[ServiceContract]
	[AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
	public class MyService : BaseService
	{
		[OperationContract]
		[WebInvoke(Method = "GET", UriTemplate = "TestMethod", ResponseFormat = WebMessageFormat.Json)]
		public string MyMethod()
		{
			//var appConnection = HttpContext.Current.Application["AppConnection"] as AppConnection;
			var userName = UserConnection.CurrentUser.Name;
			int y = 50;

			var account = new Terrasoft.Configuration.Account(UserConnection);
			account.SetDefColumnValues();
			account.Zip = "09563xxxx";
			account.Name = "New company name";

			account.Save(true, false);

			var contact = new Terrasoft.Configuration.Contact(UserConnection);
			contact.JobTitle = "Boss";
			contact.SetDefColumnValues();
			contact.SetColumnValue("Name", "New contact");
			contact.OwnerId = UserConnection.CurrentUser.ContactId;
			contact.MobilePhone = "997-731-2264";
			contact.Save();

			return "My answer message - OK!";
		}
	}
}
