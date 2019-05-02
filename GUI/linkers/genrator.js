let {PythonShell} = require('python-shell')
var path = require("path")

function genrate_barcode(){

    var TEXT=document.getElementById("TEXT").value;
    document.getElementById("TEXT").value="";
    var TYPE=document.getElementById("TYPE").value;
    document.getElementById("TYPE").value="Choose Barcode Type";
    var ETYPE=document.getElementById("ETYPE").value;
    document.getElementById("ETYPE").value="Choose Export Type";
    var options={
       scriptPath : path.join(__dirname, '/../Engine/'),
       args:[TYPE,TEXT,ETYPE]
       
    }

  

  var pyshell=new PythonShell('genrator.py',options);
  pyshell.on('message', function(message){
    console.log(message);
});
}