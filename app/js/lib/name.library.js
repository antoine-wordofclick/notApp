var text = '{"user":[' +
'{"firstName":"John","lastName":"Love Mountain" },' +
'{"firstName":"Anna","lastName":"Smith" },' +
'{"firstName":"Peter","lastName":"Jones" }]}';

obj = JSON.parse(text);
document.getElementById("name").innerHTML =
obj.user[0].firstName + " " + obj.user[0].lastName;