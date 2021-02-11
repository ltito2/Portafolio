const selectElement = (element) => document.querySelector(element);
selectElement(element='.hamburger').addEventListener('click', () =>{
	selectElement(element='.hamburger').classList.toggle(token='active');
	selectElement(element='.nav-list').classList.toggle(token='active');
	selectElement(element='.lenguajes').classList.toggle(token='active');
});