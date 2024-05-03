export class Coordinates {

    constructor(mediaWidth,mediaHeight, width = undefined, positionX = undefined, positionY = undefined) {
        //TODO validate values
        this._mediaWidth = mediaWidth;
        this._mediaHeight = mediaHeight;
        this._width = width !== undefined ? width : 6;
        this._height = this.heightFromMedia(mediaWidth, mediaHeight, this.width);
        this._positionX = positionX !== undefined ? positionX : 0;
        this._positionY = positionY !== undefined ? positionY : 0;
        this.defineMinMaxX();
        this.defineMinMaxY();
        this.defineIncrX();
        this.defineIncrY();
    }
    
    heightFromMedia(mediaWidth, mediaHeight, width) {
        return width * mediaHeight / mediaWidth;
    }

    _mediaWidth;
    _mediaHeight;
    _width; //cambia con el zoom
    _height; //cambia con el zoom
    _positionX; //cambia con el mov
    _positionY; //cambia con el mov

    _minX;
    _maxX;
    _minY;
    _maxY;
    _incrementX;
    _incrementY;  



    moveLeft(){
        this.positionX = this.positionX - (0.1 * this.width);
        this.defineMinMaxX();
    }

    moveRigth() {
        this.positionX = this.positionX + (0.1 * this.width);
        this.defineMinMaxX();
    }

    moveUp() {
        this.positionY = this.positionY - 0.1 * this.height
        this.defineMinMaxY()
    }

    moveDown() {
        this.positionY = this.positionY + 0.1 * this.height
        this.defineMinMaxY()
    }

    zoomIn() {
        this.onZoomChange(0.8)
    
    }
    zoomOut() {
        this.onZoomChange(1.2)
    }

    onZoomChange(multiplier) {
        this.width = this.width * multiplier;
        this.height = this.heightFromMedia(this.mediaWidth, this.mediaHeight, this.width)
        this.defineMinMaxX()
        this.defineMinMaxY()
        this.defineIncrX()
        this.defineIncrY()
    }

    defineMinMaxX() {
        this.minX = this.positionX - (this.width / 2);
        this.maxX = this.minX + this.width;
    }

    defineMinMaxY() {
        this.minY = this.positionY - this.height / 2;
        this.maxY = this.minY + this.height;
    }
    defineIncrX() {
        this.incrementX = (this.maxX - this.minX) / this.mediaWidth;
    }
    defineIncrY() {
        this.incrementY = (this.maxY - this.minY) / this.mediaHeight;
    }

    get width() {
        return this._width;
    }
    set width(width) {
        this._width = width;
    }

    get height() {
        return this._height;
    }
    set height(height) {
        this._height = height;
    }
    get positionX() {
        return this._positionX;
    }
    set positionX(positionX) {
        this._positionX = positionX;
    }

    get positionY() {
        return this._positionY;
    }
    set positionY(positionY) {
        this._positionY = positionY;
    }


    get minX() {
        return this._minX;
    }
    set minX(minX) {
        this._minX = minX;
    }
    get maxX() {
        return this._maxX;
    }
    set maxX(maxX) {
        this._maxX = maxX;
    }

    get minY() {
        return this._minY;
    }
    set minY(minY) {
        this._minY = minY;
    }
    get maxY() {
        return this._maxY;
    }
    set maxY(maxY) {
        this._maxY = maxY;
    }

    get incrementX() {
        return this._incrementX;
    }
    set incrementX(incrementX) {
        this._incrementX = incrementX;
    }
    get incrementY() {
        return this._incrementY;
    }
    set incrementY(incrementY) {
        this._incrementY = incrementY;
    }
    get mediaWidth() {
        return this._mediaWidth;
    }
    set mediaWidth(mediaWidth) {
        this._mediaWidth = mediaWidth;
    }

    get mediaHeight() {
        return this._mediaHeight;
    }
    set mediaHeight(mediaHeight) {
        this._mediaHeight = mediaHeight;
    }

}