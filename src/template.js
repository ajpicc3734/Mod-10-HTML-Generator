const buildManagerCard = (manager) => {
  return `
  
  <div class="card m-2" style="width: 12rem;">
  <h2 class="card-header">${manager.returnRole()}</h2>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Name: ${manager.returnName()}</li>
    <li class="list-group-item">ID: ${manager.returnId()}</li>
    <li class="list-group-item"><a href = "mailto: ${manager.returnEmail()}">Email: ${manager.returnEmail()}</a> </li>
    <li class="list-group-item">Office Number: ${manager.returnOfficeNumber()}</li>
  </ul>
</div>

  `;
};

const buildEngineerCard = (engineer) => {
  return `
  <div class="card m-2" style="width: 12rem;">
  <h2 class="card-header">${engineer.returnRole()}</h2>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Name: ${engineer.returnName()}</li>
    <li class="list-group-item">ID: ${engineer.returnId()}</li>
    <li class="list-group-item"><a href = "mailto: ${engineer.returnEmail()}">Email: ${engineer.returnEmail()}</a> </li>
    <li class="list-group-item"><a href="https://github.com/${engineer.returnGithub()}">GitHub</a></li>
  </ul>
</div>
  `;
};

const buildInternCard = (intern) => {
  return `
  <div class="card m-2" style="width: 12rem;">
  <h2 class="card-header">${intern.returnRole()}</h2>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Name: ${intern.returnName()}</li>
    <li class="list-group-item">ID: ${intern.returnId()}</li>
    <li class="list-group-item"><a href = "mailto: ${intern.returnEmail()}">Email: ${intern.returnEmail()}</a> </li>
    <li class="list-group-item">School: ${intern.returnSchool()}</li>
  </ul>
</div>

  `;
};
const buildTeam = (team) => {
  //filter team members
  const html = [];

  html.push(
    team
      .filter((employee) => employee.returnRole() === "Manager")
      .map((manager) => buildManagerCard(manager))
  );
  html.push(
    team
      .filter((employee) => employee.returnRole() === "Engineer")
      .map((engineer) => buildEngineerCard(engineer))
      .join("")
  );
  html.push(
    team
      .filter((employee) => employee.returnRole() === "Intern")
      .map((intern) => buildInternCard(intern))
      .join("")
  );
  return html.join("");
};

const generateFrame = (employees) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
      <link rel="stylesheet" href="./css/app.css">
      </head>
  <body>
  <h1 class="p-3 mb-2 bg-secondary text-white">My Team</h1>
  <div class= "container">
      ${buildTeam(employees)}
  </div>
  </body>
  </html>
  
  

`;
};

module.exports = generateFrame;
