alert( 'TAPITOL SILLONES');
const mostrar = () => {
  dato = parseInt(
    prompt(`selecciona la opcion que queres ver \n
         1. Para ver la opcion de SILLONES \n
         2. Para ver la opcion de TELAS \n
         3. para salir y ver el total de tu pedido`)
  );

  return dato;
};
let opcion = mostrar();
let sillones = [
  { nombre: "ALOHA", precio: 220000 },
  { nombre: "GOLDEN", precio: 275000 },
  { nombre: "ASIA", precio: 300000 },
];
let telas = [
  { nombre: "CHENILLE", precio: 15000 },
  { nombre: "LIENZO", precio: 18000 },
];

let envio = [{nombre: 'Envío', precio: 23000}];

const carritoCompras = [];

let validacion;

const comprobante = (dato) => {
  return isNaN(dato) ? (validacion = false) : (validacion = true);
};
comprobante(opcion);
while (opcion !== 3) {
  if (validacion == true) {
    switch (opcion) {
      case 1:
        dato = parseInt(
          prompt(`Elegiste la opcion Sillones, digite el sillon que quiere agregar a su carro de compras \n
                                        1. Sillon ALOHA $220.000 \n
                                        2. Sillon GOLDEN $275.000 \n
                                        3. Sillon ASIA $300.000`)
        );
        comprobante(dato);
        if (validacion === true) {
          switch (dato) {
            case 1:
              carritoCompras.push(sillones[0]);
              break;
            case 2:
              carritoCompras.push(sillones[1]);
              break;

            default:
              break;
          }
        }
        break;
      case 2:
        dato = parseInt(
          prompt(`Elegiste la opcion TELAS, digite la Tela que quiere agregar a su carro de compras \n
          1. Tela CHENILLE $15.000 \n
          2. Tela LIENZO $18.000`)
        );
        comprobante(dato);
        if (validacion === true) {
          switch (dato) {
            case 1:
              carritoCompras.push(telas[0]);
              break;
            case 2:
              carritoCompras.push(telas[1]);
              break;
            default:
              break;
          }
        }
        break;
      case 3:
        dato = parseInt(
          prompt(`Elegiste la opcion Envío, digite a continuacion si desea nuestros servicios \n
        1. nuestro servicio de ENVÍO tiene un valor de $23.000`)
        );
        console.log(dato);
        comprobante(dato);
        if (validacion === true) {
          switch (dato) {
            case 1:
              carritoCompras.push(envio);
              break;
            default:
              break;
          }
        }
        break;
      default:
        console.log("presionaste una opcion incorrecta");
        break;
    }
  } else {
    console.log("El dato ingresado es incorrecto");
  }
  opcion = mostrar();
  comprobante(opcion);
}

if (carritoCompras.length > 0) {
  let total = 0;
    carritoCompras.forEach(producto =>{
    total = total + parseInt(producto.precio);
    return total
  })

  let items = [];

  for (let index = 0; index < carritoCompras.length; index++) {
    const element =  (carritoCompras[index].nombre).toString();
    const element1 = (carritoCompras[index].precio).toString();

    items = items + `${element} : ${element1}\n`;
  }
  alert(`Usted compro : \n${items}\nEl total de su compra fue de $${total}`);
} else {
  alert("El total de su compra es 0");
}
