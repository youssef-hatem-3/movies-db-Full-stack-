let username = document.getElementById('userName')
let userEmail = document.getElementById('userEmail')
let userPassword = document.getElementById('userPassword')
let userAge = document.getElementById('userAge')
let registerBtn = document.getElementById('registerBtn')

function getDataFromApi() {
    fetch('http://localhost:3000/api/v1')
        .then(response => response.json())
        .then(json => {
            users = json.users;
        }
        )
}

function signMethod(endPoint, method, data , location) {
    fetch(`http://localhost:3000/api/v1/${endPoint}`, {
        method: method,
        body: JSON.stringify(data),
        headers:
        {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(obj => {
            if (obj.message == 'success') {
                getDataFromApi()
                window.location.replace(`${location}`);
                console.log('tmam');

            }
            else {
                console.log('mshtmam');
            }
        });
}

function signUp() {
    let data =
    {
      name: username.value,
      email: userEmail.value,
      password: userPassword.value,
      age: userAge.value
    }
    let location = 'file:///C:/Users/dell/Desktop/Linkedin%203/Linkedin%203/JS%20EXAM/signIn.html'
    signMethod('signUp','POST', data , location )
    
  }