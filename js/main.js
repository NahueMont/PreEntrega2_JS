// 1- Debo usar condicionales, ciclos, funciones, objetos, arrays, y alguno de los métodos.
// 2- En mi caso voy a hacer un store de PC's y componentes como Compra Gamer.
// 3- Subirlo a GitHub


// Objetos

class Producto {
    constructor(id, nombre, tipo, precio, stock) {
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.precio = precio;
        this.stock = stock;
    }
} 

// Funciones.

// Agregar un producto al carrito.
function agregarAlCarrito() {

    let operacion = prompt("Ingrese la PC o periférico que desea agregar al carrito, o 0 para regresar.\nPC's:\n1- Ryzen 5 5600x + SSD 1TB + RTX 2080 + 32GB RAM  ($3000)\n2- Ryzen 7 5800X3D + SSD 2TB + RTX 3080 + 32GB RAM  ($4000)\n3- Ryzen 9 7950X3D + NVMe 4TB + RTX 4090 + 64GB RAM  ($5500)\nPeriféricos:\n4- Mouse Logitech G203 ($100)\n5- Teclado Mecánico HyperX Alloy Origins Core Switch Red ($250)\n6- Auriculares Logitech Aurora G735 Wireless White RGB ($400)");

    while (operacion !== "0") {

        switch (operacion) {
            // PC 1
            case "1":

                idProducto = 0;
                pedirAgregarCantidad(idProducto);
                break;

            // PC 2
            case "2":

                idProducto = 1;
                pedirAgregarCantidad(idProducto);
                break;

            // PC 3
            case "3":

                idProducto = 2;
                pedirAgregarCantidad(idProducto);
                break;

            // G203
            case "4":

                idProducto = 3;
                pedirAgregarCantidad(idProducto);
                break;

            // Teclado HyperX
            case "5":
                
                idProducto = 4;
                pedirAgregarCantidad(idProducto);
                break;

            // Logitech Aurora
            case "6":

                idProducto = 5;
                pedirAgregarCantidad(idProducto);
                break;

            default:
                alert("Ingrese una opción válida.")
        }
        // Evitamos el bucle pidiendo al usuario una nueva acción.
        operacion = prompt("Ingrese la PC o periférico que desea agregar al carrito, o 0 para regresar.\nPC's:\n1- Ryzen 5 5600x + SSD 1TB + RTX 2080 + 32GB RAM  ($3000)\n2- Ryzen 7 5800X3D + SSD 2TB + RTX 3080 + 32GB RAM  ($4000)\n3- Ryzen 9 7950X3D + NVMe 4TB + RTX 4090 + 64GB RAM  ($5500)\nPeriféricos:\n4- Mouse Logitech G203 ($100)\n5- Teclado Mecánico HyperX Alloy Origins Core Switch Red ($250)\n6- Auriculares Logitech Aurora G735 Wireless White RGB ($400)");
    }
}

// Se solicita al usuario ingresar cuántas unidades del producto seleccionado quiere agregar al carrito, los resta del stock de ese producto, suma sus precios y agrega exitosamente el producto y su cantidad al array productosCarrito
function pedirAgregarCantidad(idProducto) {

    cantidades = parseInt(prompt("Ingrese la cantidad de " + productos[idProducto].tipo + " " + productos[idProducto].nombre + " que desea agregar al carrito. Hay " + productos[idProducto].stock + " en stock."));

    if (cantidades > 0 && cantidades <= productos[idProducto].stock) {

        restarStock();

        sumarTotales();

        pushCarrito();

        // Se avisa el tipo, nombre y cantidad de productos que se agregaron al carrito
        alert("Se sumó " + cantidades + " " + productos[idProducto].tipo + " " + productos[idProducto].nombre + " al carrito. \nQueda(n) " + productos[idProducto].stock + " en stock.");

    } else {

        // Se pide que se ingrese una cantidad válida, avisando el stock existente del producto
        alert("Ingrese una cantidad válida. Hay " + productos[idProducto].stock + " " + productos[idProducto].tipo + " " + productos[idProducto].nombre + " en stock.");
    }
}


