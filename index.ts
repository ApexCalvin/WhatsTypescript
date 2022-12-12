// Import stylesheets
// import './style.css';
// added this v
console.log(window);

//added v
const url : string = "https://api.dictionaryapi.dev/api/v2/entries/en/";
//#defineform
const form: HTMLFormElement = document.querySelector('#defineform');

//test
form.onsubmit = () => {
  const formData = new FormData(form);

  console.log(formData);
  const text = formData.get('defineword') as string;
  console.log(text);

  //added, gets response from input ie. 'turtle'
  fetch(url + text).then(data =>
    {
      data.json().then(definition =>
        {
          //made visible in inspect console
          console.log(definition)

          let define: HTMLElement = document.getElementById("definition");
          define.innerHTML = definition[0].meanings[0].definitions[0].definition;
        }
        )
    });

  return false; // prevent reload
};