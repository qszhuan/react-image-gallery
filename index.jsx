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
React.render(<ImageGallery images={images} width='300px' />, document.getElementById('content'));
