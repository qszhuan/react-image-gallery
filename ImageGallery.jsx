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
		var imageList = _.map(images, function(image){
			return (<li>
						<img src={image} width={width} alt={image}>
						</img>
					</li>);
		});

		return (<div>
<ul>
{imageList}
</ul>
			</div>);
	}
});