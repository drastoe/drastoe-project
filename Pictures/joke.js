('https://official-joke-api.appspot.com/jokes/random') 

const id = document.getElementById("id");
const setup= document.getElementById("setup");
const punchline= document.getElementById("punchline");
const button = document.getElementById("btn");


async function getjoke(){
try {
   const response = await fetch('https://official-joke-api.appspot.com/jokes/random');
   console.log(response);
   const data = await response.json();
   console.log(data);

   id.textContent= `#${data.id}`;
   setup.textContent= `${data.setup}`
   punchline.textContent= `"${data.punchline}"`
  
} catch (error) {
id.textContent = "id not found";
setup.textContent= "Something is wrong somewhere";
punchline.textContent="Oops, cant find punchline";
}
}

getjoke();

button.addEventListener("click", getjoke)