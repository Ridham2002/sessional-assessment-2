fetch("https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09",{
    "method":"GET"
})
.then(response => response.json())
.then(data =>{
    console.log(data);

    const userContainer = document.getElementById('userContainer');

    userContainer.innerHTML = null;

    for(let i=0; i<data.length; i++){
        userContainer.innerHTML += `<div class="row">
        <div class="col-sm-6 my-3 -dark">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${data[i].name}</h5>
              <h5 class="card-title">${data[i].phone}</h5>
              <h5 class="card-title">${data[i].username}</h5>
              <h5 class="card-title">${data[i].email}</h5>
              <h5 class="card-title">${data[i].website}</h5>
              <button type="button" class="btn btn-light mr-5" onclick="toggleVisibility('card-address-${i}')">Show Address</button>
              <button type="button" class="btn btn-light mr-5" onclick="toggleVisibility('card-company-${i}')">Show Company</button>
              <div id="card-address-${i}" style="display: none;">
                    <h5 class="card-title">${data[i].address.city}</h5>
                    <h5 class="card-title">${data[i].address.street}</h5>
                    <h5 class="card-title">${data[i].address.suite}</h5>
                    <h5 class="card-title">${data[i].address.zipcode}</h5> 
                </div>
                <div id="card-company-${i}" style="display: none;">
                <h5 class="card-title">${data[i].company.name}</h5>
                <h5 class="card-title">${data[i].company.bs}</h5>
                <h5 class="card-title">${data[i].company.catchPhrase}</h5> 
                </div>
            </div>
          </div>
        </div>`
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