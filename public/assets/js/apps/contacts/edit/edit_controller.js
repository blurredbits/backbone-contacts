ContactManager.module("ContactsApp.Edit", function(Edit, ContactManager, Backbone, Marionette, $, _){
  Edit.Controller = {
    editContact: function(id) {
      var contacts = ContactManager.request("contact:entities");
      var contact = contacts.get(id);
      var contactView;
      var view;
      if(contact !== undefined) {
        view = new Edit.Contact({
          model: contact
        });
      }
      else {
        view = new ContactManager.ContactsApp.Show.MissingContact();
      }

      ContactManager.mainRegion.show(view);
    }
  };
});