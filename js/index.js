var React = require('react')
import Compild from "./compiled"

var index = React.createClass({

	render: function() {
		return (
			<div />
		);
	}

});

module.exports = index;
var d = new Compild();

d.init()