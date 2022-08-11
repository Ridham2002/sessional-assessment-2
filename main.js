fetch("https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09",{
    "method":"GET"
})
.then(response => response.json())
.then(data =>{
    console.log(data);

    const userContainer = document.getElementById('userContainer');

    userContainer.innerHTML = null;

    for(let i=0; i<data.length; i++){
        userContainer.innerHTML += `<div class="card m-5">
        <div class="card-body">
          <h5 class="card-title">Name : ${data[i].name}</h5>
          <h5 class="card-title">Phone : ${data[i].phone}</h5>
          <h5 class="card-title">Username : ${data[i].username}</h5>
          <h5 class="card-title">Email : ${data[i].email}</h5>
          <h5 class="card-title">Website : ${data[i].website}</h5>
          <button type="button" class="btn btn-light mr-5" onclick="toggleVisibility('card-address-${i}')">Show Address</button>
          <button type="button" class="btn btn-light mr-5" onclick="toggleVisibility('card-company-${i}')">Show Company</button>
          <div id="card-address-${i}" style="display: none;" class="address">
                <h5 class="card-title">City : ${data[i].address.city}</h5>
                <h5 class="card-title">Street : ${data[i].address.street}</h5>
                <h5 class="card-title">Suite : ${data[i].address.suite}</h5>
                <h5 class="card-title">Zipcode : ${data[i].address.zipcode}</h5> 
            </div>
        <div id="card-company-${i}" style="display: none;" class="company">
            <h5 class="card-title">Company name : ${data[i].company.name}</h5>
            <h5 class="card-title">Company bs : ${data[i].company.bs}</h5>
            <h5 class="card-title">Company catchphrase : ${data[i].company.catchPhrase}</h5> 
        </div>
        </div>
      </div>    `
    }
})

function toggleVisibility(cardId){
    console.log(cardId)
    const cardAddress = document.getElementById(cardId);
    if(cardAddress.style.display == 'none'){
        cardAddress.style.display = 'block'
    }
    else{
        cardAddress.style.display = 'none'
    }

}