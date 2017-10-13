import {Dialog} from 'primereact/components/dialog/Dialog.js';


export class CustomDialog extends Dialog{
    center(){
        var x = (window.outerWidth - 900)/2;
        var y = (window.outerHeight - 700) /2;

        this.container.style.left = x + 'px';
        this.container.style.top = y + 'px';
    }
}