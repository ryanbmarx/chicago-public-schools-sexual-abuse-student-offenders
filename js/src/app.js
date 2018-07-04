import Flickity from "flickity";

const flickityOptions = {
	lazyLoad: 2,
	wrapAround: true,
	pageDots: false,
	groupCells: true,
	freeScroll: true
};


window.addEventListener('DOMContentLoaded', function(e){
	const reports = document.querySelectorAll('.report');
	const reportsGallery = new Flickity(document.querySelector('.reports--gallery'), flickityOptions);

	document.querySelector('#special-needs-toggle').addEventListener('click', function(e){
		
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
