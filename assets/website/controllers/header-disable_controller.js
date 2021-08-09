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
        var containerHeader = document.getElementsByClassName("header-container");
        var containerFooter=document.getElementsByClassName("footer_container");
        containerHeader[0].classList.add("disable");
        containerFooter[0].classList.add("disable");

    }
}