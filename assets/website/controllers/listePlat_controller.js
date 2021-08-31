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
        var listMenu = document.querySelectorAll(".liste-menu-indiv");
        var platIndiv = document.querySelectorAll(".liste-plat-indiv");
        var tabMenuMobile = document.querySelectorAll("option");
        listMenu[0].classList.add("active");
        platIndiv[0].classList.add("active");
        platIndiv[1].classList.add("active");
        listMenu.forEach(function (items,i){
            items.addEventListener('click',function (){
                listMenu.forEach(function (item,y){
                    item.classList.remove("active");
                    if(i===y){
                        item.classList.add("active");
                    }
                });
                platIndiv.forEach(function (itemAcc,x){
                    var text = listMenu[i].textContent;
                    itemAcc.classList.remove("active");
                    if(itemAcc.classList.contains(text)){
                        itemAcc.classList.add("active");
                    }
                });
            });
        });
    }
}
