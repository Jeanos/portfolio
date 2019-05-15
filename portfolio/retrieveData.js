var db = firebase.firestore();

    var productdisplay = document.getElementById('products');

    productdisplay.innerHTML = " <div class='loader'> </div> ";
    function getProducts(){
        db.collection("products").get().then((querySnapshot) =>{
        productdisplay.innerHTML = "";
            querySnapshot.forEach((doc) => {
                productdisplay.innerHTML += ("<div class='productDesc'> " + doc.data().productName + " " + doc.data().price + " " +"<img class='productImage' src='"+ doc.data().productImage+"'>" + "</div>" + "<br>");
                });
        });
    }

getProducts();
