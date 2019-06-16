var element = document.getElementsByClassName('topbar')[0];
var positionInfo = element.getBoundingClientRect();
var height = positionInfo.height;
console.log(element);
if (height > 28) {
  console.log('height is greater than 28');
}
console.log(height);
