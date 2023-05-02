import './index.html';
import './index.scss';



window.addEventListener("DOMContentLoaded", function (event) {
	
	
	const modalCloseBtn = document.querySelector('.close-btn');
	
	const modalTrigger = document.querySelectorAll('.open-modal');
	const modal = document.querySelector('.modal-form');
	
	function closeModal() {
		modal.classList.add('hide');
		modal.classList.remove('show');
		document.body.style.overflow = ''
	}
	
	function openModal() {
		modal.classList.add('show');
		modal.classList.remove('hide');
		document.body.style.overflow = ''
	}
	
	modalTrigger.forEach(item => {
		item.addEventListener('click', openModal)
	})
	modalCloseBtn.addEventListener('click', closeModal)
	
	
	modal.addEventListener('click', (e) => {
		if (e.target === modal) {
			closeModal()
		}
	});
	
	const forms = document.querySelectorAll('.form');
	
	
	forms.forEach(form => {
		form.onsubmit = async (e) => {
			e.preventDefault();
			alert('Форма отправлена');
			closeModal()
			let response = await fetch('send.php', {
				method: 'POST',
				// headers: {
				// 	'Content-type': 'application/json'
				// },
				body: new FormData(form)
			});
			form.reset();
			result.set({
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
			});
			
			let result = await response.json();
			//
			//
			
			
		};
	})



});