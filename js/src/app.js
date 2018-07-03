window.addEventListener('DOMContentLoaded', function(e){
	const reports = document.querySelectorAll('.report');

	document.querySelector('#special-needs-toggle').addEventListener('click', function(e){
		if (this.classList.contains('sn-toggle--active')) {
			console.log('showing all');
			this.classList.remove('sn-toggle--active');
			for (let i=0; i < reports.length; i++){
				reports[i].classList.add('report--visible');
			}
		}
		else {
			console.log('showing only SN');
			this.classList.add('sn-toggle--active');
			for (let i=0; i < reports.length; i++){
				let report = reports[i];
				if (report.classList.contains('report--special-needs')) report.classList.add('report--visible')
				else report.classList.remove('report--visible');
			}
		}


	});
});