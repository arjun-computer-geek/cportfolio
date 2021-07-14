const path = require("path")
const fse = require("fs-extra")
const Handlebars = require("handlebars");

Handlebars.registerHelper("eq", function (t1, t2) {
    return t1 === t2
})

Handlebars.registerHelper("le", function (t1, t2) {
    return t1 <= t2
})

console.log("Welcome to cportfolio :)") 
console.log("\nBuilding the portfolio...")

try {
  fse.copySync("./public", "./build/public")
  console.log("copying... supported files")
} catch (err) {
  console.log(err)
}

const data = fse.readFileSync(process.argv[2], "utf-8")

const template = fse.readFileSync(
  path.resolve(path.join(__dirname, "template.hbs")),
  "utf-8"
);

const renderTemplate = Handlebars.compile(template);
const html = renderTemplate(JSON.parse(data));

console.log("Generating... index.html")
fse.writeFile("./build/index.html", html, (err) => {
  if (err) console.log(err);
  console.log(`\nCongratulations! Deploy 'build' directory.`)
});
