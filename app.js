(function () {
  'use strict';

  class OldAge {
    constructor({ el, data = { imgLeft: './img/imgl.jpg', imgRight: './img/imgr.jpg' } }) {
      this.el = el;
      this.data = data;
      this.isDragging = false;

      this.render();
      this.cacheElements();
      this.initEvents();

      // Початкове положення повзунка по середині
      this._setImg(this.el.offsetWidth / 2);
    }

    cacheElements() {
      this.imgRightWrap = this.el.querySelector('.old__imgRight');
      this.imgRight = this.imgRightWrap.querySelector('img');
      this.thumb = this.el.querySelector('.thumb');
    }

    _getCoords(el) {
      const rect = el.getBoundingClientRect();
      return {
        top: rect.top + window.pageYOffset,
        left: rect.left + window.pageXOffset
      };
    }

    initEvents() {
      this.thumb.addEventListener('mousedown', this._mousedown.bind(this));
      document.addEventListener('mouseup', this._mouseup.bind(this));
      document.addEventListener('mousemove', this._mousemove.bind(this));
    }

    _setImg(newLeft) {
      // Обмеження по межах
      if (newLeft < 0) newLeft = 0;
      if (newLeft > this.el.offsetWidth) newLeft = this.el.offsetWidth;

      // Переміщення повзунка
      this.thumb.style.left = `${newLeft}px`;

      // Ширина правого зображення = від thumb до кінця
      this.imgRightWrap.style.width = `${this.el.offsetWidth - newLeft}px`;
      this.imgRightWrap.style.left = `${newLeft}px`;
    }

    _mousedown(event) {
      this.isDragging = true;
      this.shiftX = event.clientX - this._getCoords(this.thumb).left;
    }

    _mouseup() {
      this.isDragging = false;
    }

    _mousemove(event) {
      if (!this.isDragging) return;

      const sliderCoords = this._getCoords(this.el);
      let newLeft = event.pageX - this.shiftX - sliderCoords.left;

      this._setImg(newLeft);
    }

    render() {
      const imgLeft = this.data.imgLeft;
      const imgRight = this.data.imgRight;
      this.el.innerHTML = `
        <div class="old">
          <div class="old__imgLeft">
            <img src="${imgLeft}" />
          </div>
          <div class="old__imgRight">
            <img src="${imgRight}" />
          </div>
          <div class="thumb"></div>
        </div>`;
    }
  }

  window.OldAge = OldAge;
})();

// Ініціалізація
const sly = new OldAge({
  el: document.getElementsByClassName('app')[0]
});
