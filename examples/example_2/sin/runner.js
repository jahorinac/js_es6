
var ProductFactory = require("./product-factory")

class Runner {

    run() {

        var data = {
            "id"    : 12345,
            "name"  : "Premium",
            "price" : 54.99
        }

        var productEntity = (new ProductFactory(data)).create()

        console.log(productEntity.getId())
        console.log(productEntity.getName())
        console.log(productEntity.getGrossPrice())
    }
}

var runner = new Runner()
runner.run()