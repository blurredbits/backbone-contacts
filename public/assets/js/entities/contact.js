ContactManager.module("Entities", function(Entities, ContactManager, Backbone, Marionette, $, _){
  Entities.Contact = Backbone.Model.extend({});

  Entities.ContactCollection = Backbone.Collection.extend({
    model: Entities.Contact,
    url: '/api/contacts',
    comparator: "first_name"
  });

  var contacts;

  var initializeContacts = function(){
    contacts = new ContactManager.Entities.ContactCollection();
    contacts.fetch({reset: true})

      // [
      //  // { id: 1, firstName: "Alice", lastName: "Arten", phoneNumber: "555-0184" },
      //  // { id: 2, firstName: "Bob", lastName: "Brigham", phoneNumber: "555-0163" },  
      //  // { id: 3, firstName: "Charlie", lastName: "Campbell", phoneNumber: "555-0129" }
      // ]
  };

  var API = {
    getContactEntities: function(){
      if(contacts === undefined) {
        initializeContacts();
      }
      return contacts; 
    }
  };

  ContactManager.reqres.setHandler("contact:entities", function(){
    return API.getContactEntities();
  });
});