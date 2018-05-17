
let $ = require('jquery')
module.exports = function test(){

	$('#pp').css({'color': 'blue'})
	.animate({'left':'1000px'}, 1000)
	.animate({'left':'0px'}, 2000)

    return "Test..."
}