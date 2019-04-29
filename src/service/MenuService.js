const fs = require('fs');
const path = require('path');

module.exports = class MenuService {
    
    constructor() {
        const contents = fs.readFileSync(path.resolve(process.cwd(), "resources/config/menu.json"));
        this.menu = JSON.parse(contents);
    }

    getMenu() {
        return this.menu;
    }

    updateMenuItem(menuItem) {
        this.menu.items.forEach(item => {
            if (item.id == menuItem.id) {
                if (menuItem.hasOwnProperty('name')) {
                    item.name = menuItem.name;
                }

                if (menuItem.hasOwnProperty('category')) {
                    item.category = menuItem.category;
                }

                if (menuItem.hasOwnProperty('price')) {
                    item.price = menuItem.price;
                }

                if (menuItem.hasOwnProperty('weight')) {
                    item.weight = menuItem.weight;
                }

                if (menuItem.hasOwnProperty('enabled')) {
                    item.enabled = menuItem.enabled;
                }
            }
        })       
    }
}