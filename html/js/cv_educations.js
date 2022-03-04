const apiUrlEdu = "../html/js/cv_educations.json";
let edutext = "";
async function getJsonEdu(){
    const data = await fetch(apiUrlEdu);
    const educations = await data.json();
    for (var i = 0; i < educations.length; i++) {
        edutext += "<br/>";
        var objEdu = educations[i];
        for (var key in objEdu) {
            let value = objEdu[key];

           edutext += "<br/> " + "<strong>" + key + "</strong>" + ": " + value;
        }
      
        
    }
    document.getElementById("utbildningar").innerHTML = edutext;
    
}   
getJsonEdu(); 