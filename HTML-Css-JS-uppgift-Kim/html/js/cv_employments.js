const apiUrl = "../html/js/cv_employments.json";
let temptext = "";
async function getJson(){
    const data = await fetch(apiUrl);
    const portfolio = await data.json();
   // console.log(portfolio.length);
    for (var i = 0; i < portfolio.length; i++) {
        temptext += "<br/>";
        var obj = portfolio[i];
        for (var key in obj) {
            let value = obj[key];

           temptext += "<br/> " + "<strong>" + key + "</strong>" + ": " + value;
        }
      
        
    }
    document.getElementById("jobb").innerHTML = temptext;
    
}   
getJson(); 