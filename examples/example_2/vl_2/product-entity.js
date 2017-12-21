class ProductEntity {
/*
    constructor(data) {
        this.id = data.id
        this.name = data.name
        this.price = data.price
    }*/
    getData(){
        return {
            id:this.id,
            name:this.name,
            price:this.price
        }
    }
    setId(id){
        this.id=id;
    }
    setName(name){
        this.name=name;
    }
    setPrice(price){
        this.price=price;
    }
    getId(){
        return this.id;
    }
    getName(){
        return this.name;
    }
    getGrossPrice(){
        return this.price;
    }
}

module.exports = ProductEntity;

// added commmmmmmment