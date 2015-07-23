'use restrict'

var React = require('react');
var _ = require('lodash');

module.exports = React.createClass({
	displayName: 'Image Gallery',
	getInitialState: function(){
		return {};
	},
	render: function(){
		var images = this.props.images;
		var width = this.props.width;
		var divStyle = {
			width:'400px',
			height:'350px',
		};
		var leftArrowStyle = {
		};
		var imgHideStyle = {
			display:'none'
		};
		var imgShowStyle = {
			display: 'block'
		};

		var imageList = _.map(images, function(image){
			return (<li>
						<img style={imgHideStyle} src={image} width={width} alt={image}>
						</img>
					</li>);
		});

		return (<div style={divStyle}>
					<div>Left</div>
					<ul>
					{imageList}
					</ul>
					<div>Right</div>
			</div>);
	}
});