exports.dish = `{
   "name": "{{firstName}} {{lastName}}",
   "description": "{{lorem}}",
   "restaurant_id": "{{int 1 100}}",
   "photo": "http://dummyimage.com/{{int 300 500}}x{{int 300 500}}/005/fff"
}`;

exports.restaurant = `{
   "name": "{{firstName}}{{lastName}}",
   "description": "{{lorem}}",
   "photo": "http://dummyimage.com/{{int 300 500}}x{{int 300 500}}/050/fff",
   "location": "{{country}} {{city}}",
   "lat": {{lat}},
   "lon": {{long}}
}`;

exports.member = `{
   "username": "{{firstName}}{{lastName}}",
   "password": "{{lorem 1}}",
   "photo": "http://dummyimage.com/{{int 300 500}}x{{int 300 500}}/500/fff",
   "gender": "M",
   "user": "{{email}}"
}`;
