const app = require('./settings');

app.listen(app.get("port"), () => {
    console.log("El server esta activo en el puerto", app.get("port"));
});
  