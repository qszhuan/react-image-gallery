'use restrict'

var React = require('react');
var ImageGallery = require('./ImageGallery');
var images = [
'./images/IMG_0003.JPG',
'./images/IMG_0013.JPG',
'./images/IMG_0021.JPG',
'./images/IMG_0026.JPG',
'./images/IMG_0027.JPG',
'./images/IMG_0031.JPG',
'./images/IMG_0035.JPG',
'./images/IMG_0039.JPG',
'./images/IMG_0045.JPG',
'./images/IMG_0072.JPG',
'./images/IMG_9987.JPG',
'./images/IMG_9988.JPG',
'./images/IMG_9990.JPG',
'./images/IMG_9997.JPG'];
React.render(<ImageGallery images={images} width='40vw' height='30vw' />, 
	document.getElementById('content'));

var images2 = [
"http://r.toau-media.com/images/landing/melbourne-timeoutau.jpg",
"http://static1.squarespace.com/static/538c7e25e4b0fcc5b74f826a/t/53970d8be4b06a6c9b89246b/1402408332568/Melbourne_Australia.jpg?format=1500w",
"https://upload.wikimedia.org/wikipedia/commons/1/11/Melbourne_Skyline_and_Princes_Bridge_-_Dec_2008.jpg"];

React.render(<ImageGallery images={images2} width='40vw' height='30vw' auto="3000" />, 
	document.getElementById('content2'));

