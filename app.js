/**
 * Created by Dancer on 12.05.2017.
 */

( function(){
    'use strict';
    class OldAge{

        constructor( {el, data = {imgLeft : './img/imgl.jpg', imgRight : './img/imgr.jpg' }}) {
            this.el = el;
            this.data = data; // входящие данные
        };
        _getCoords(el){
            console.log( el);
            let wrap = el.getBoundingClientRect();
               return {
                    top: wrap.top + pageYOffset,
                    left: wrap.left + pageXOffset
               }
        }


        _setImg( num){
            let elem = document.getElementsByClassName('old__imgRight')[0];
            elem.style.left =`-${num}px`;
            elem.firstChild.style.left =`${num}px`;

            document.getElementsByClassName('thumb')[0].style.right =`${num-15}px`;
        }

        _mousedown(){
            let  aaa =  this._getCoords( this.thumb )
            console.log( aaa);
        }


        _swip(){

            this.el.addEventListener( "mousedown" ,  this._mousedown());

            //let thumbElem =  document.getElementsByClassName('thumb')[0];
            //thumbElem.onmousedown = function(e) {
            //    var thumbCoords = _getCoords(thumbElem);
            //
            //
            //
            //    var shiftX = e.pageX - thumbCoords.left;
            //    // shiftY здесь не нужен, слайдер двигается только по горизонтали
            //
            //    var sliderCoords = _getCoords(sliderElem);
            //
            //    document.onmousemove = function(e) {
            //        //  вычесть координату родителя, т.к. position: relative
            //        var newLeft = e.pageX - shiftX - sliderCoords.left;
            //
            //        // курсор ушёл вне слайдера
            //        if (newLeft < 0) {
            //            newLeft = 0;
            //        }
            //        var rightEdge = sliderElem.offsetWidth - thumbElem.offsetWidth;
            //        if (newLeft > rightEdge) {
            //            newLeft = rightEdge;
            //        }
            //
            //        thumbElem.style.left = newLeft + 'px';
            //    }
            //
            //    document.onmouseup = function() {
            //        document.onmousemove = document.onmouseup = null;
            //    };
            //
            //    return false; // disable selection start (cursor change)
            //};
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

sly._setImg( 300);

sly._swip();





//thumbElem.onmousedown = function(e) {
//    var thumbCoords = getCoords(thumbElem);
//    var shiftX = e.pageX - thumbCoords.left;
//    // shiftY здесь не нужен, слайдер двигается только по горизонтали
//
//    var sliderCoords = getCoords(sliderElem);
//
//    document.onmousemove = function(e) {
//        //  вычесть координату родителя, т.к. position: relative
//        var newLeft = e.pageX - shiftX - sliderCoords.left;
//
//        // курсор ушёл вне слайдера
//        if (newLeft < 0) {
//            newLeft = 0;
//        }
//        var rightEdge = sliderElem.offsetWidth - thumbElem.offsetWidth;
//        if (newLeft > rightEdge) {
//            newLeft = rightEdge;
//        }
//
//        thumbElem.style.left = newLeft + 'px';
//    }
//
//    document.onmouseup = function() {
//        document.onmousemove = document.onmouseup = null;
//    };
//
//    return false; // disable selection start (cursor change)
//};
//

//thumbElem.ondragstart = function() {
//    return false;
//};
//
//function getCoords(elem) { // кроме IE8-
//    var box = elem.getBoundingClientRect();
//
//    return {
//        top: box.top + pageYOffset,
//        left: box.left + pageXOffset
//    };
//
//}
//
