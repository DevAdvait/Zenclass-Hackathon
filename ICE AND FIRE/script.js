headDiv = document.createElement('div');
document.body.appendChild(headDiv);
headDiv.setAttribute('class', 'jumbotron text-center');

myDiv = document.createElement('div');
myDiv.setAttribute('class', 'container');
headDiv.appendChild(myDiv);
p = document.createElement('p');
p.innerHTML = 'Hackathon 1<br>ICE and FIRE API';
myDiv.appendChild(p);
button = document.createElement('button');
button.setAttribute('class', 'btn btn-outline-dark btn-lg col-2');
button.setAttribute('id', 'fetchButton');
button.innerHTML = 'Fetch Data '
myDiv.appendChild(button);
bodyDiv = document.createElement('div');
myDiv.appendChild(bodyDiv);
bodyDiv.setAttribute('class', 'bodyDiv card card-body');
bodyDiv.setAttribute('id', 'mainDiv');

button.addEventListener("click", async function getData() {
    text = `<h1>List of books</h1>
    <p></p>`;
    try {
        const data = await fetch(`https://anapioficeandfire.com/api/books`)
        const result = await data.json();
        console.log(data);
        console.log(result);
        
        for (i = 1; i < result.length; i++) {
        text += `<div>
        <p>${result[0]}</p> </p>
        </div>`;
        }

        document.getElementById('mainDiv').innerHTML = text;
        console.log(text);

    }
    catch(error){
        console.log(error);
    }
})

