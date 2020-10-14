function Hero(name) {
    this.name = name;
}

Hero.prototype.saludar = function() {
    console.log(`Hola soy ${this.name}`);
}


const link = Object.create(Hero.prototype);

link.name = 'el pepe';

link.saludar();