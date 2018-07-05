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

	document.querySelector('#special-needs-toggle').addEventListener('click', function(e){
		clickTrack("CPS Abuse - offender cards special needs toggled")
		if (this.classList.contains('sn-toggle--active')) {
			this.classList.remove('sn-toggle--active');
			for (let i=0; i < reports.length; i++){
				reports[i].classList.add('report--visible');
			}
		}
		else {
			this.classList.add('sn-toggle--active');
			for (let i=0; i < reports.length; i++){
				let report = reports[i];
				if (report.classList.contains('report--special-needs')) report.classList.add('report--visible')
				else report.classList.remove('report--visible');
			}
		}
		reportsGallery.resize();
	});
});
