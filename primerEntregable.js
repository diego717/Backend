class ProductManager {
  constructor() {
    this.products = [];
    this.nextId = 1;
  }

  addProduct(product) {
    if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
      console.log("Error: Todos los campos son requeridos.");
      return;
    }

    const existingProduct = this.products.find((p) => p.code === product.code);
    if (existingProduct) {
      console.log("Error: El producto con el codigo: " + product.code + " ya existe.");
      return;
    }

    product.id = this.nextId++;
    this.products.push(product);
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const product = this.products.find((p) => p.id === id);
    if (!product) {
      console.log("Error: el producto con el id: " + id + " no se encuentra.");
      return;
    }
    return product;
  }
}

const productManager = new ProductManager();

const product1 = {
  title: "Laptop",
  description: "Potente laptop para juegos y trabajo",
  price: 1500,
  thumbnail: "https://example.com/laptop.jpg",
  code: "LPT001",
  stock: 10
};

const product2 = {
  title: "Smartphone",
  description: "Smartphone de ultima generacion",
  price: 800,
  thumbnail: "https://example.com/smartphone.jpg",
  code: "SMP001",
  stock: 20
};

productManager.addProduct(product1);
productManager.addProduct(product2);

