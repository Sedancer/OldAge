/**
 * Created by Dancer on 12.05.2017.
 */

( function(){
    'use strict';
    class OldAge{

        constructor( {el, data = {imgLeft : './img/imgl.jpg', imgRight : './img/imgr.jpg' } }) {
            this.el = el;
            this.data = data; // входящие данные
            this.initEvents()
        };

        _getCoords(el){
            let wrap = el.getBoundingClientRect();
               return {
                    top: wrap.top + pageYOffset,
                    left: wrap.left + pageXOffset
               }
        }
        initEvents(){
            this.el.addEventListener('mousedown',  this._mousedown.bind(this));

        }


        _setImg(newLeft){
            document.getElementsByClassName('old__imgRight')[0].style.left =`-${newLeft}px`;
            document.getElementsByClassName('old__imgRight')[0].firstChild.style.left =`${newLeft}px`;
            document.getElementsByClassName('thumb')[0].style.right =`${newLeft-15}px`;

        }

        _mousedown(event){

            let thumbElem = document.getElementsByClassName('old__imgRight')[0];
            let sliderElem  = document.getElementsByClassName('thumb')[0];
            let thumbCoords = this._getCoords(thumbElem);
            let sliderCoords = this._getCoords(sliderElem);
            let shiftX = event.pageX - thumbCoords.left;

            console.log('thumbCoords: '+  thumbCoords);
            console.log('sliderCoords: '+  sliderCoords);
            console.log('shiftX: '+  shiftX);

            thumbElem.addEventListener('mousemove',  this._mousemove.bind(this));

            this._setImg(shiftX)


        }
        _mousemove(event){
            let sliderElem = document.getElementsByClassName('old__imgRight')[0];
            let thumbElem = document.getElementsByClassName('thumb')[0];
            let thumbCoords = this._getCoords(thumbElem);
            let sliderCoords = this._getCoords(sliderElem);
            let shiftX = event.pageX - thumbCoords.left;
            console.log('thumbCoords: '+  thumbCoords);
            console.log('sliderCoords: '+  sliderCoords);
            console.log('shiftX: '+  shiftX);

            let newLeft = event.pageX - shiftX - sliderCoords.left;

            console.log('newLeft: '+  newLeft);
            // курсор ушёл вне слайдера
            if (newLeft < 0) {
                newLeft = 0;
            }
            let rightEdge = sliderElem.offsetWidth - thumbElem.offsetWidth;
            if (newLeft > rightEdge) {
                newLeft = rightEdge;
            }
            console.log(newLeft);



            this._setImg(newLeft)


        }



  render (){
    let imgLeft = this.data.imgLeft;
    let imgRight = this.data.imgRight;
    this.el.innerHTML =`<div class="old">
          <div class="old__imgLeft">
              <img src= '${imgLeft}'' /></div>
                <div class="old__imgRight"><img src='${imgRight}'/></div>
          <div class="thumb"></div>
          </div> `;
  }
}
window.OldAge = OldAge;
}());


let sly = new OldAge({
    el : document.getElementsByClassName('app')[0]
});
sly.render();
//sly._getCoords();
// sly._setImg( 300);


