function genrate_barcode(){
    var puthon =require("python-shell")
    var path =require("path")

    var TEXT=document.getElementById("TEXT").value;
    document.getElementById("TEXT").value="";
    var TYPE=document.getElementById("TYPE").value;
    document.getElementById("TYPE").value="Choose...";
    var rates = document.getElementById('etype').value;
    var rate_value;
    if(rates =='PNG'){
        rate_value = document.getElementById('radio1').value;

    }else if(rates =='SVG'){
        rate_value = document.getElementById('radio2').value;

    }else if(rates =='PDF'){
        rate_value = document.getElementById('radio3').value;
    }  

    document.getElementById('results').innerHTML = rate_value;
    }
    var options={
        scriptPath:path.join(__dirname,'/../engine/')
        args:[TYPE,TEXT,rate_value]
    }
    var genrator=new python('genrator.py',options);