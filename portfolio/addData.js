function addData(){    
var product_name = document.getElementById("pname").value;
var product_price = document.getElementById("price").value;
    
    db.collection("products").add({productName: product_name, price: product_price, productImage: fullurl}).then(function(docRef) {console.log("Document written with ID: ", docRef.id);
    getProducts();}).catch(function(error) {console.error("Error adding document: ", error);});
    getProducts();
}