// Se resta cierta cantidad de productos del stock, para agregarlos al carrito
function restarStock() {
    productos[idProducto].stock -= cantidades;
}


// Se suma el precio de los productos -a agregar al carrito- al total
function sumarTotales() {
    total += productos[idProducto].precio * cantidades;
}


// Función que agrega (con push) un producto (objeto) al carrito (array)
function pushCarrito() {

    // Si el producto a pushear al carrito no está en el carrito, se lo pushea como objeto normalmente
    if(!productosCarrito.find( (el) => el.id === productos[idProducto].id)) {
        
        productosCarrito.push({
            id: idProducto,
            nombre: productos[idProducto].nombre,
            cantidad: cantidades,
        })
        
    } 
    // De lo contrario, si ya está en el carrito, se le suma a la cantidad del producto que ya está la cantidad correspondiente
    else {

        const posicion = productosCarrito.map(el => el.id).indexOf(idProducto);

        productosCarrito[posicion].cantidad += cantidades;
    }
}


// Operación 2: eliminar producto del carrito
function eliminarDelCarrito() {

    if (productosCarrito.length > 0) {

        let operacion2 = prompt("Ingrese la PC o periférico que desea eliminar del carrito, o 0 para regresar.\nPC's:\n1- Ryzen 5 5600x + SSD 1TB + RTX 2080 + 32GB RAM  ($3000)\n2- Ryzen 7 5800X3D + SSD 2TB + RTX 3080 + 32GB RAM  ($4000)\n3- Ryzen 9 7950X3D + NVMe 4TB + RTX 4090 + 64GB RAM  ($5500)\nPeriféricos:\n4- Mouse Logitech G203 ($100)\n5- Teclado Mecánico HyperX Alloy Origins Core Switch Red ($250)\n6- Auriculares Logitech Aurora G735 Wireless White RGB ($400)");

        while (operacion2 !== "0") {

            switch (operacion2) {
                // PC Ryzen 5 5600x
                case "1":
    
                    idProducto = 0;
                    sacarProductoCarrito(idProducto);
                    break;
                // PC Ryzen 7 5800X3D
                case "2":

                    idProducto = 1;
                    sacarProductoCarrito(idProducto);
                    break;

                // PC Ryzen 9 7950X3D
                case "3":
    
                    idProducto = 2;
                    sacarProductoCarrito(idProducto);
                    break;

                // G203
                case "4":
    
                    idProducto = 3;
                    sacarProductoCarrito(idProducto);
                    break;

                // Teclado Mecánico HyperX
                case "5":
                    
                    idProducto = 4;
                    sacarProductoCarrito(idProducto);
                    break;

                // Logitech Aurora G735
                case "6":
    
                    idProducto = 5;
                    sacarProductoCarrito(idProducto);
                    break;
    
                default:
                    alert("Ingrese una opción correcta.")
            }
            
            // Evitamos el bucle pidiendo una nueva opción.
            operacion2 = prompt("Ingrese la PC o periférico que desea eliminar del carrito, o 0 para regresar.\nPC's:\n1- Ryzen 5 5600x + SSD 1TB + RTX 2080 + 32GB RAM  ($3000)\n2- Ryzen 7 5800X3D + SSD 2TB + RTX 3080 + 32GB RAM  ($4000)\n3- Ryzen 9 7950X3D + NVMe 4TB + RTX 4090 + 64GB RAM  ($5500)\nPeriféricos:\n4- Mouse Logitech G203 ($100)\n5- Teclado Mecánico HyperX Alloy Origins Core Switch Red ($250)\n6- Auriculares Logitech Aurora G735 Wireless White RGB ($400)");
    
        }

    } else {
        alert("Aún no ha agregado productos al carrito.");
    }
}


