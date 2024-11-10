// Array de objetos que representan los productos disponibles  

const product = [  

    {  
        id: 1,  
        image: 'https://static.wixstatic.com/media/5b6206_eb642bd07565443bb18a0eda8a42d987~mv2.jpg/v1/fill/w_480,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5b6206_eb642bd07565443bb18a0eda8a42d987~mv2.jpg',  
        title: 'ARDUINO NANO',  
        price: 50,  
    },  
    {  
        id: 2,  
        image: 'https://epyelectronica.com/wp-content/uploads/Protoboard-830-pts1.jpg',  
        title: 'PROTOBOARD',  
        price: 35,  
    },  
    {  
        id: 3,  
        image: 'https://m.media-amazon.com/images/I/61yfIwAxe0L.jpg',  
        title: 'MOTOR SERVO',  
        price: 30,  
    },  
    {  
        id: 4,  
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQYjqxukT5QT8oBrL7kysHul80tQwdzbysoQ&s',  
        title: 'LED',  
        price: 250,  
    },  
    {  
        id: 5,  
        image: 'https://www.horizonhobby.com/dw/image/v2/BFBR_PRD/on/demandware.static/-/Sites-horizon-master/default/dw2176ee5f/Images/SPM/SPMXAM4745_A99_K68BE55Y.jpg?sw=800&sh=800&sm=fit',  
        title: 'MOTOR RC',  
        price: 250,  
    },  
    {  
        id: 6,  
        image: 'https://epyelectronica.com/wp-content/uploads/2020/09/Cables-Macho-Macho-20cm-40pcs.png.webp',  
        title: 'CABLE MACHO',  
        price: 250,  
    },  
    {  
        id: 7,  
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-8ep8fvM0oLctU4Ttpk7hTXD9Q2BHf4ncFKv7jkRgpCJyYigUy_PoJMo3dT3WNx2kf18&usqp=CAU',  
        title: 'CABLE HEMBRA',  
        price: 250,  
    },  
    {  
        id: 8,  
        image: 'https://naylampmechatronics.com/440-large_default/modulo-bluetooth-hc05.jpg',  
        title: 'MODULO BLUETOOTH H6',  
        price: 250,  
    },  
    {  
        id: 9,  
        image: 'https://www.electronicwings.com/storage/PlatformSection/TopicContent/118/description/1_HC-05_Bluetooth_Module.jpg',  
        title: 'MODULO BLUETOOTH H5',  
        price: 250,  
    },  
    {  
        id: 10,  
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsx6RgV_VJT1VLSDGUOqlMmClBjyc2OKZT4A&s',  
        title: 'MODULO L298N',  
        price: 250,  
    },  
    {  
        id: 11,  
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyFge_-rTDAyQ912uodNTSEMF9Cv8ZOdpDrw&s',  
        title: 'TARJETA RAM',  
        price: 250,  
    },  
    {  
        id: 12,  
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY73Zi2OaUGrtJeutkH2hVBjtJ3fYpm7Inew&s',  
        title: 'PROCESADOR',  
        price: 250,  
    },  
    {  
        id: 13,  
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF8alOpElx4__ukzqOxzLGhbzIIXufSddgHQ&s',  
        title: 'DISCO DURO',  
        price: 250,  
    },  

    {  
        id: 14,  
        image: 'https://img2.miravia.es/g/fb/kf/Se0ea1966be094c1a929070cffee142bfY.jpg_360x360q75.jpg',  
        title: 'ADAPTADOR',  
        price: 250,  
    },  






];  
// Inicializa un contador para iterar
let i = 0;  
const categories = [...product]; // Cambié el código aquí para evitar duplicados. 
// Renderiza el contenido en un elemento con id 'root'   
document.getElementById('root').innerHTML = categories.map((item, index) => {  
    // Desestructura las propiedades del objeto producto  
    const { image, title, price } = item;  
    // Devuelve una cadena de HTML para cada producto  
    return (  
        `<div class='box'>  
            <div class='img-box'>  
                <img class='images' src="${image}" alt="${title}"></img>  
            </div>  
            <div class='bottom'>  
                <p>${title}</p>  
                <h2>bs. ${price}.00</h2>  
                <button class='select-button' onclick='addtocart(${index})'>comprar</button>  
            </div>  
        </div>`  
    );  
    // Concatena los elementos generados en una única cadena
}).join('');  

// Inicializa un array para el carrito de compras  
var cart = [];  
// Inicializa un array para almacenar productos seleccionados, sin duplicados  
const selectedProducts = [];  

// Función para agregar un producto al carrito  
function addtocart(index) {  
    // Crear un nuevo objeto producto a partir del índice seleccionado  
    const productToAdd = { ...categories[index] };  

    // Agregar el producto al carrito  
    cart.push(productToAdd);  
    // Actualizar la visualización del carrito  
    displaycart();  

    // Preparar información del producto para la lista de seleccionados  
    const productInfo = { title: productToAdd.title, image: productToAdd.image };  
    
    // Verificar si el producto ya está en la lista de seleccionados para evitar duplicados  
    if (!selectedProducts.some(selected => selected.title === productInfo.title)) {  
        // Agregar el producto a la lista de seleccionados  
        selectedProducts.push(productInfo);  
        // Mostrar el botón de envío si hay productos seleccionados  
        document.getElementById('send-button').classList.remove('hidden');  
    }  
}  

// Función para eliminar un producto del carrito  
function delElement(index) {  
    // Elimina el producto del carrito en la posición indicada  
    cart.splice(index, 1);  
    // Actualiza la visualización del carrito  
    displaycart();  
}  

// Función para mostrar el contenido del carrito en la interfaz  
function displaycart() {  
    let j = 0, total = 0;  // Inicializa un contador y total acumulado  
    // Actualiza el contador de productos en el carrito  
    document.getElementById("count").innerHTML = cart.length;   
    
    
    if (cart.length == 0) {    
       
        document.getElementById('cartItem').innerHTML = "tu carrito está vacío";  
        
        document.getElementById("total").innerHTML = "bs. " + 0 + ".00";  
    } else {  

        document.getElementById("cartItem").innerHTML = cart.map((items) => {   
            const { image, title, price } = items;  
            total += price;   
            return (  
                `<div class='cart-item'>  
                    <div class='row-img'>  
                        <img class='rowimg' src="${image}">   
                    </div>  
                    <p style='font-size:12px;'>${title}</p>  
                    <h2 style='font-size: 15px;'>bs ${price}.00</h2>    
                    <i class='fa-solid fa-trash' onclick='delElement(${j++})'></i> 
                </div>`  
            );  
        }).join('');  // Une todos los elementos generados en una única cadena HTML  
        
        // Muestra el total acumulado del carrito  
        document.getElementById("total").innerHTML = "bs " + total + ".00";  
    }  
    
    // Botón para enviar el pedido  
    const sendButton = document.getElementById('send-button');  
    // Agrega un evento de clic al botón de envío  
    sendButton.addEventListener('click', () => {  
        let message = 'Mi orden:\n';  // Mensaje inicial para WhatsApp  
        // Recorre los productos seleccionados y los agrega al mensaje  
        selectedProducts.forEach(product => {  
            message += `${product.title} - ${product.image}\n`;  
        });  
        // Prepara el enlace de WhatsApp con el mensaje codificado  
        const whatsappLink = `https://wa.me/?text=${encodeURIComponent(message)}`;  
        // Abre una nueva pestaña con el enlace de WhatsApp  
        window.open(whatsappLink, '_blank');  
    });  
}  