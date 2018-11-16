
     //Assigns number to every post that you make
     function storeInfo(){
         if(!localStorage.getItem('postNumber')){
           localStorage.setItem("postNumber", JSON.stringify(0));
         }
         var count = JSON.parse(localStorage.getItem('postNumber'));
         count++;
         localStorage.setItem("postNumber", JSON.stringify(count));
         var scount = JSON.stringify(count);
//         console.log(count);
         //console.log(JSON.parse(localStorage.getItem('postNumber')));

         var inputName = document.getElementById("examplePost").value;
         localStorage.setItem("myPost"+scount, JSON.stringify((inputName)));
//         console.log(JSON.parse(localStorage.getItem('myPost'+scount)));
      }

      function storeComment(){
        
      }
