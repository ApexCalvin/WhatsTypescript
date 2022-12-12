// Import stylesheets
// import './style.css';
// added this v
console.log(window);
//added v
var url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
//#defineform
var form = document.querySelector('#defineform');
//test
form.onsubmit = function () {
    var formData = new FormData(form);
    console.log(formData);
    var text = formData.get('defineword');
    console.log(text);
    //added, gets response from input ie. 'turtle'
    fetch(url + text).then(function (data) {
        data.json().then(function (definition) {
            //made visible in inspect console
            console.log(definition);
            var define = document.getElementById("definition");
            define.innerHTML = definition[0].meanings[0].definitions[0].definition;
        });
    });
    return false; // prevent reload
};
