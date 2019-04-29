const expressjs = require('express');
const util = require('util');
const MenuService = require('./service/MenuService.js');
const bodyParser = require('body-parser');

const app = expressjs();
app.use(bodyParser.json()); // for parsing application/json
app.use(expressjs.static("resources/frontend"));

const port = 3000;

const menuService = new MenuService();

app.listen(port, (err) => {
    if (err) {
        return console.error(`Error while starting server: ${util.inspect(err)}`);
    }

    console.info(`Server launched on port ${port}`);
});

app.get("/menu", (request, response) => {
    // Return the menu object
    console.log(menuService);
    response.status(200).json(menuService.getMenu());
    return;
});

app.put("/menu/updateItem", (request, response) => {
    // Update the requested item
    menuService.updateMenuItem(request.body);
    response.status(200).end();
    return;
});