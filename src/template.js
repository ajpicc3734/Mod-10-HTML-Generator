const buildManagerCard = (manager) => {
  return `
  <li> ${manager.returnName()} </li>

  `;
};

const buildEngineerCard = (engineer) => {
  return `
  <li> ${engineer.returnName()} </li>

  `;
};

const buildInternCard = (intern) => {
  return `
  <li> ${intern.returnName()} </li>

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
  </head>
  <body>
      ${buildTeam(employees)}
  </body>
  </html>
  
  

`;
};

module.exports = generateFrame;
