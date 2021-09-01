import { Controller } from 'stimulus';

/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */
export default class extends Controller {
    connect() {
        var plus = document.querySelector(".plus");
        var moins = document.querySelector(".moins");
        var quantitePlat = document.querySelector(".quantitePlat");
        var prix=document.querySelector(".prixAvecQuantite");
        var prixUnite = prix.innerText;
        var x = 1;
        var res=0
        prix.innerHTML=prixUnite + " €"
        plus.addEventListener("click",function (){
            x ++;
            quantitePlat.innerHTML=x;
            res = prixUnite*x;
            var resultat = res.toFixed(2);
            prix.innerHTML=resultat + " €";
        });
        moins.addEventListener("click",function (){
            x --;
            if(x <= 1){
                x = 1;
            }
            quantitePlat.innerHTML=x;
            res = prixUnite*x;
            var resultat = res.toFixed(2);
            prix.innerHTML=resultat + " €";
        });

        var accompagnement = document.querySelectorAll(".menu p");
        var accompagnement_indiv=document.querySelectorAll(".accompagnement_indiv");
        accompagnement.forEach(function (items,i){
            items.addEventListener('click',function () {
                accompagnement.forEach(function (item,y){
                    if(item.classList.contains("active")){
                        item.classList.remove("active");
                    }
                });
                accompagnement_indiv.forEach(function (itemAcc,x){
                    itemAcc.classList.remove("active");
                    if(i===x){
                        itemAcc.classList.add("active");
                    }
                });
                items.classList.add("active");
            });
        });
    }
}