// Se le solicita al usuario si quiere eliminar el producto seleccionado, para luego restarle el precio de este producto al total, sumar el stock al stock anterior y se elimina el producto del carrito
function sacarProductoCarrito(idProducto) {

    // Si el producto ingresado (idProducto) existe dentro del array productosCarrito...
    if (productosCarrito.some( (el) => el.id === idProducto)) {

        let pregunta = prompt("Desea eliminar " + productos[idProducto].nombre + " del carrito? Si es así ingrese 0.\nSi no quiere, ingrese cualquier otra cosa.");

        if (pregunta == "0") {
    
            restarPrecios();

            sumarStock();

            spliceCarrito();

            alert(productos[idProducto].nombre + "se ha eliminado correctamente del carrito.");
        } 

    } else {
        alert("El producto que seleccionó no está en el carrito.");
    }
}


// Se resta el precio de los productos -a eliminar del carrito- del total
function restarPrecios() {

    const posicion = productosCarrito.map(e => e.id).indexOf(idProducto);

    total -= productos[idProducto].precio * productosCarrito[posicion].cantidad;
}


// Se suma cierta cantidad del productos al stock, para eliminarlos del carrito
function sumarStock() {

    const posicion = productosCarrito.map(e => e.id).indexOf(idProducto);

    productos[idProducto].stock += productosCarrito[posicion].cantidad;
}


// Función que elimina (con splice) un producto (objeto) del carrito (array)
function spliceCarrito() {
    
    const posicion = productosCarrito.map(el => el.id).indexOf(idProducto);

    productosCarrito.splice(posicion, 1);
}


// Operación 3: ver productos del carrito
function verElCarrito() {

    if (productosCarrito.length > 0) {
        
        let mensaje = "";

        productosCarrito.forEach( (el) => mensaje += "\n" + el.nombre + " x" + el.cantidad);

        alert("Los productos en el carrito son los siguientes:\n" + mensaje + "\n\nEl total es: $" + total);
    } else {
        alert("Aún no agregó productos al carrito");
    }
}

// Variables

const productos = [
    new Producto(0, "Ryzen 5 5600x", "PC", 3000, 10),
    new Producto(1, "Ryzen 7 5800X3D", "PC", 4000, 5),
    new Producto(2, "Ryzen 9 7950X3D", "PC", 5500, 3),
    new Producto(3, "Logitech G203", "Mouse", 100, 50),
    new Producto(4, "Teclado Mecánico HyperX", "Teclado", 250, 25),
    new Producto(5, "Auriculares Logitech Aurora G735", "Auriculares", 400, 15),
];


const productosCarrito = []; 

let total = 0;
let idProducto = 0;


// Inicio
alert("Bienvenido a PC Store, su tienda de componentes de confianza!");

// Inicio del programa, pregunto al usuario qué operación quiere realizar.
let operacion = prompt("Seleccione la operación a realizar.\n1- Agregar un producto al carrito.\n2- Eliminar un producto del carrito.\n3- Ver mi carrito.\n0- Salir.");

while (operacion !== "0") {

    // Operaciones a realizar.
    switch (operacion) {

        // Agregar un producto al carrito.
        case "1":

            agregarAlCarrito();
            break;

        // Eliminar un producto del carrito.
        case "2":

            eliminarDelCarrito();
            break;
        
        // Ver el carrito.
        case "3":

            verElCarrito();
            break;

        default:
            alert("Ingrese una opción correcta.")
    }

    // Evitamos el bucle pidiendo al usuario una nueva acción.
    operacion = prompt("Seleccione la operación a realizar.\n1- Agregar un producto al carrito.\n2- Eliminar un producto del carrito.\n3- Ver mi carrito.\n0- Salir.");
}


alert("Hasta luego, gracias por utilizar nuestros servicios.");

// Fin del programa.