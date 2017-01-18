var Client = require('node-rest-client').Client;
var dash_button = require('node-dash-button');
var dash = dash_button("dash-button-mac-addr", null, null, "all"); //address from step above
var client = new Client();
var args = {
    data: { },
    headers: { "Content-Type": "application/json","Authorization":"Bearer authKey" }
};
dash.on("detected", function (){
client.post("url", args, function (data, response) {
    // parsed response body as js object 
//    console.log(data);
    // raw response 
//    console.log(response);
});
  console.log("toggle Done.");
});

