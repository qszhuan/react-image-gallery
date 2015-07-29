'use restrict'

var React = require('react');
var _ = require('lodash');

module.exports = React.createClass({
	
	css:{
		imgShown : {
			width: '100%',
			height: '100%',
			position: 'absolute',
			display:'block'
		},
		imgHidden: {
			width: '100%',
			height: '100%',
			left: '-100%',
			position: 'absolute',
		}
	},

	displayName: 'Image Gallery',

	getInitialState: function(){
		var count = this.props.images.length;
		return {
			previousIndex:count - 1, 
			currentIndex:0, 
			nextIndex: 1, 
			imageList: this.getImageList(this.props.images),
			slideQueue:[]
		};
	},
	componentDidMount: function(){
		this.slideMonitor();
	},

	getNext: function(index){
		var count = this.props.images.length;
		var newIndex = (index + 1 + count) % count;
		return newIndex;
	},

	getPrev: function(index){
		var count = this.props.images.length;
		var newIndex = (index - 1 + count) % count;
		return newIndex;
	},

	slideMonitor: function(){
		var self = this;
		var dom = this.getDOMNode();

		var images = dom.getElementsByClassName('slide');
		
		(function checking(){
			var moving = false;
			setInterval(function(){
				if(moving === false && self.state.slideQueue.length>0){
					var seq = self.state.slideQueue.shift();
					moving = true;
					(function loop(i){
						if(seq.action === 'next'){
							images[seq.nextIndex].style['left'] = '100%';
						} else if(seq.action === 'prev'){
							images[seq.previousIndex].style['left'] = "-100%";
						}
						setTimeout(function(){
							if(seq.action === 'next'){
								var a = i;
								var b = (i-100);
								images[seq.currentIndex].style['left'] = a + '%';
								images[seq.previousIndex].style['left'] = b + '%';
							}
							else if(seq.action === 'prev'){
								var a = -i;
								var b = 100 -i;
								images[seq.currentIndex].style['left'] = a + '%';
								images[seq.nextIndex].style['left'] = b + '%';
							}
							i = i-1;
							if(i>=0){
								loop(i);
							} else{
								moving = false;
							}
						}, 1)
					})(100);
				}
			}, 10)
		})();
	},

	clickPrev: function(){
		var prevIndex = this.getPrev(this.state.currentIndex);
		var seq = {
			previousIndex:this.getPrev(prevIndex), 
			currentIndex: prevIndex,
			nextIndex: this.state.currentIndex,
			action: 'prev'};
		this.state.slideQueue.push(seq);
		this.setState(seq);
	},

	clickNext: function(){
		var nextIndex = this.getNext(this.state.currentIndex);
		var seq = {
			previousIndex:this.state.currentIndex, 
			currentIndex: nextIndex,
			nextIndex: this.getNext(nextIndex),
			action: 'next'};
		this.state.slideQueue.push(seq);
		this.setState(seq);
	},
	getImageList: function(images){
		var self = this;
		var imageList = _.map(images, function(path, index){
			if(index === 0){
				return (<img className = 'slide' src={path} alt={path} style = {self.css.imgShown}>
						</img>);
			}
			return (<img className = 'slide' src={path} alt={path} style = {self.css.imgHidden}>
						</img>);
		});
		return imageList;
	},

	render: function(){

		var width = this.props.width;
		var height = this.props.height;

		var divStyle = {
			width: width,
			height: 'auto',
			position:'absolute',
			margin:'auto'
		};
		
		var leftArrowStyle = {
			position: 'absolute',
			top: '50%',
			transform: 'translateY(-50%)',
			left: '0',
			zIndex: 1
		};
		
		var rightArrowStyle = {
			position: 'absolute',
			top: '50%',
			transform: 'translateY(-50%)',
			right: '0',
			zIndex:1
		};
		var slideContainerStyle = {
			width: width,
			height: height,
			border: '1px solid grey',
			overflow: 'hidden',
			position:'relative'
		};

		var self = this;

		return (<div style={divStyle}>
					<div style={leftArrowStyle} onClick={this.clickPrev}><img src="./media/left-arrow.png"></img></div>
					<div style={slideContainerStyle}>
						{self.state.imageList}
					</div>
					<div style={rightArrowStyle} onClick={this.clickNext}><img src="./media/right-arrow.png"></img></div>
			</div>);
	}
});