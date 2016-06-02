import Mirage from 'ember-cli-mirage';

function formEncodedToJson(encoded) {
  var result = {};
  encoded.split("&").forEach(function(part) {
    var item = part.split("=");
    result[item[0]] = decodeURIComponent(item[1]);
  });
  return result;
}

export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */
  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Route shorthand cheatsheet
  */
  /*
    GET shorthands

    // Collections
    this.get('/contacts');
    this.get('/contacts', 'users');
    this.get('/contacts', ['contacts', 'addresses']);

    // Single objects
    this.get('/contacts/:id');
    this.get('/contacts/:id', 'user');
    this.get('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    POST shorthands

    this.post('/contacts');
    this.post('/contacts', 'user'); // specify the type of resource to be created
  */

  /*
    PUT shorthands

    this.put('/contacts/:id');
    this.put('/contacts/:id', 'user'); // specify the type of resource to be updated
  */

  /*
    DELETE shorthands

    this.del('/contacts/:id');
    this.del('/contacts/:id', 'user'); // specify the type of resource to be deleted

    // Single object + related resources. Make sure parent resource is first.
    this.del('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    Function fallback. Manipulate data in the db via

      - db.{collection}
      - db.{collection}.find(id)
      - db.{collection}.where(query)
      - db.{collection}.update(target, attrs)
      - db.{collection}.remove(target)

    // Example: return a single object with related models
    this.get('/contacts/:id', function(db, request) {
      var contactId = +request.params.id;

      return {
        contact: db.contacts.find(contactId),
        addresses: db.addresses.where({contact_id: contactId})
      };
    });

  */

  this.post('/token', function(db, request){
    var params = formEncodedToJson(request.requestBody);
    if(params.username === "lucas@statas.co" && params.password === "lucas123") {
      return {
        "access_token":"PA$$WORD",
        "token_type":"bearer"
      };
    }else{
      var body = { errors: 'Email or password is invalid' };
      return new Mirage.Response(401, {}, body);
    }
  });


  this.get('/api/campaigns', function() {
    return {
          campaigns: [
            {
              id: 1,
              name: "Atari Campaign",
              description: "I Love Strawberries",
              icon: "youtube-play",
              budget: "12,000,000",
              added: "2016-06-02T17:01:29.924Z"
            },
            {
              id: 2,
              name: "Apple Campaign",
              description: "itunes fest",
              icon: 'music',
              budget: "10,000,000",
              added: "2016-06-02T17:01:29.924Z"            }
          ]
        };
  });

  this.get('/api/offers', function() {
    return {
          offers: [
            {
              id: 1,
              name: "Atari",
              description: "I Love Strawberries",
              icon: "youtube-play",
              amount: "12,000,000",
              time_remaining: "05 12 45"
            },
            {
              id: 2,
              name: "Apple",
              description: "itunes fest",
              icon: 'music',
              amount: "10,000,000",
              time_remaining: "02 05 32"
            }
          ]
        };
  });


}

/*
You can optionally export a config that is only loaded during tests
export function testConfig() {

}
*/
