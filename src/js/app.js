import '../scss/app.scss';

window.addEventListener('DOMContentLoaded', () => {
	// This block will be executed once the page is loaded and ready

	const button = document.querySelector('.button');
	button.addEventListener('click', () => {
		for (let i = 0; i < 5; i++) {
			const article = document.createElement('article');
			const articleContent = document.createTextNode('Some cool text in the article');
			article.appendChild(articleContent);
			document.body.append(article);
		}
	});
});
