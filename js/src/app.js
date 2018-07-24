import Flickity from "flickity";
const pym = require('pym.js');
import clickTrack from "./click-track.js";



const flickityOptions = {
	lazyLoad: 2,
	wrapAround: true,
	pageDots: false,
	groupCells: true,
	freeScroll: true
};

// Listen for the loaded event then run the pym stuff.
window.addEventListener('load', function(e){
	window.pymChild = new pym.Child({});
	// pymChild.sendMessage('childLoaded');
	window.pymChild.sendHeight();
});

window.addEventListener('DOMContentLoaded', function(e){
	const reports = document.querySelectorAll('.report');
	const reportsGallery = new Flickity(document.querySelector('.reports--gallery'), flickityOptions);

	[].slice.call(document.querySelectorAll('.sn-toggle')).forEach(button => {
		button.addEventListener('click', function(e){
			// register our click
			clickTrack("CPS Abuse - offender cards special needs toggled")
			
			// Adjust active state
			document.querySelector('.sn-toggle--active').classList.remove('sn-toggle--active');
			this.classList.add('sn-toggle--active');
			console.log(this.classList.contains('sn-toggle--special'));

			if (this.classList.contains('sn-toggle--special')) {
				console.log("showing special");
				for (let i=0; i < reports.length; i++){
					if (reports[i].classList.contains('report--special-needs')) reports[i].classList.add('report--visible')
					else reports[i].classList.remove('report--visible');
				}
			}
			else {	
				console.log("showing all");
				for (let i=0; i < reports.length; i++){
					reports[i].classList.add('report--visible');
				}
			}
			// Resize the gallery so the visible slides move to new, organized horizontal positions.
			reportsGallery.resize();
		});
	});
});
