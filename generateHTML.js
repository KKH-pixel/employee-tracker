function cardManager(data) {
    return `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h4 class="card-title">${data.getName()}</h4>
        <h6 class="card-subtitle mb-2 text-muted"><i class="bi bi-sunglasses"> ${data.getRole()}</i></h6>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${data.getId()}</li>
          <li class="list-group-item">Email: ${data.getEmail()}</li>
          <li class="list-group-item">Office: ${data.getOfficeNumber()}</li>
        </ul>
      </div>
    </div>
    `
}

function cardEngineer(data) {
    return `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h4 class="card-title">${data.getName()}</h4>
        <h6 class="card-subtitle mb-2 text-muted"><i class="bi bi-tools"> ${data.getRole()}</i></h6>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${data.getId()}</li>
          <li class="list-group-item">Email: ${data.getEmail()}</li>
          <li class="list-group-item">GitHub: ${data.getGithub()}</li>
        </ul>
      </div>
    </div>
    `
}

function cardIntern(data) {
  return `
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h4 class="card-title">${data.getName()}</h4>
      <h6 class="card-subtitle mb-2 text-muted"><i class="bi bi-paperclip"> ${data.getRole()}</i></h6>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${data.getId()}</li>
        <li class="list-group-item">Email: ${data.getEmail()}</li>
        <li class="list-group-item">School: ${data.getSchool()}</li>
      </ul>
    </div>
  </div>
  `
}

function generateHTML(array) {
    var returnArray = array.map(index => {
        if (index.getRole() === "Manager") {
            return cardManager(index)
        } else if (index.getRole() === "Engineer") {
            return cardEngineer(index)     
        } else {
            return cardIntern(index)
        }
    });
    console.log(returnArray)
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Oxygen&family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet"> 
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css">
        <link rel="stylesheet" href="style.css">
        <title>My Team</title>
    </head>
    
    <body>
        <h1>My Team</h1>
        <div class="container">
          <div class="row justify-content-center"">
    
${returnArray.join("")}

          </div>
        </div>

  <script src="index.js"></script>
</body>

</html>
    `
}

module.exports = generateHTML;