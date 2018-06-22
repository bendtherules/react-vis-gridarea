import GridArea from './grid-area';
export default GridArea;

// tslint:disable-next-line:only-arrow-functions
(function(currentWindow: Window) {
  // execute when load index.js

  // tslint:disable-next-line:no-console
  console.log('hello world');

  // assign GridArea to global
  const myWindow = currentWindow as any;
  myWindow.GridArea = GridArea;
  // we can use GridArea , execute following in console
  // var greet = new GridArea('myName');
  // greet.greet();
})(window);
