
//get references to the form elements on the page
 var uploader = document.getElementById("uploader");
 var fileButton = document.getElementById("fileButton");
 var holder = document.getElementById("holder");
 var productImage = document.querySelector(".productImage");
 var productdisplay = document.getElementById('products');
 var productDesc = document.querySelector('.productsDesc');
 var userDescription = document.querySelector("#userDescription");
 var signOut = document.getElementById("signOut");
 var user = window.localStorage;
var userJson = JSON.parse(user.getItem("users"));

 
    

 
 //get a ref to Firebase Storage
    var storage = firebase.storage();
    getProducts();

 // Fetch data back to form
    productdisplay.addEventListener("click", function(){
    console.log();
    });

// Clear the form
    function clearForm(){
        document.querySelector("#password").value = "";
        document.querySelector("#email").value = "";
    }


// Add new user

    function addUser(){
        var password = document.querySelector("#password").value;
        var email = document.querySelector("#email").value;
        firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
            alert("User is added");
        }).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                     // ...
        });  
        clearForm();
    }

// Sign In

    function signIn(){
    var password = document.querySelector("#password").value;
    var email = document.querySelector("#email").value;
     firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
                alert("Sign-in successful.");
                const infos = {
                    email: email,
                    status: "Connected"
                };
                
                user.setItem("users", JSON.stringify(infos));
                         modifyUI();

            }).catch(function(error) {
                 alert("Error signing in");
                 // Handle Errors here.
                     alert(error);
                 var errorCode = error.code;
                 var errorMessage = error.message;
                 // ...
            });

    }


// Sign Out


    function signingOut(){
            firebase.auth().signOut().then(function() {
            alert("Sign-out successful."); 
            const infos = {
                    email: userJson.email,
                    status: "Not Connected"
                };
                modifyUI();
                user.setItem("users", JSON.stringify(infos));
            }).catch(function(error) {
              alert(error)
            });
        
        console.log(userJson.status);    
    }


 ////////////// Will
 function getImageForPath(p){
         var storageRef = firebase.storage().ref();
         var spaceRef = storageRef.child(p);
            storageRef.child(p).getDownloadURL().then(function(url) {
                fullurl = url;
                alert(fullurl);
                holder.src = fullurl;
            }).catch(function(error) {
            //catch error here
            });
        }
 /////////////
 fileButton.addEventListener('change', function(e){
     
     //get the file
        alert("uploading file...");
        var file = e.target.files[0];
     
     //create the storage ref
        var storageRef = firebase.storage().ref('images/'+file.name);
     
     //uplaod the file
        var task = storageRef.put(file);
    
     //update the progress bar
     task.on('state_changed',
        function progress(snapshot) {
            var percentage = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
            uploader.value = percentage;
        },
        function error(err){
            console.log(err);
        },
        function complete(){
            alert("upload complete");
            product_image = getImageForPath('images/'+file.name);
        }
        );
 });

function modifyUI(){
   if (userJson.status == "Connected"){
    userDescription.innerHTML = userJson.email + " is connected";
} else {
    userDescription.innerHTML = " No user Connected";
} 
}


