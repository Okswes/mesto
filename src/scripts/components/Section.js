export class Section{
<<<<<<< HEAD
    constructor( {renderer}, containerSelector){
        this._renderer = renderer;
        this._container = containerSelector;
    }
    addItem(items){
        items.reverse().forEach(item => this._renderer(item));
=======
    constructor( {items, renderer}, containerSelector){
        this._renderedItems = items.reverse();
        this._renderer = renderer;
        this._container = containerSelector;
    }
    addItem(){
        this._renderedItems.forEach(item => this._renderer(item));
>>>>>>> 706fcf060d2c76fde55dcad55a6c1e2ebd17cdf5
    }

    setItem(element) {
        this._container.prepend(element);
    }
}